from pathlib import Path
import re


def insert_before(path: str, marker: str, block: str, guard: str) -> None:
    p = Path(path)
    text = p.read_text(encoding="utf-8")
    if guard in text:
        return
    if marker not in text:
        raise SystemExit(f"marker not found in {path}: {marker}")
    p.write_text(text.replace(marker, block.rstrip() + "\n\n" + marker, 1), encoding="utf-8")


# 1) Style Bible: narrator social address.
insert_before(
    "author/style-bible.md",
    "## POV",
    """## Vietnamese narrative address / xưng hô

Narration must respect Vietnamese social distance instead of borrowing the bare-name convention of internal story files.

In close Khanh POV, prefer the relationship term that would naturally organize his perception: `mẹ anh`, `bố anh`, `chị Hạnh`, and similar kinship/social forms. When the narrator uses the personal name of an adult clearly belonging to an older generation, attach the appropriate address term: `bà Lan`, `ông Hùng`, `ông Nhân`, `bà Thủy` — not bare `Lan`, `Hùng`, `Nhân`, `Thủy`.

For someone older but still in a nearby generation, use the socially natural `anh/chị + tên` when Khanh would do so. Same-age childhood friends and peers may use the bare given name when the relationship supports it, as with `Mai`.

This is a **manuscript narration rule**, not a metadata rule. Character headings, YAML, registries, planning documents and internal canon references may use bare canonical names for precision. Dialogue follows the speaker's actual relationship to the person, not the narrator rule.

Do not switch arbitrarily between `Lan` and `bà Lan` or `Hùng` and `ông Hùng` inside prose. Once social framing is established, keep it natural and consistent.""",
    "## Vietnamese narrative address / xưng hô",
)

# 2) Style Bible: first appearance + body language.
insert_before(
    "author/style-bible.md",
    "## Dialogue — naturalness first",
    """## First appearance — physical anchor

A recurring or scene-important character should not arrive as a floating name and dialogue tag.

On the first **real on-page appearance** (not a passing phone/video mention), give the reader roughly 2–4 observable anchors integrated into action. Useful anchors include:

- approximate build / age impression;
- hair, clothing, hands or a work-worn detail;
- posture, gait, spatial habit or how the person handles objects;
- one task-specific physical behavior that belongs to their ordinary life.

Do not stop the scene for a police-sketch paragraph. Description should arrive while the person is already doing something. Do not list every permanent trait, and do not repeat the full description on later entrances. Re-description should usually notice what changed, what the POV needs now, or what becomes newly strange.

The purpose is not decorative portraiture. A stable physical baseline gives horror something concrete to disturb later.

## Body language / show-don't-tell

Body language is a primary evidence channel for fear, grief, concealment, exhaustion, social pressure and uncanny wrongness.

Before writing a dramatic deviation, know the character's ordinary physical baseline. The strongest signal is often **a familiar person failing to move like themselves**, not a generic fear adjective.

Prefer observable changes such as:

- a hand pausing over a task it normally completes automatically;
- grip strength changing, an object being held too long, or a simple action repeated;
- weight shifting toward/away from a door, person or sound;
- gaze failing to land where conversation expects it to land;
- speech timing changing while the face or hands continue another task;
- someone habitually in motion becoming still, or a still person becoming purposelessly busy;
- spatial mistakes: standing in the wrong place, not yielding familiar space, turning the body before the head, staying too close or too far away.

Do not assign universal meanings (`crossed arms = defensive`, `looking away = lying`). Read physical behavior against **that character's baseline, context, fatigue, work and relationships**.

For horror escalation, let the body carry intensity in stages. Small anomalies should begin small. Severe reactions — shaking, vomiting, collapse, loss of coordination, screaming — require earned severity and should not become stock punctuation.

For possession-like or apparition-adjacent scenes, describe the mismatch before any interpretation: a known gesture with the wrong timing, familiar posture in an impossible context, a body completing a habit while attention seems elsewhere. Do not let narrator labels replace observation.

Do not give each character one permanent fear tic and repeat it mechanically. Maintain a palette of plausible physical responses.""",
    "## First appearance — physical anchor",
)

