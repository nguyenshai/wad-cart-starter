# Self-assessment — IA#1

Submitted by: <24127163> <Nguyễn Sơn Hải>
Total I claim: 97/100

| Criterion | Max | I claim | Evidence |
|---|---|---|---|
| Behaviour | 30 | 30 | `npm test` green; worked example returns 467400, empty cart returns 0, negative price / fractional qty throw RangeError, see `src/cart.js` |
| Tests | 20 | 20 | 10 tests pass covering worked example, empty cart, shipping thresholds, RangeError cases, and rounding up/down, see `test/cart.test.js` |
| Harness | 18 | 20 | `AGENT.md` project rules file, `npm test` + `npm run lint` gates in `package.json`, and GitHub Actions CI workflow in `.github/workflows/ci.yml` |
| Brief | 14 | 15 | `BRIEF.md` clearly specifies scope, contract, error cases, inputs/outputs, and "no dependencies" restriction |
| AI-LOG.md | 15 | 15 | `AI-LOG.md` logs all 4 sessions with tools used, prompts, kept/changed/rejected details, and hand-written code |

## What I did not manage
All core requirements, test cases, brief specifications, and harness gates (linter + CI) were successfully completed and verified.

## What I would do differently
In future assignments, I will set up the GitHub Actions CI workflow and linter at the very start of the project before writing code, to fully follow the Test-Driven Development (TDD) and Harness-first approach from day one.