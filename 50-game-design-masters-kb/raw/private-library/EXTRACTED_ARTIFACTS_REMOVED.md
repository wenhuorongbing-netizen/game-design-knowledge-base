# Extracted Private-Library Artifacts Removed

Date: 2026-04-27

P0 source-governance repair: generated extraction artifacts from high-risk/private book files were removed from repository release scope.

Reason: these artifacts contained or could contain `sample_sections`, `preview_text`, or other source-body excerpts. The Game Design Knowledgebase policy permits metadata-only handling unless the user provides a legal sidecar.

Removed files:
- $(advanced-game-design-a-systems-approach-383afdfefa9c.json.Name) (6704 bytes)
- $(a-theory-of-fun-for-game-design-48bbb79f791c.json.Name) (10920 bytes)
- $(challenges-for-game-designers-50c50beda57b.json.Name) (10935 bytes)
- $(characteristics-of-games-b0ae59f87d22.json.Name) (16104 bytes)
- $(game-design-workshop-26b8de8e4e67.json.Name) (59957 bytes)
- $(game-feel-18ac41107c35.json.Name) (20333 bytes)
- $(game-feel-920fb46fc882.json.Name) (23887 bytes)
- $(game-mechanics-advanced-game-design-34af1b238ac7.json.Name) (19338 bytes)
- $(level-up-2d0c631a9566.json.Name) (15503 bytes)
- $(play-matters-f1ee20310d33.json.Name) (5563 bytes)
- $(rules-of-play-0d2c1d43ee51.json.Name) (2924 bytes)
- $(the-aesthetic-of-play-5c94bc1bc7fc.json.Name) (5405 bytes)
- $(the-art-of-game-design-19c91c891667.json.Name) (11999 bytes)
- $(the-game-design-reader-0d2c1d43ee51.json.Name) (2924 bytes)

Allowed replacement: record source metadata in `/kb/01_sources/sources.json`; attach user-provided legal notes or legal sidecars before any body-level processing.
