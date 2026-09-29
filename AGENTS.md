# AGENTS.md — Development Rules for cartTotal

This repository implements the `cartTotal(items, options)` function for IA#1 (Web Application Development - CSC13008).

## Tech Stack
- **Runtime:** Node.js (v20+ recommended).
- **Module System:** ES Modules (`"type": "module"` in `package.json`).
- **Language:** Plain JavaScript (Vanilla JS).
- **Testing:** Node.js built-in test runner (`node:test`) and assertion library (`node:assert/strict`).
- **Dependencies:** **Zero external dependencies** (no npm packages allowed in `dependencies`).

## Commands & Working Gate
- `npm test`: Run all unit tests using Node's native test runner (`node --test`).
- `npm run lint`: Check JavaScript file syntax cleanly using Node's syntax checker (`node --check src/cart.js test/cart.test.js`).
- `npm run check`: The official gate — runs syntax check first, then executes the test suite.

## Core Rules & Invariants
1. **Contract:** `cartTotal(items, options)` must calculate subtotal, apply VAT, determine shipping fee, and return a rounded whole integer **number**.
2. **Empty Cart:** If `items` is empty (`items.length === 0`), return `0` immediately without adding VAT or shipping.
3. **Validation & Errors:**
   - Throw `RangeError` if any item has `price < 0`.
   - Throw `RangeError` if any item has `qty` that is not a positive integer (`!Number.isInteger(qty) || qty <= 0`).

## "Never" Rules (Strict Constraints)
- **NEVER** install or import any external npm packages / dependencies.
- **NEVER** use `.toFixed()` on the result, because `.toFixed()` returns a string. The result must be a `number` rounded to the whole đồng using `Math.round()`.
- **NEVER** return a string or floating-point number.
- **NEVER** modify tests or weaken assertions to bypass test failures.
- **NEVER** touch files outside the agreed scope (`src/cart.js`, `test/cart.test.js`).
