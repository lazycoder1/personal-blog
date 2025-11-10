---
title: "AliceEval - Part 1: Setting Up AliceEval"
author: Gautam G Sabhahit
pubDatetime: 2025-11-10T00:00:00Z
slug: part-1-rag-through-wonderland
featured: false
draft: false
tags:
  - RAG
  - evaluation
  - alice-eval
ogImage: ../../assets/images/posts/alice-in-wonderland/ogImage.png
description: "Kick off the RAG Through Wonderland series by defining AliceEval and outlining the five-level journey from factual recall to external knowledge synthesis."
canonicalURL: https://lazybuilds.com/rag-through-wonderland-part-1
---

> “Who in the world am I? Ah, that’s the great puzzle.”  
> - *Alice, Chapter 2*

<!-- *Part 1 of the “RAG Through Wonderland” Series* -->
---

##  Entering the Rabbit Hole

This started because I kept rolling my eyes at my own RAG demos. They looked fine in slides, then stumbled on real questions. I want to fix that - by building in public and seeing where it breaks.

**AliceEval** is my way to do that: a small, opinionated project to move from *“retrieving paragraphs”* to *“retrieving meaning.”*

In this post you’ll get:
- A simple plan for how I’ll build and grade a RAG on Alice in Wonderland
- The five levels I’ll climb (from factual recall to external knowledge)
- A starter repo and eval sets so you can try it too

---

##  The Goal of the Journey

I’m not trying to benchmark a product or publish a paper - I’m trying to **learn by building**.

Over the coming weeks, I’ll evolve my RAG system through **five distinct levels of complexity**, each with its own dataset of questions, evaluation criteria, and lessons.

At each level, I’ll:
1. Implement or improve a RAG setup.
2. Evaluate its ability to answer increasingly complex questions.
3. Reflect on *why* it succeeds or fails.
4. Iterate until it reaches a **10/10 score** for that level.

By the end, I should understand not just *how to retrieve knowledge*, but *how retrieval becomes reasoning.*

---

##  Why Alice in Wonderland?

Why Alice? It’s short, public domain, and weird in the right ways. Scenes flip logic mid paragraph - which is exactly where my RAGs usually wobble. Also, I just like the book.

Here’s why it fits so beautifully for RAG evaluation:
- It’s **public domain**, short, and semantically dense.
- It contains **clear facts** (“Who stole the tarts?”), **localized reasoning** (“Why did Alice cry?”), and **abstract themes** (“What does growing up mean?”).
- It oscillates between sense and nonsense - which makes it ideal to test how a model handles *ambiguity, contradiction, and metaphor.*

Just as Alice’s perception evolves through the story, I’ll evolve my RAG through structured experimentation - from *recall* -> *reasoning* -> *reflection*.

---

##  The Five Levels of Wonderland

Each level of AliceEval represents a distinct form of reasoning that a RAG system must master.  
Think of them as **five progressively deeper layers** of understanding - from what happened, to why it happened, to what it means.

| Level | Focus | Description | What It Tests |
|-------|--------|--------------|----------------|
| **Level 1 - Factual Recall** | Literal comprehension | Answering direct questions that exist word-for-word in the book. | Tests retrieval accuracy, chunk quality, and embedding relevance. |
| **Level 2 - Contextual Reasoning** | Local logic | Understanding short cause-effect relationships within or across nearby passages. | Tests multi-chunk retrieval, contextual linking, and coherence. |
| **Level 3 - Thematic Synthesis** | Symbolic and narrative connection | Summarizing or interpreting the story’s broader themes. | Tests summarization quality, semantic merging, and information hierarchy. |
| **Level 4 - Relational Reasoning** | Multi-hop understanding | Analyzing relationships and abstract logic between characters or events. | Tests entity linking, graph traversal, and multi-step reasoning. |
| **Level 5 - External Knowledge Integration** | Cross-domain synthesis | Bringing in real-world context (Carroll’s life, Victorian culture, literary criticism). | Tests external corpus retrieval, source routing, and interpretive reasoning. |

Each level is not just harder - it’s *qualitatively different.*  
To progress, the system must adapt: improving retrieval methods, context synthesis, and conceptual grounding.

---

##  What Each Level Teaches

