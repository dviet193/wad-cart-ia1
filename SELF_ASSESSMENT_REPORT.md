# Self-assessment — IA#1

Submitted by: 24120245 — Trần Lê Đức Việt
Repository: https://github.com/dviet193/wad-cart-ia1
Total I claim: 100 / 100

| Criterion | Max | I claim | Evidence |
|---|---|---|---|
| Behaviour | 30 | 30 | `npm test` passes 10/10 tests; `cartTotal` in `src/cart.js:8-31` correctly returns 467400 as a primitive number for the worked example, returns 0 for empty cart, handles freeship threshold (`subtotal >= freeShipFrom`), rounds to whole đồng using `Math.round()`, and throws `RangeError` for negative price (`price < 0`) or invalid qty (`!Number.isInteger(qty) \|\| qty <= 0`). |
| Tests | 20 | 20 | 10 independent tests in `test/cart.test.js:1-70` covering worked example, empty cart, exact threshold, exceeding threshold, below threshold, rounding, and all `RangeError` cases; each test fails for one reason only; `npm test` green. |
| Harness | 20 | 20 | `AGENTS.md` (stack, commands, never rules) + working gate (`npm run check` executing `node --check` syntax lint and `node --test`) + CI workflow in `.github/workflows/ci.yml`. |
| Brief | 15 | 15 | `BRIEF.md` contains scope of allowed files, exact contract, error conditions, calculation rules, and "no dependencies" constraint. |
| AI-LOG.md | 15 | 15 | `AI-LOG.md` contains chronological entries per step with tools used, tasks asked, outputs produced, specific rejections/modifications (e.g. deleting duplicate `Agent.md`, rejecting external packages, enforcing Math.round), and handwritten decisions. |

## What I did not manage
Initially considered adding external linters like ESLint/Prettier, but realized it might violate the "no dependencies" spirit. Solved it cleanly by using Node.js built-in `node --check` for zero runtime and dev dependencies.

## What I would do differently
Set up remote CI testing earlier or test GitHub Actions locally using `act` to verify remote runs before writing the assessment.

### Rules

- **Evidence must point at something**: a file, a section, a commit, a test name. "I did this well" is not evidence.
- The section *What I did not manage* is scored as honesty, not as failure. An empty one on an imperfect submission reads worse than a frank paragraph.
- The number in the file name must equal the total in this table. If they disagree, the table wins.
- Your self-score does not set your mark — but an inaccurate one costs you. See *Honesty adjustment* below, and in the rubric of every assignment.

### Honesty adjustment

Your self-assessment is compared with the mark you actually earn. The gap is `your total − the mark`, on the same 100-point scale.

| Gap | Adjustment |
| :---- | :---- |
| within ±10 | none — this is normal calibration |
| +11 to +20 | −3 |
| +21 to +30 | −6 |
| more than +30 | −10 |
| −21 or worse | −3 — read the rubric before you score yourself down |
| no `SELF_ASSESSMENT_REPORT.md` | −10, and the file-name total is ignored |

A criterion you claim with no evidence line counts as claimed-and-not-done for this comparison. The adjustment never takes a submission below 0.