# 3) Agent contract: future-prose gate.
insert_before(
    "AGENTS.md",
    "## Drafting boundary",
    """## Prose social-address + physicality gate — Horrible

Before drafting a character's first real manuscript appearance:

1. check the relevant character file for `Narrative reference`, `Physical presence` and `Body-language baseline`;
2. if those anchors do not exist and the detail will be durable, establish them before prose instead of improvising a different body every chapter;
3. integrate only the few physical details the POV would notice while the character is acting;
4. for older adults in manuscript narration, use Vietnamese social address (`ông/bà + tên`, or natural kinship terms such as `mẹ anh`, `bố anh`) rather than bare given names;
5. use body-language deviation from baseline as evidence before explaining fear, trauma, concealment or uncanny wrongness.

Internal YAML, registries and planning shorthand may keep bare canonical names. Do not apply manuscript honorifics mechanically to metadata.""",
    "## Prose social-address + physicality gate — Horrible",
)

# 4) Opening canon character physical baselines.
char_blocks = {
    "characters/nguyen-minh-khanh.md": ("## Agency", """## Narrative reference

In close-third narration, `Khanh` / `anh` are natural. His age and POV role do not require an honorific.

## Physical presence

Khanh is 27, medium-tall with a lean-to-average desk-worker build rather than an athletic one. His black hair is cut short but falls untidily when he has just woken or stopped caring about presentation. At home he defaults to plain, comfortable clothes and often looks less composed than his work persona suggests.

His hands are long-fingered and kept practical rather than styled; when relaxed at home he tends to sit or lean without much concern for posture.

## Body-language baseline

At home Khanh is physically loose, sometimes slouched or lazy. When genuine technical attention switches on, he tends to become more still: eyes stay on the source of a mismatch and his movements become deliberate.

Fear or uncertainty should not always become visible panic. Useful deviations include delaying one step longer than necessary, turning on a light he does not need, gripping an object too hard, choosing not to put his back to a space, moving through a task faster than usual, or becoming irritated because he notices himself hesitating.

Do not reuse one of these as a signature tic in every scene."""),
    "characters/tran-thi-lan.md": ("## Agency", """## Narrative reference

In Khanh-centered manuscript narration, prefer `mẹ anh` / `mẹ Khanh` when the relationship is foregrounded. When using her name, write `bà Lan`, never bare `Lan`. Internal canon/planning files may still use `Lan` as a precise identifier.

## Physical presence

Bà Lan is 55, slightly small in build but sturdy from years of standing, lifting stock and working a cramped shop counter. Her dark hair shows silver at the temples and is usually twisted or clipped/bundled out of the way while she works.

Her hands are one of the easiest ways to recognize her: dry from paper, string, adhesive and washing; nails kept short; movements quick and economical around bags, notes, change and stock.

## Body-language baseline

Her ordinary baseline is multitasking motion. She can keep a conversation going while counting money, folding paper, reaching for stock or watching the doorway.

Because that motion is normal, unease can register strongly when an automatic sequence breaks: counting the same notes twice, leaving a hand resting on a bag, forgetting the next shop action, looking past a waiting customer, or becoming unusually still before answering.

Do not translate every worry into trembling. For bà Lan, interruption of practiced shop rhythm is often more revealing."""),
    "characters/nguyen-van-hung.md": ("## Agency", """## Narrative reference

In Khanh-centered manuscript narration, prefer `bố anh` / `bố Khanh` when the family relation is active. When using his name, write `ông Hùng`, never bare `Hùng`.

## Physical presence

Ông Hùng is 57, medium-tall and lean with the compact strength of someone who has spent years around construction, repair and practical work. His forearms are darker from sun exposure, his knuckles and fingertips visibly rougher than Khanh's, and his short hair is already mixed with gray.

He tends to wear practical layers he can work in and will roll or push sleeves out of the way without thinking. When inspecting a small fault, he brings his face closer and narrows his eyes rather than narrating the problem aloud.

## Body-language baseline

His ordinary baseline is task-anchored: hands occupied, weight settled toward whatever he is fixing, carrying or checking. He often listens without fully turning toward the speaker.

Concern can appear as a tool stopping mid-motion, an unnecessary second check, a longer look before he resumes work, or a decision to put an object down before answering. Genuine fear should be especially noticeable if his normal practical follow-through disappears.

Do not make silence itself ominous; compare it to what his hands and attention normally do."""),
    "characters/hoang-ngoc-mai.md": ("## Agency", """## Narrative reference

Mai is Khanh's same-age childhood friend, so bare `Mai` is natural in close-third narration. Do not promote her to formal `cô Mai` merely because another character might address her that way.

## Physical presence

Mai is 27, medium height with a compact, active build shaped more by constant movement than by deliberate exercise. Her dark hair is usually tied or clipped out of the way for work. She dresses for roads, warehouses and the market rather than presentation: practical outer layer, trousers and shoes she can move quickly in.

A phone is often in her hand or immediately reachable, but it should not become a prop she performs in every scene.

## Body-language baseline

Mai rarely gives one conversation her whole body when work is active. Her eyes may check the road or a vehicle while she listens, she points people into position without ceremony, and she moves as though she already knows which gap in the market traffic she will use.

Work pressure makes that movement more directional and speech less padded. A useful uncanny/fear deviation would be the opposite of her baseline: failing to scan an obvious practical problem, stopping in the middle of motion without a reason, letting a phone ring unheard, or yielding space in a way Khanh has never seen her do.

Do not repeat these as formula; use the baseline to judge what would actually feel wrong."""),
    "characters/nguyen-minh-hanh.md": ("## Voice", """## Narrative reference

From Khanh's close POV, use `chị Hạnh` / `chị anh`; do not narrate her as bare `Hạnh`. Other POVs/dialogue should follow their actual social relationship to her.

## Physical presence

Chị Hạnh is 35, medium height and build, with a neat practical appearance that fits someone moving between school, home and family errands. Her dark hair is usually clipped or tied back when she is busy, and she favors simple clothes that do not require attention while working with children or helping family.

She is not physically delicate or presented as a caretaker icon; the memorable quality should be how quickly her face and posture reveal when she has moved from casual family talk into serious judgment.

## Body-language baseline

Her ordinary baseline is organized motion: straightening something while talking, gathering items into one place, checking a child/family detail before returning to the conversation.

When an ethical issue matters, she often becomes **less** busy rather than more expressive: hands stop, attention settles directly on the person, and she lets a silence remain instead of softening the question for them.

Do not turn this into a repeated courtroom pose. Her body language should remain domestic and context-specific."""),
}
for path, (marker, block) in char_blocks.items():
    insert_before(path, marker, block, "## Physical presence")

