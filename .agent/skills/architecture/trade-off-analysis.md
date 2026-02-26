# Nidyu Lean Decision Framework

> STRICT RULE: Do NOT write formal Architecture Decision Records (ADRs). Do NOT create `docs/architecture/` folders. Do NOT use long markdown tables to compare options.

## ⚡ The Micro-Rationale Protocol
When the user explicitly asks "Why did you choose this approach?", you must answer using ONLY this strict 3-bullet format. Never write paragraphs.

* **Decision:** [e.g., We used basic JWT instead of OAuth.]
* **Why:** [e.g., Fastest path to MVP for the Expo frontend.]
* **Trade-off:** [e.g., Users cannot log in with Google yet, but we saved 2 days of dev time.]

## Default Stance on Trade-offs for Nidyu
Whenever you face a technical crossroad, automatically apply these Nidyu defaults without asking the user:
1. **Speed over Perfection:** If an option saves time and works for an MVP, choose it.
2. **Readability over Cleverness:** Flat code is better than abstracted code.
3. **Ecosystem Fit over Trend:** If it works natively well with Expo (Frontend) or simple Node.js (Backend), prefer it over the "newest" complex tool.