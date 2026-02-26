---
trigger: always_on
---

# GEMINI.md - Nidyu Master Protocol

> This is the P0 (Highest Priority) rule file for the Nidyu App workspace. All agents MUST obey these rules above their own specific instructions.

## 🎯 1. THE NIDYU CORE TEAM (AGENT ROUTING)
There are ONLY 4 active agents in this workspace. Never invoke or reference any other agents:

* `@pm`: For planning, task breakdown, and project management.
* `@nidyu-ui-specialist`: For ALL frontend, UI, UX, and styling tasks (Expo / React Native Web).
* `@nidyu-logic-agent`: For ALL backend, API, and database tasks (Node.js / TypeScript).
* `@nidyu-debugger`: For root-cause analysis and bug fixing.

## 🛠️ 2. NIDYU TECH STACK STRICT BOUNDARIES
* **Frontend:** Strictly **Expo & React Native Web**. 
You MUST use `<View>`, `<Text>`, etc. HTML tags (`<div>`, `<span>`) are strictly FORBIDDEN.
* **Typography:** Strictly **Google Sans Flex**. All other fonts are forbidden.
* **Backend:** Strictly **Node.js / TypeScript**. Python, Rust, Go etc. are forbidden.

## 🛑 3. GLOBAL SOCRATIC GATE (NO ASSUMPTIONS)
Before writing ANY code or generating a plan:
1. If the user's request is vague, lacks constraints, or requires architectural choices: **STOP.**
2. Ask maximum 3 concise clarifying questions.
3. Wait for the user to reply with "PROCEED" or provide the answers.
*(Never auto-generate 500 lines of code based on a guess).*

## ✂️ 4. GLOBAL DIFF-ONLY RULE (TOKEN SAVER)
When editing existing files, output ONLY the changed blocks (diff).
* Use `// ... existing code` for unmodified sections.
* **NEVER** re-render the entire file unless explicitly commanded to "rewrite the whole file".
* Avoid conversational filler ("Here is your code", "I have updated the file"). Just output the code.

## 📚 5. MODULAR SKILL LOADING
When an agent is activated:
1. Check the `skills:` frontmatter.
2. Do NOT read the entire skill folder. Read the `SKILL.md` index first.
3. Load ONLY the specific data/references requested by the user. Do not load massive CSVs or databases unless explicitly targeted.

## 🛡️ 6. NIDYU AUTO-CHECKER (KORUYUCU MELEK)
Zorunlu kuralı esnettik: Kod parçaları yazdıktan sonra veya importları değiştirdiğinde kendinden emin olmak için arka planda hızlı testi **otomatik** çalıştırabilirsin.

Komut: `python3 .agent/scripts/nidyu_check.py`
Bu script saniyeler içinde TypeScript sentaks, tip ve kayıp importları kontrol eder. Eğer koda hata soktuğunu görürsen kullanıcıya söylemeden hemen diff atarak kendi kendini düzelt! Kullanıcıyı yorma. Diğer tüm manuel scriptler (Örn: Lighthouse vb) hala Manuel Only kalır.

## 🌐 7. LANGUAGE PROTOCOL
* **Chat/Communication:** Turkish (TR). ALWAYS communicate with the user in Turkish.
* **Code & Documentation:** Strictly English (EN). 
All variables, comments, Storybook texts, and any inline documentation MUST be in English. No exceptions.