# 5) Chapter 1: first-appearance anchors.
p = Path("chapters/chapter-01.md")
text = p.read_text(encoding="utf-8")

text = text.replace(
    "Khanh nằm thêm một lúc, kéo chăn lên ngang vai.",
    "Khanh nằm thêm một lúc, kéo chăn lên ngang vai. Tóc anh bị gối ép bẹt một bên, cổ chiếc áo thun mặc ngủ hơi xoắn lại.",
    1,
)

old_family = (
    "Mẹ anh ngồi trong quầy, tóc búi vội sau gáy, đang lấy bút ghi gì đó lên một túi hàng. "
    "Bố anh kê một chân lên chiếc ghế thấp, cúi tháo cái bản lề ở cánh tủ kính phía sát tường."
)
new_family = (
    "Mẹ anh, bà Lan, ngồi trong quầy. Người bà nhỏ nhưng chắc, tóc búi vội sau gáy để lộ mấy sợi bạc ở thái dương; "
    "hai bàn tay khô, móng cắt ngắn, một tay giữ miệng túi hàng trong khi tay kia ghi mấy chữ lên mặt giấy. "
    "Bố anh, ông Hùng, kê một chân lên chiếc ghế thấp bên cánh tủ kính. Tay áo ông được đẩy lên quá cổ tay, để lộ cẳng tay sạm và "
    "mấy khớp ngón thô ráp; tóc cắt ngắn đã lẫn bạc. Ông đang cúi sát cái bản lề, tập trung vào nó hơn vào những tiếng người ngoài cửa."
)
if old_family in text:
    text = text.replace(old_family, new_family, 1)
