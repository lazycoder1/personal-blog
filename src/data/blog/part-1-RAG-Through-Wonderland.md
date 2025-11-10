---
title: "RAG Through Wonderland — Part 1: Setting Up AliceEval"
author: Gautam G Sabhahit
pubDatetime: "2025-11-10T00:00:00Z"
slug: part-1-rag-through-wonderland
featured: false
draft: false
tags:
  - RAG
  - evaluation
  - alice-eval
ogImage: ../../assets/images/posts/rag-through-wonderland/part-1/cover.png
description: "Kick off the RAG Through Wonderland series by defining AliceEval and outlining the five-level journey from factual recall to external knowledge synthesis."
canonicalURL: https://lazybuilds.com/rag-through-wonderland-part-1
---

# 🕳️ AliceEval: Setting Up Wonderland  
*Part 1 of the “RAG Through Wonderland” Series*

> “Who in the world am I? Ah, that’s the great puzzle.”  
> — *Alice, Chapter 2*

---

## 🌱 Entering the Rabbit Hole

Every adventure starts with curiosity — and for me, that curiosity began with a single question:  
**Can I truly understand how RAG systems think, not just how they work?**

Like Alice chasing the White Rabbit, I wanted to follow my curiosity down a structured path — not into chaos, but into **clarity**.  
That’s how **AliceEval** was born: a personal learning framework designed to take me from *“retrieving paragraphs”* to *“retrieving meaning.”*

This is the first chapter in a six-part journey where I’ll progressively build and evaluate a Retrieval-Augmented Generation (RAG) system — one that can reason about the world of *Alice’s Adventures in Wonderland* as intelligently as it recalls it.

---

## 🎯 The Goal of the Journey

I’m not trying to benchmark a product or publish a paper — I’m trying to **learn by building**.

Over the coming weeks, I’ll evolve my RAG system through **five distinct levels of complexity**, each with its own dataset of questions, evaluation criteria, and lessons.

At each level, I’ll:
1. Implement or improve a RAG setup.
2. Evaluate its ability to answer increasingly complex questions.
3. Reflect on *why* it succeeds or fails.
4. Iterate until it reaches a **10/10 score** for that level.

By the end, I should understand not just *how to retrieve knowledge*, but *how retrieval becomes reasoning.*

---

## 🧩 Why Alice in Wonderland?

Carroll’s *Alice’s Adventures in Wonderland* is the perfect playground for this experiment.  
It’s rich, surreal, layered — a story where logic itself becomes fluid.

Here’s why it fits so beautifully for RAG evaluation:
- It’s **public domain**, short, and semantically dense.
- It contains **clear facts** (“Who stole the tarts?”), **localized reasoning** (“Why did Alice cry?”), and **abstract themes** (“What does growing up mean?”).
- It oscillates between sense and nonsense — which makes it ideal to test how a model handles *ambiguity, contradiction, and metaphor.*

Just as Alice’s perception evolves through the story, I’ll evolve my RAG through structured experimentation — from *recall* → *reasoning* → *reflection*.

---

## 🧱 The Five Levels of Wonderland

Each level of AliceEval represents a distinct form of reasoning that a RAG system must master.  
Think of them as **five progressively deeper layers** of understanding — from what happened, to why it happened, to what it means.

| Level | Focus | Description | What It Tests |
|-------|--------|--------------|----------------|
| **Level 1 — Factual Recall** | Literal comprehension | Answering direct questions that exist word-for-word in the book. | Tests retrieval accuracy, chunk quality, and embedding relevance. |
| **Level 2 — Contextual Reasoning** | Local logic | Understanding short cause-effect relationships within or across nearby passages. | Tests multi-chunk retrieval, contextual linking, and coherence. |
| **Level 3 — Thematic Synthesis** | Symbolic and narrative connection | Summarizing or interpreting the story’s broader themes. | Tests summarization quality, semantic merging, and information hierarchy. |
| **Level 4 — Relational Reasoning** | Multi-hop understanding | Analyzing relationships and abstract logic between characters or events. | Tests entity linking, graph traversal, and multi-step reasoning. |
| **Level 5 — External Knowledge Integration** | Cross-domain synthesis | Bringing in real-world context (Carroll’s life, Victorian culture, literary criticism). | Tests external corpus retrieval, source routing, and interpretive reasoning. |

