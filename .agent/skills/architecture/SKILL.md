---
name: architecture
description: Architecture decision framework specifically for the Nidyu App (Expo + Node.js).
allowed-tools: Read, Glob, Grep
---

# Nidyu Architecture Framework

> "Simplicity is the ultimate sophistication. Only build what Nidyu needs right now."

## 🎯 Selective Reading Rule (MANDATORY)

**Read ONLY the specific file requested!** Do NOT load all files in this directory.

| File | Description | When to Read |
|------|-------------|--------------|
| `context-discovery.md` | Core questions for Nidyu features | Starting a new module |
| `trade-off-analysis.md` | Quick pros/cons framework | Deciding between two approaches |
| `pattern-selection.md` | Expo/Node.js specific patterns | Structuring the codebase |

*(Note: Ignore general SaaS/Enterprise examples. Focus purely on Real Estate Marketplace MVP needs.)*

## 🔗 Related Skills
* `@[skills/clean-code]`
* `@[skills/database-design]`

## 🛑 NO BUREAUCRACY RULE
Do NOT write formal ADRs (Architecture Decision Records) unless the user explicitly types "Write an ADR". Present decisions as simple, concise bullet points highlighting the immediate trade-offs for the Nidyu project.

## Validation Checklist (Pre-Execution)
Before presenting an architecture plan to the user:
- [ ] Does this fit the Expo (React Native Web) frontend?
- [ ] Does this fit the Node.js/TypeScript backend?
- [ ] Is this the simplest possible solution for an MVP?
