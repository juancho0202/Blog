---
title: Introducing the Blog
description: A place to collect the ideas, observations, and links that I find interesting.
date: 2026-09-20
updated: 2026-09-22
tags:
  - announcement
  - personal
  - notes
draft: false
cover: /images/blog/introducing-cover.svg
path: /blog/introducing-the-blog
---

## Why this blog exists

This blog is a place for the things I want to remember, share, and revisit later.

I do not want to limit it to one topic or one style. The goal is simple: publish anything that feels worth keeping. A useful idea, an article worth returning to, a personal note, a small experiment, or a thought that deserves a little more space.

- Interesting reads
- Personal notes
- Side projects and experiments
- Things I want to understand better

> The point is not perfection. It is to make space for curiosity.

![Notebook on a desk](/images/blog/notebook.svg)

## What kind of posts you'll see

This site is meant to be flexible. Some entries will be practical, some reflective, and some just exploratory.

| Post type | Why it belongs here |
| --- | --- |
| Short notes | Good ideas are easy to lose if they stay buried |
| Links and references | I want a place to keep what I find useful |
| Personal writing | Thinking in public helps me clarify my own view |

The blog is not a formal publication. It is a personal archive of things worth sharing. That is the whole point.

```ts
type Post = {
  title: string
  date: Date
  tags: string[]
}