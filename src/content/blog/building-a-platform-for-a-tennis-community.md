---
title: "What building software for my tennis club taught me"
description: "A spreadsheet ran our tennis league until it couldn't. Building the thing that replaced it reminded me what software with real users actually demands."
date: 2026-02-18
tags: ["django", "product", "tennis"]
---

Our tennis community ran on a group chat and a spreadsheet. Someone posted fixtures, someone else replied with scores, and one person — always the same person — kept the standings up to date by hand.

It worked. That is the part people forget when they want to replace something: the spreadsheet *worked*. It had been working for years. Nobody was waiting for a developer to save them.

## The problem was not the spreadsheet

It was that the spreadsheet had exactly one operator. When that person was on holiday, the league stopped. Results piled up in the chat, the standings went stale, and by the time they were entered nobody could remember whether that 6–4 was the first set or the second.

The problem was a bus factor of one, dressed up as a tooling problem. That distinction mattered, because it told me what the software actually had to do: not "manage a tennis league" but "let any player record a result in under thirty seconds, from a phone, on a court, immediately after the match."

Everything else was secondary. If result entry was slow, people would go back to the group chat and I would have built nothing.

## Boring technology, on purpose

Django and PostgreSQL. No API layer, no frontend framework, server-rendered pages.

I have built more elaborate systems than this for a living, and for years I would have considered this stack an underachievement. It is not. The interesting problems in this project were all in the domain — how do you generate a fair fixture list, how do you handle a withdrawal mid-season, what happens to standings when a match is replayed — and every hour I did not spend on infrastructure was an hour I could spend on those.

Boring technology is not about being unambitious. It is about deciding where your ambition goes.

## Real users tell you what to build

The single most useful thing I did was ship early and then watch.

I had built a careful match-entry form with fields for every situation: retirements, walkovers, tiebreak detail. Nobody used most of it. What people actually wanted was to type two numbers and hit save, and to be able to fix it later if they got it wrong. The elaborate form was making the common case slower to protect the rare one.

I would not have learned that from planning. I learned it from watching people stand on a court, squinting at a phone, giving up.

## The part I did not expect

Around 120 players use the platform now. It runs the leagues and the tournaments, and the person who used to maintain the spreadsheet plays tennis instead.

I have spent twenty years building software, much of it for organisations where I never met a single user. This is the first time the users are people I see every week, who tell me directly when something is annoying, and who are visibly better off because the thing exists.

That turns out to matter to me more than I expected it to. If you have been writing software for a long time and it has started to feel abstract, I would recommend finding a small real community with a real problem. It is a different job than the one you have been doing.
