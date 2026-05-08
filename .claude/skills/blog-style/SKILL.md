---
name: blog-style
description: |
  Style and AI-tell pass for posts in src/data/blog/. Strips AI fingerprints
  (em-dashes, stray arrows, smart quotes, non-breaking hyphens, trailing
  whitespace), grounds abstract claims with concrete examples, and tightens
  readability. Run AFTER drafting, BEFORE committing.
  Use when writing or editing any file under src/data/blog/, or when the
  user says "polish the post", "style pass", "remove AI tells", or
  "make it sound human".
triggers:
  - polish the post
  - style pass
  - remove AI tells
  - make it sound human
  - blog style check
allowed-tools:
  - Bash
  - Read
  - Edit
  - Grep
  - AskUserQuestion
---

# blog-style

A three-pass review for posts in `src/data/blog/*.md`. Run after the draft is structurally done. Each pass has a clear scope; do not mix them.

## Scope

Applies to: `src/data/blog/**/*.md`

Skip files outside that path. The `code/` folder, README, and config files are not subject to this skill.

## Pass 1 — Strip AI tells (mechanical)

Run the scan first, then fix what it finds. Edge cases below are not AI tells; preserve them.

### Scan command

```bash
cd src/data/blog && for f in *.md; do
  echo "=== $f ==="
  echo "  em-dash (—)        : $(grep -o '—' "$f" | wc -l | tr -d ' ')"
  echo "  en-dash (–)        : $(grep -o '–' "$f" | wc -l | tr -d ' ')"
  echo "  flourish arrows    : $(grep -oE '→|←|⇒|⇐|↔' "$f" | wc -l | tr -d ' ')"
  echo "  curly quotes       : $(grep -oE '’|‘|“|”' "$f" | wc -l | tr -d ' ')"
  echo "  ellipsis char (…)  : $(grep -o '…' "$f" | wc -l | tr -d ' ')"
  echo "  nbsp-hyphen U+2011 : $(grep -o '‑' "$f" | wc -l | tr -d ' ')"
  echo "  trailing whitespace: $(grep -cE ' +$' "$f")"
  echo "  double-space gaps  : $(grep -cE '[^ ]  +[^ ]' "$f")"
done
```

### What to remove and how

| Tell | Replacement |
|---|---|
| ` — ` (em-dash with spaces) | `, ` or rewrite the sentence; `; ` if it joins two independent clauses; ` - ` only if the rhythm needs the pause |
| `word—word` (no spaces) | `word, word` or split into two sentences |
| `–` (en-dash) outside number ranges | replace with `-` (hyphen) or rewrite |
| `→ ← ⇒ ⇐ ↔` as flourish | drop or replace with words ("`A → B`" annotation in prose → "A becomes B") |
| `’ ‘ “ ”` (curly quotes) | straight `'` and `"` — curly quotes appear when content is pasted from word processors or generated; the rest of the blog uses straight quotes |
| `…` (single-char ellipsis) | three dots `...` |
| `‑` (non-breaking hyphen U+2011) | `-` (regular hyphen). Classic AI tell — looks identical, breaks copy-paste |
| Trailing whitespace at line end | strip. If it was an intentional markdown hard-break, replace with explicit `<br/>` or restructure |
| `word  word` (double space) | single space, unless inside a code block or aligning a table |

### Edge cases — DO NOT remove these

1. **Em-dash in quote attributions.** `> — Alice, Chapter 2` is standard typography for citing a speaker. Keep.
2. **Arrows inside fenced code blocks.** ASCII pipeline diagrams use `↓` and `→` to draw connectors. Removing breaks the diagram.
3. **`→` in technical notation outside code.** `Question + context → prompt` and `top_k = 5 → 10 → 15` are shorthand for transformation, not flourish. Keep.
4. **En-dash in numeric ranges.** `1–2 citations` is correct typography (though `1-2` also reads fine; either is OK).
5. **Curly quotes inside literal content** (e.g. inline strings showing how something looks). Use judgment.

When in doubt, ask the author with `AskUserQuestion` rather than guessing.

## Pass 2 — Bring in examples (substantive)

Abstract claims slide off the reader. Concrete examples stick. After the mechanical pass, walk the post and find sentences that assert something without grounding it.

### What to look for