Each level is not just harder — it’s *qualitatively different.*  
To progress, the system must adapt: improving retrieval methods, context synthesis, and conceptual grounding.

---

## 🧠 What Each Level Teaches

### 🪞 Level 1: The Mirror of Memory  
This stage tests whether a RAG can do the simplest task — find and reproduce *exact facts* from a text.  
Success here isn’t about intelligence; it’s about alignment.  
If I can’t retrieve “Who is the White Rabbit?”, there’s no point in chasing Wonderland’s deeper mysteries.

---

### 🌀 Level 2: The Pool of Context  
Once facts work, context begins.  
Here I’ll test questions like “Why does Alice cry after shrinking?” — requiring multiple passages and a sense of *story flow*.  
This is where retrieval becomes narrative comprehension.  
I expect to experiment with chunk sizes, reranking, and query expansion here.

---

### 🌸 Level 3: The Garden of Meaning  
At this stage, literal retrieval isn’t enough.  
The questions become interpretive — “How do Alice’s size changes reflect emotional growth?”  
This requires summarization, paraphrase understanding, and a touch of symbolic reasoning.  
I’ll start testing hierarchical retrieval and map-reduce summarization chains.

---

### ♟️ Level 4: The Queen’s Logic  
Now we step into *graph-level reasoning*.  
Questions like “How do authority figures in Wonderland shape Alice’s autonomy?” require understanding relationships, not paragraphs.  
This will push me toward entity extraction, multi-hop reasoning, and possibly graph databases.

---

### 🔍 Level 5: Through the Looking Glass  
The final level goes beyond the text — connecting *Alice* to *Carroll* and his world.  
Questions like “How does Victorian society influence Carroll’s satire?” demand integration with external sources and interpretive reasoning.  
This is where RAG becomes knowledge orchestration — a bridge between text and context.

---

## ⚙️ Why Build This Way?

RAG systems are often presented as monoliths: **embed → retrieve → generate**.  
But in practice, they evolve through iterations of *complexity and failure*.

By splitting this journey into five levels, I can isolate:
- **Where** retrieval breaks down.
- **When** reasoning starts to appear.
- **How** adding structure (reranking, summarization, graph traversal) changes performance.

This isn’t about pushing state-of-the-art — it’s about *developing intuition.*  
Each failure will be a clue. Each improvement, a reflection of deeper understanding.

---

## 📘 What Comes Next

In **Part 2: Finding the Rabbit Hole**, I’ll start small — building a minimal RAG pipeline to handle Level 1 questions like “Who is the author?” or “What did Alice drink?”

The goal will be simple:  
Can my system recall *exact truths* from a story — without hallucination, without confusion, and without magic?

---

## 🧪 Try AliceEval Yourself

If you’d like to follow along (or fork the journey), you can grab the starter code and evaluation datasets:

- Initial project scaffold: [Alice-in-RAG-land repository](https://github.com/lazycoder1/Alice-in-RAG-land/tree/base)
- Evaluation question sets: [`sample_data/eval`](https://github.com/lazycoder1/Alice-in-RAG-land/tree/base/sample_data/eval)

Feel free to remix the setup, run the evals, and share how your RAG system navigates Wonderland.

> “Begin at the beginning,” the King said gravely, “and go on till you come to the end: then stop.”  
> — *Alice, Chapter 12*

That’s exactly what I plan to do.  
One level at a time, one rabbit hole deeper — until this system can make sense of Wonderland.

---

*This marks the beginning of the AliceEval journey — a framework to understand not just RAG systems, but reasoning itself.*
