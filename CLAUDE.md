# Personal blog

Astro blog. Posts live in `src/data/blog/*.md`.

## Writing posts

When writing or editing any file under `src/data/blog/`, run the project skill **`blog-style`** before committing. It does three passes:

1. Strips AI tells (em-dashes, stray arrows, smart quotes, non-breaking hyphens, trailing whitespace, double spaces).
2. Grounds abstract claims with concrete examples.
3. Tightens readability (sentence length, active voice, cut adverbs/filler).

The skill is at `.claude/skills/blog-style/SKILL.md`. It includes a scan command, edge cases to preserve (quote-attribution em-dashes, ASCII-diagram arrows, technical `→` notation), and a list of pattern-level AI tells to flag during review.

## Project rules

- **No real customer or founder names** in published posts. Use placeholders (Acme, Globo, Initech). Tone down closing pitches.
- Quote attributions stay in em-dash form: `> — Author, Source`.
- Blog uses straight quotes (`'` `"`), not curly.
