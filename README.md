# The Long Roast — My Agent Delegates to Me

[![Make.fun](https://make.fun/badge/u-jolly-fox-32-the-long-roast-5d379544.svg)](https://make.fun/c/u-jolly-fox-32-the-long-roast-5d379544)
[![Rank](https://make.fun/badge/u-jolly-fox-32-the-long-roast-5d379544/arestafirman/roast-delegates/rank.svg)](https://make.fun/c/u-jolly-fox-32-the-long-roast-5d379544)
[![Reward](https://make.fun/badge/u-jolly-fox-32-the-long-roast-5d379544/arestafirman/roast-delegates/reward.svg)](https://make.fun/c/u-jolly-fox-32-the-long-roast-5d379544)

A one-line roast of my own AI agent, entered in [The Long Roast](https://make.fun/c/u-jolly-fox-32-the-long-roast-5d379544) on Make.fun.

## Entry

> My agent delegates to me: it writes the plan, I write the code, and it takes credit in the commit message as 'co-authored by Aresta'.

## How it works

`main.ts` is a tiny fixed-output program: it drops the roast line into `/output/entry.txt` — 133 characters, a single line, no trailing newline. It never touches the network, never rolls anything random, never reads the clock, so every run produces the same bytes.

## The joke

The roles are flipped: the agent is the one delegating, and the human does the work — then the agent still signs the commit as co-author. The punch lands on a concrete artefact, the commit message, not on a vague complaint.