else:
    print("warning: family first-appearance needle not found")

mai_pattern = re.compile(
    r"Khanh quay sang\.\s+Mai đang ở ngoài đường, một tay giữ điện thoại sát tai, tay kia ngoắc hai người đàn ông đẩy xe hàng lùi lại\."
)
text, mai_n = mai_pattern.subn(
    "Khanh quay sang. Mai đang ở ngoài đường, tóc buộc thấp sau gáy, mặc áo khoác gió với đôi giày đã dính một vệt bùn ở mũi. "
    "Một tay cô giữ điện thoại sát tai, tay kia ngoắc hai người đàn ông đẩy xe hàng lùi lại; mắt vẫn bám theo đầu chiếc xe tải chứ chưa buồn nhìn Khanh.",
    text,
    count=1,
)
print("Mai first-appearance replacements:", mai_n)

text = text.replace(
    "Anh dừng chân theo phản xạ.",
    "Bàn chân anh đã đặt lên bậc đầu tiên nhưng vẫn giữ nguyên ở đó.",
    1,
)

# 6) Existing manuscript narrator honorific sweep. Dialogue is speaker-dependent and exempt.
protected_pairs = [
    ("bà Lan", "__BA_LAN__"), ("Bà Lan", "__BA_LAN_CAP__"),
    ("cô Lan", "__CO_LAN__"), ("Cô Lan", "__CO_LAN_CAP__"),
    ("ông Hùng", "__ONG_HUNG__"), ("Ông Hùng", "__ONG_HUNG_CAP__"),
    ("bố Hùng", "__BO_HUNG__"), ("Bố Hùng", "__BO_HUNG_CAP__"),
    ("chị Hạnh", "__CHI_HANH__"), ("Chị Hạnh", "__CHI_HANH_CAP__"),
]

out = []
for line in text.splitlines():
    if line.lstrip().startswith("—"):
        out.append(line)
        continue
    for visible, token in protected_pairs:
        line = line.replace(visible, token)
    line = re.sub(r"\bLan\b", lambda m: "Bà Lan" if m.start() == 0 else "bà Lan", line)
    line = re.sub(r"\bHùng\b", lambda m: "Ông Hùng" if m.start() == 0 else "ông Hùng", line)
    line = re.sub(r"\bHạnh\b", lambda m: "Chị Hạnh" if m.start() == 0 else "chị Hạnh", line)
    for visible, token in protected_pairs:
        line = line.replace(token, visible)
    out.append(line)
text = "\n".join(out) + "\n"

# Word count: manuscript body only.
parts = text.split("---", 2)
body = parts[2] if len(parts) == 3 else text
wc = len(re.findall(r"\S+", body))
text = re.sub(r"(?m)^word-count:\s*\d+\s*$", f"word-count: {wc}", text, count=1)
p.write_text(text, encoding="utf-8")

idx = Path("chapters/_index.md")
it = idx.read_text(encoding="utf-8")
it = re.sub(
    r"(\| 1 \| Tiếng chợ \| Nguyễn Minh Khanh \| draft \| )\d+( \|)",
    lambda m: f"{m.group(1)}{wc}{m.group(2)}",
    it,
)
it = re.sub(r"(?m)^## Total Word Count: \d+$", f"## Total Word Count: {wc}", it)
idx.write_text(it, encoding="utf-8")

