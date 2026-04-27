from __future__ import annotations

import sys


def main() -> int:
    sys.stderr.write(
        "Private source body extraction is disabled by the Game Design Knowledgebase "
        "P0 source-governance gate. Register metadata only, or provide a legal "
        "sidecar and use a separately audited importer.\n"
    )
    return 2


if __name__ == "__main__":
    raise SystemExit(main())