- **Unsupported claims.** "Most teams do X." → "We saw three teams in a row hit X — Acme, Globo, and Initech." (Use placeholders per the project's no-real-names rule.)
- **Adjective-heavy abstractions.** "Performance was significantly better." → "Performance went from 12/30 to 22/30 — a +10 point jump."
- **Vague references.** "When the system fails..." → "When the retriever fetches the wrong chunk — like grabbing the trial scene when you asked about the tea party..."
- **Generic explanations.** "RAG retrieves relevant context." → "RAG turns 'who did Alice meet?' into an embedding, finds the three closest chunks in LanceDB, and stuffs them into the prompt."
- **Process descriptions without numbers.** "We tried different chunk sizes." → "We tried 256, 512, 1024, and 2048 tokens; 1024 won by 10 points."

### Heuristic: one concrete per claim

After every abstract sentence, ask: *what's the smallest concrete thing I could attach to this?*

- A number
- A name (placeholder if needed — see project rule on real names)
- A specific failure case
- A side-by-side before/after
- A literal user query

If none exists, either find one or weaken the claim to match what you can support.

### When to skip

- Setup/transition sentences. "In Part 1 I introduced the framework." doesn't need an example.
- Conclusions that summarize examples already given in the section.
- Definitions where adding an example would dilute the precision.

## Pass 3 — Readability (line-level)

Once the post is grounded, read every sentence and tighten it. Goals:

1. **Average sentence length 12–20 words.** A long sentence is fine; three in a row is fatigue.
2. **Active voice by default.** "The retriever fetches chunks" beats "Chunks are fetched by the retriever."
3. **Cut adverbs and intensifiers.** `very`, `really`, `simply`, `basically`, `actually`, `literally`, `just` — most can go.
4. **Cut filler phrases.** `in order to` → `to`. `at the end of the day` → delete. `it's important to note that` → delete. `the fact that` → delete.
5. **Prefer Anglo-Saxon verbs.** `use` over `utilize`, `help` over `facilitate`, `make` over `leverage`, `start` over `initiate`.
6. **First person where it's an opinion or experience.** The blog is personal. `I tried X and it failed` reads more honestly than `Trying X resulted in failure`.
7. **One idea per paragraph.** If a paragraph turns a corner, split it.
8. **Read it out loud (mentally).** If you stumble, the reader will too.

### Things to *not* do in the readability pass

- Don't add headings to break up flow. The structure is already set in Pass 1.
- Don't add hedges ("might", "perhaps", "could be argued") to soften strong claims that the author meant strongly.
- Don't replace specific terms with generic ones for "accessibility." `BM25`, `top_k`, `LanceDB` are the audience's vocabulary.
- Don't smooth out the author's voice. If the draft has a sharp opinion or a joke, keep it.

## Other AI tells worth flagging during review

These are pattern-level, not character-level. Read for them in Pass 2/3:

- **Tricolons everywhere.** "It's fast, cheap, and reliable." Three-item lists with parallel grammar in every other sentence.
- **"It's not X, it's Y" inversions.** Reads clever once, formulaic by the third occurrence.
- **Throat-clearing openers.** "In today's fast-paced world...", "It's no secret that...", "More than ever before..."
- **Conclusion that restates the title.** If the closing paragraph is a paraphrase of the headline, cut it.
- **Bullet sprawl.** Long stretches of prose turned into bullet lists without reason. Bullets are for items that are genuinely parallel.
- **Heading every three paragraphs.** Sections should map to logical breaks, not pacing anxiety.
- **"Key Takeaways" boxes** at the end of every section.
- **Bold-for-emphasis on common nouns.** Bold a *term* the first time you define it; don't bold a noun every time it appears.
- **Closing "Hope this helps!" or "Let me know if..."** style sign-offs. Inappropriate for a blog post.
- **Repeating the question before answering.** "Why does this matter? It matters because..." — just answer.
- **Universal-claim openers.** "Everyone knows...", "We've all been there..."
- **Title Case Section Headers** when the rest of the blog uses sentence case (or vice versa). Pick one and be consistent.

## Workflow

When the user invokes this skill — or when you're about to commit a post — run:

1. **Scan.** Use the bash block in Pass 1. Print the residual counts so the author can see what's left.
2. **Pass 1.** Fix the mechanical tells. For each non-zero count, jump to the matches with `grep -n` and replace. Preserve edge cases listed above.
3. **Pass 2.** Read the post end-to-end. Mark abstract claims; either ground them or weaken them. Show the author your suggested examples before editing if multiple paragraphs need them — bulk substantive edits without confirmation can override voice.
4. **Pass 3.** Line-level readability. Run silently for obvious cuts (adverbs, "in order to", passive voice). For anything that changes meaning or voice, propose first.
5. **Re-scan.** Run the bash block again. Confirm zero residuals on the mechanical tells.
6. **Diff summary.** Tell the author what changed in plain terms: "Replaced 21 em-dashes (kept 2 in quote attributions). Grounded the chunking-experiments paragraph with the 12 → 22 → 27 number progression. Cut 8 adverbs."

## Project rules to respect

- **No real customer or founder names.** Use placeholders (Acme, Globo, Initech, etc.). This rule lives in user memory; do not override it even when adding examples.
- **Tone is observational and slightly dry**, not motivational. Examples should illustrate, not inspire.
- **Quote attributions stay in em-dash form** (`> — Author, Source`) — the project uses this consistently in blockquote citations.

## When to ask the author

Use `AskUserQuestion` for:

- Replacement style for a specific em-dash where comma/hyphen/semicolon all change rhythm differently.
- Whether a claim should be grounded with an example or weakened — both are valid; only the author knows which they meant.
- Whether to keep an arrow that's borderline between flourish and notation.

Do **not** ask about:

- Trailing whitespace, double spaces, non-breaking hyphens, smart quotes — just fix.
- Adverb cuts and "in order to" → "to" — just fix.
- Curly quote → straight quote conversion — just fix (the rest of the blog uses straight quotes).

## Verification

After all passes, the scan should show:

```
em-dash (—)        : 0 (or only inside quote attributions)
en-dash (–)        : 0 (or only in number ranges)
flourish arrows    : 0 (or only inside code blocks / technical notation)
curly quotes       : 0 (or only inside literal-content quotes)
ellipsis char (…)  : 0
nbsp-hyphen U+2011 : 0
trailing whitespace: 0
double-space gaps  : 0
```

If any non-zero remains, justify it in the diff summary.
