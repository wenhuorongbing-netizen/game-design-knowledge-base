from __future__ import annotations

import json
import re
import sys
import zipfile
from html import unescape
from pathlib import Path
from typing import Any
import xml.etree.ElementTree as ET

from bs4 import BeautifulSoup
from pypdf import PdfReader


def clean_text(value: str) -> str:
    value = unescape(value or "")
    value = re.sub(r"\s+", " ", value).strip()
    return value


def pdf_outline(reader: PdfReader) -> list[dict[str, Any]]:
    items: list[dict[str, Any]] = []
    try:
        outline = reader.outline
    except Exception:
        return items

    def walk(nodes: list[Any], depth: int) -> None:
        for node in nodes:
            if isinstance(node, list):
                walk(node, depth + 1)
                continue
            title = getattr(node, "title", "") or str(node)
            title = clean_text(title)
            if not title:
                continue
            page_number = None
            try:
                page_number = reader.get_destination_page_number(node) + 1
            except Exception:
                page_number = None
            items.append({"label": title, "depth": depth, "page": page_number})

    if isinstance(outline, list):
        walk(outline, 0)
    return items


def extract_pdf(source: Path) -> dict[str, Any]:
    reader = PdfReader(str(source))
    metadata = reader.metadata or {}
    sample_sections = []
    preview_parts = []
    for index, page in enumerate(reader.pages[:8]):
        text = clean_text(page.extract_text() or "")
        if not text:
            continue
        clipped = text[:2000]
        sample_sections.append(
            {
                "label": f"Page {index + 1}",
                "location": {"page": index + 1},
                "text": clipped,
            }
        )
        if len(preview_parts) < 3:
            preview_parts.append(clipped[:1200])

    return {
        "format": "pdf",
        "metadata": {
            "title": clean_text(str(metadata.get("/Title", ""))),
            "authors": [clean_text(str(metadata.get("/Author", "")))] if metadata.get("/Author") else [],
            "subject": clean_text(str(metadata.get("/Subject", ""))),
            "producer": clean_text(str(metadata.get("/Producer", ""))),
        },
        "page_count": len(reader.pages),
        "toc": pdf_outline(reader),
        "sample_sections": sample_sections,
        "preview_text": "\n\n".join(preview_parts).strip(),
    }


def epub_rootfile(zf: zipfile.ZipFile) -> str:
    container = ET.fromstring(zf.read("META-INF/container.xml"))
    rootfile = container.find(".//{*}rootfile")
    if rootfile is None:
        raise RuntimeError("EPUB container.xml missing rootfile")
    return rootfile.attrib["full-path"]


def parse_epub_metadata(package_root: ET.Element) -> dict[str, Any]:
    metadata_node = package_root.find(".//{*}metadata")
    if metadata_node is None:
        return {"title": "", "authors": [], "language": "", "publisher": "", "identifier": ""}

    def first_text(xpath: str) -> str:
        node = metadata_node.find(xpath)
        return clean_text(node.text if node is not None and node.text else "")

    authors = [
        clean_text(node.text or "")
        for node in metadata_node.findall(".//{*}creator")
        if clean_text(node.text or "")
    ]
    return {
        "title": first_text(".//{*}title"),
        "authors": authors,
        "language": first_text(".//{*}language"),
        "publisher": first_text(".//{*}publisher"),
        "identifier": first_text(".//{*}identifier"),
    }


def extract_epub(source: Path) -> dict[str, Any]:
    with zipfile.ZipFile(source) as zf:
        rootfile = epub_rootfile(zf)
        package_dir = str(Path(rootfile).parent).replace("\\", "/")
        package_root = ET.fromstring(zf.read(rootfile))
        metadata = parse_epub_metadata(package_root)

        manifest_items = {}
        for item in package_root.findall(".//{*}manifest/{*}item"):
            manifest_items[item.attrib.get("id", "")] = {
                "href": item.attrib.get("href", ""),
                "media_type": item.attrib.get("media-type", ""),
                "properties": item.attrib.get("properties", ""),
            }

        sample_sections = []
        toc = []
        preview_parts = []

        spine = package_root.findall(".//{*}spine/{*}itemref")
        for itemref in spine[:10]:
            item = manifest_items.get(itemref.attrib.get("idref", ""))
            if not item:
                continue
            href = item["href"]
            if not href:
                continue
            full_path = f"{package_dir}/{href}" if package_dir and package_dir != "." else href
            try:
                raw = zf.read(full_path)
            except KeyError:
                continue

            soup = BeautifulSoup(raw, "lxml")
            title = clean_text(
                (soup.find(["h1", "h2", "title"]).get_text(" ", strip=True) if soup.find(["h1", "h2", "title"]) else Path(href).stem)
            )
            text = clean_text(soup.get_text(" ", strip=True))
            if not text:
                continue
            clipped = text[:2500]
            toc.append({"label": title, "depth": 0, "href": full_path})
            sample_sections.append(
                {
                    "label": title,
                    "location": {"href": full_path},
                    "text": clipped,
                }
            )
            if len(preview_parts) < 3:
                preview_parts.append(clipped[:1200])

        return {
            "format": "epub",
            "metadata": metadata,
            "page_count": None,
            "toc": toc,
            "sample_sections": sample_sections,
            "preview_text": "\n\n".join(preview_parts).strip(),
        }


def main() -> int:
    if len(sys.argv) != 3:
        print("usage: extract_private_book_artifacts.py <source> <target>", file=sys.stderr)
        return 2

    source = Path(sys.argv[1])
    target = Path(sys.argv[2])

    if not source.exists():
        print(f"source missing: {source}", file=sys.stderr)
        return 2

    suffix = source.suffix.lower()
    try:
        if suffix == ".pdf":
            payload = extract_pdf(source)
        elif suffix == ".epub":
            payload = extract_epub(source)
        else:
            payload = {
                "format": suffix.lstrip("."),
                "metadata": {"title": source.stem, "authors": []},
                "page_count": None,
                "toc": [],
                "sample_sections": [],
                "preview_text": "",
                "warnings": ["Unsupported extract format for deep parsing."],
            }
    except Exception as exc:
        payload = {
            "format": suffix.lstrip("."),
            "metadata": {"title": source.stem, "authors": []},
            "page_count": None,
            "toc": [],
            "sample_sections": [],
            "preview_text": "",
            "warnings": [f"Extraction failed: {exc.__class__.__name__}: {exc}"],
            "extraction_status": "failed",
        }
    else:
        payload["extraction_status"] = "ok"

    payload["source_path"] = str(source)
    payload["file_name"] = source.name

    target.parent.mkdir(parents=True, exist_ok=True)
    target.write_text(json.dumps(payload, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
