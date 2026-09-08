from pathlib import Path
import re

p = Path('chapters/chapter-01.md')
text = p.read_text(encoding='utf-8')

# Honorifics at sentence/paragraph starts must be capitalized.
text = re.sub(r'(?m)^bà Lan\b', 'Bà Lan', text)
text = re.sub(r'(?m)^ông Hùng\b', 'Ông Hùng', text)
text = re.sub(r'(?m)^chị Hạnh\b', 'Chị Hạnh', text)
text = text.replace('. bà Lan', '. Bà Lan').replace('. ông Hùng', '. Ông Hùng').replace('. chị Hạnh', '. Chị Hạnh')

# Make the final hesitation visible rather than abstract.
text = text.replace('Anh dừng chân.\n\n— Mẹ có lên trên không?', 'Bàn chân anh đã đặt lên bậc đầu tiên nhưng vẫn giữ nguyên ở đó.\n\n— Mẹ có lên trên không?', 1)

parts = text.split('---', 2)
body = parts[2] if len(parts) == 3 else text
wc = len(re.findall(r'\S+', body))
text = re.sub(r'(?m)^word-count:\s*\d+\s*$', f'word-count: {wc}', text, count=1)
p.write_text(text, encoding='utf-8')

idx = Path('chapters/_index.md')
it = idx.read_text(encoding='utf-8')
it = re.sub(r'(\| 1 \| Tiếng chợ \| Nguyễn Minh Khanh \| draft \| )\d+( \|)', lambda m: f'{m.group(1)}{wc}{m.group(2)}', it)
it = re.sub(r'(?m)^## Total Word Count: \d+$', f'## Total Word Count: {wc}', it)
idx.write_text(it, encoding='utf-8')

sp = Path('author/session-state.md')
st = sp.read_text(encoding='utf-8')
st = re.sub(r'(Current Chapter 1: `chapters/chapter-01.md` — `Tiếng chợ`, \*\*)\d+( recorded words\*\*\.)', lambda m: f'{m.group(1)}{wc}{m.group(2)}', st)
sp.write_text(st, encoding='utf-8')

print('word count', wc)
