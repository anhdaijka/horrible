"""Measure draft prose; structural measurements are not literary certification."""
from pathlib import Path
import hashlib
import json
import re

ROOT = Path(__file__).resolve().parents[1]
drafts = sorted((ROOT / "drafts" / "r1").glob("CH-*.md"))
rows = []
for path in drafts:
    raw = path.read_bytes()
    text = raw.decode("utf-8")
    prose = "\n".join(
        line for line in text.splitlines()
        if not line.lstrip().startswith("#") and line.strip() not in {"---", "***", "* * *"}
    )
    count = len(prose.split())
    rows.append({
        "file": path.relative_to(ROOT).as_posix(),
        "words": count,
        "sha256": hashlib.sha256(raw).hexdigest(),
        "minimum_length_met": count >= 4000,
    })

result = {
    "counting_method": "Whitespace-separated prose units; heading and scene-separator lines excluded.",
    "chapters": rows,
    "chapter_count": len(rows),
    "total_words": sum(row["words"] for row in rows),
    "minimum_chapters_met": len(rows) >= 20,
    "all_chapter_minimums_met": bool(rows) and all(row["minimum_length_met"] for row in rows),
    "total_target_met": 110000 <= sum(row["words"] for row in rows) <= 150000,
    "literary_quality_certified": False,
}
(ROOT / "admin" / "draft-measurements.json").write_text(
    json.dumps(result, ensure_ascii=False, indent=2) + "\n", encoding="utf-8"
)
print(json.dumps({k: v for k, v in result.items() if k != "chapters"}, ensure_ascii=False))