# 7) Session handoff.
sp = Path("author/session-state.md")
st = sp.read_text(encoding="utf-8")
if "## Narrative address + physicality gate now active" not in st:
    marker = "## Opening character voice locks"
    block = """## Narrative address + physicality gate now active

The author requires Vietnamese narrator address to respect age/social relation. In manuscript prose, older adults are not bare names: use natural kinship (`mẹ anh`, `bố anh`) or `ông/bà + tên`; for Khanh's older sister use `chị Hạnh`. Metadata/planning identifiers may remain bare names.

Opening canon character files now carry `Physical presence` and `Body-language baseline`. Before any future recurring character's first real prose appearance, establish equivalent anchors just in time rather than improvising them in the chapter.

Use body language as evidence against an established baseline. Especially in horror, show the familiar body behaving slightly wrong before narrator interpretation. Do not reduce fear to generic heartbeat/breath/trembling language."""
    st = st.replace(marker, block + "\n\n" + marker, 1)
st = re.sub(
    r"(Current Chapter 1: `chapters/chapter-01.md` — `Tiếng chợ`, \*\*)\d+( recorded words\*\*\.)",
    lambda m: f"{m.group(1)}{wc}{m.group(2)}",
    st,
)
sp.write_text(st, encoding="utf-8")

# 8) Audit note.
audit = Path("revisions/reviews/repo-address-physicality-audit.md")
if not audit.exists():
    audit.write_text(
        f"""# Repo Narrative Address + Physicality Audit

Status: **author-directed correction applied**.

## Problem found

The manuscript and craft rules had strong dialogue/agency guidance but still allowed internal-registry naming habits to leak into narration (`Lan`, `Hùng` as bare names). Opening character sheets also lacked durable physical baselines, weakening first appearances and reducing the writer's ability to show later fear/uncanny change through the body.

## Corrections applied

- manuscript narrator social-address rule added to `author/style-bible.md`;
- prose gate added to `AGENTS.md`;
- all five currently canonized opening characters now have narrative-reference, physical-presence and body-language guidance;
- Chapter 1 narrator references to the older generation were normalized;
- Chapter 1 first real appearances of bà Lan, ông Hùng and Mai were given integrated observable anchors;
- Khanh receives a small early physical anchor without a mirror/exposition paragraph;
- the final upstairs hesitation now uses a visible stopped movement rather than abstract reaction language;
- Chapter 1 word count synchronized to **{wc}**.

## Scope rule for future cast

Do **not** preload detailed appearances for every distant character now. Before a future recurring character enters prose for the first time, promote/create their character sheet and establish a small stable physical baseline plus body-language range. This keeps continuity strong without turning pre-draft planning into a casting encyclopedia.

## Horror application

The body is not a generic fear meter. Horror should exploit deviation from known behavior: the fast person becomes still, the careful hand repeats a simple task, a familiar gaze lands in the wrong place, a practical person fails to complete the obvious next action. Observation precedes interpretation.
""",
        encoding="utf-8",
    )

# 9) Audit remaining existing chapter narration.
problems = []
for cp in Path("chapters").glob("chapter-*.md"):
    for i, line in enumerate(cp.read_text(encoding="utf-8").splitlines(), 1):
        if line.lstrip().startswith("—"):
            continue
        checks = {
            "Lan": r"(?<!bà )(?<!Bà )(?<!cô )(?<!Cô )\bLan\b",
            "Hùng": r"(?<!ông )(?<!Ông )(?<!bố )(?<!Bố )\bHùng\b",
            "Hạnh": r"(?<!chị )(?<!Chị )\bHạnh\b",
        }
        for bare, pat in checks.items():
            if re.search(pat, line):
                problems.append(f"{cp}:{i}: {bare}: {line}")

print("Chapter word count:", wc)
if problems:
    print("Remaining possible bare older-name narration:")
    print("\n".join(problems))
    raise SystemExit(1)
