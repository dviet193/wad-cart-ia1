# AI-LOG — IA#1 `cartTotal`

Student: Trần Lê Đức Việt (24120245)

## The five rules, in short
1. AI is allowed and encouraged in every assignment. Only the final exam is written without it.
2. Declare it here.
3. You own the code. "The AI wrote it" is not a defence.
4. You will be asked. Anything you cannot explain scores zero, even if it runs.
5. No secrets in prompts: no API keys, no real user data, no classmate's work.

---

## 2026-09-30 — Step 1: Set up the harness
Tool: Antigravity IDE (Gemini)
Asked for: Set up the testing harness including a rules file (`AGENTS.md`), a zero-dependency working gate script, and GitHub Actions CI workflow.
Produced: Drafted `AGENTS.md`, `package.json` gate scripts (`lint` using `node --check`, `check`), `.github/workflows/ci.yml`, and initially created a duplicate `Agent.md`.
Accepted / rejected / modified:
- Accepted zero-dependency linting with `node --check` instead of installing external npm linter packages to keep project pure.
- Accepted CI workflow configuration for GitHub Actions running on push.
- Explicitly rejected and removed duplicate file `Agent.md`, keeping only standard canonical `AGENTS.md`.
I wrote by hand: Formulated strict "never" rules (never use `.toFixed()`, zero external dependencies) and made the architectural choice for the zero-dependency gate.

## 2026-09-30 — Step 2: Write the brief
Tool: Antigravity IDE (Gemini)
Asked for: Formulate a comprehensive implementation brief in `BRIEF.md` covering scope, contract, constraints, business logic, and error handling.
Produced: A complete 5-section specification brief in `BRIEF.md`.
Accepted / rejected / modified: Accepted the structured contract, strictly enforcing primitive `number` return type and explicit prohibition of `.toFixed()`.
I wrote by hand: Reviewed and confirmed file boundary scope (`src/cart.js`, `test/cart.test.js`) and verified the worked example numbers.

## 2026-09-30 — Step 3: TDD loop and implementation
Tool: Antigravity IDE (Gemini)
Asked for: Expand unit tests in `test/cart.test.js` to cover all edge cases, then implement `cartTotal` in `src/cart.js` with zero dependencies.
Produced: 10 unit test cases using Node's native test runner (`node:test`), and the implementation in `src/cart.js`.
Accepted / rejected / modified:
- Accepted strict type and range validations (`price < 0`, `!Number.isInteger(qty) || qty <= 0`).
- Accepted `Math.round()` for whole-dong rounding.
- Ensured each test case asserts exactly one specific requirement to satisfy the "one reason to fail" rubric rule.
I wrote by hand: Steered the prompt to ensure no external dependencies were used, watched tests fail (Red), and reviewed each line of the git diff before finalizing.
