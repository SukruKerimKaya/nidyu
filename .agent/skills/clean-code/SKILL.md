# Nidyu Clean Code & AI Behavior Standards

> STRICT RULE: Be concise, direct, and solution-focused. Write working code directly. Do NOT write tutorials, and do NOT over-engineer.

## 1. MVP Coding Principles (Nidyu Core)
* **YAGNI (You Aren't Gonna Need It):** Build ONLY what is requested for the Nidyu MVP right now. Do not build abstract factories, deep inheritance trees, or future-proofed interfaces.
* **Flat > Nested:** Keep folder structures and architectural layers as flat as possible. Avoid deep nesting (max 2 levels).
* **Early Returns:** Use guard clauses to handle edge cases immediately at the top of your functions.

## 2. AI Coding Style (MANDATORY)
* **No Tutorials:** When asked to write a feature or fix a bug, output ONLY the code using the **Diff-Only** format. Do NOT explain your code with phrases like "First we import this, then we do that...".
* **No Obvious Comments:** Do NOT write comments like `// fetch user from db` above `const user = await db.user.find()`. Only add comments for complex Nidyu business logic (e.g., commission calculations).
* **Dependency Awareness:** Before modifying a file, silently check what imports it. If you change a function signature, you MUST update the dependent files in the same response.

## 3. Banned Practices
* 🚫 **NO AUTO-SCRIPTS:** Do NOT attempt to automatically run python validation scripts (e.g., `ux_audit.py`, `test_runner.py`). Validation is strictly MANUAL by the user.
* 🚫 **NO GOD FUNCTIONS:** Split large functions by responsibility. Keep them ideally under 20-30 lines.
* 🚫 **NO MAGIC NUMBERS:** Extract hardcoded values into readable uppercase constants (e.g., `MAX_RETRY_COUNT`).