<details open>
<summary> <strong>Level 1: The Mirror of Memory</strong></summary>

Can it look up the obvious stuff without getting cute?

- **Focus**: Literal comprehension and exact facts  
- **Tests**: Retrieval accuracy, chunk quality, embedding relevance

This stage tests whether a RAG can do the simplest task - find and reproduce *exact facts* from a text. Success here isn’t about intelligence; it’s about alignment. If I can’t retrieve “Who is the White Rabbit?”, there’s no point in chasing Wonderland’s deeper mysteries.

</details>

---

<details>
<summary> <strong>Level 2: The Pool of Context</strong></summary>

- **Focus**: Local logic and short cause–effect  
- **Tests**: Multi‑chunk retrieval, contextual linking, coherence

Once facts work, context begins. Here I’ll test questions like “Why does Alice cry after shrinking?” - requiring multiple passages and a sense of *story flow*. This is where retrieval becomes narrative comprehension. I expect to experiment with chunk sizes, reranking, and query expansion here.

</details>

---

<details>
<summary> <strong>Level 3: The Garden of Meaning</strong></summary>

- **Focus**: Symbolic and thematic synthesis  
- **Tests**: Summarization, semantic merging, information hierarchy

At this stage, literal retrieval isn’t enough. The questions become interpretive - “How do Alice’s size changes reflect emotional growth?” This requires summarization, paraphrase understanding, and a touch of symbolic reasoning. I’ll start testing hierarchical retrieval and map‑reduce summarization chains.

</details>

---

<details>
<summary> <strong>Level 4: The Queen’s Logic</strong></summary>

- **Focus**: Multi‑hop and relational reasoning  
- **Tests**: Entity linking, graph traversal, multi‑step reasoning

Now we step into *graph‑level reasoning*. Questions like “How do authority figures in Wonderland shape Alice’s autonomy?” require understanding relationships, not paragraphs. This will push me toward entity extraction, multi‑hop reasoning, and possibly graph databases.

</details>

---

<details>
<summary> <strong>Level 5: Through the Looking Glass</strong></summary>

- **Focus**: Cross‑domain synthesis with external knowledge  
- **Tests**: External corpus retrieval, source routing, interpretive reasoning

The final level goes beyond the text - connecting *Alice* to *Carroll* and his world. Questions like “How does Victorian society influence Carroll’s satire?” demand integration with external sources and interpretive reasoning. This is where RAG becomes knowledge orchestration - a bridge between text and context.

</details>

---

##  Why Build This Way?

RAG systems are often presented as monoliths: **embed -> retrieve -> generate**.  
But in practice, they evolve through iterations of *complexity and failure*.

By splitting this journey into five levels, I can isolate:
- **Where** retrieval breaks down.
- **When** reasoning starts to appear.
- **How** adding structure (reranking, summarization, graph traversal) changes performance.

This isn’t about pushing state-of-the-art - it’s about *developing intuition.*  
Each failure will be a clue. Each improvement, a reflection of deeper understanding.

---

### What I’ll track in Part 2

- Retrieval hit rate on exact facts (top‑k=3)
- Answer accuracy with 1–2 source citations
- A short list of failure cases to fix next

---

##  What Comes Next

In **Part 2: Finding the Rabbit Hole**, I’ll start small - building a minimal RAG pipeline to handle Level 1 questions like “Who is the author?” or “What did Alice drink?”

The goal will be simple:  
Can my system recall *exact truths* from a story - without hallucination, without confusion, and without magic?

---

##  Try AliceEval Yourself

Want to try it too? I parked a tiny starter and some eval sets:

- Starter repo: [Alice-in-RAG-land (base)](https://github.com/lazycoder1/Alice-in-RAG-land/tree/base)
- Evals: [`sample_data/eval`](https://github.com/lazycoder1/Alice-in-RAG-land/tree/base/sample_data/eval)

If you beat my scores, tell me what you changed - I’ll steal it (with credit) ( ͡° ͜ʖ ͡°)

> “Begin at the beginning,” the King said gravely, “and go on till you come to the end: then stop.”  
> - *Alice, Chapter 12*

I’ll start with easy, factual questions. If it can’t pass those, I won’t pretend it’s smart. Hold me to it.

---

*Kicking off AliceEval - learning retrieval first, then reasoning.*
