## 2026-10-10 — create project rules and assignment brief
Tool: ChatGPT
Asked for: Draft AGENTS.md(rule AI) for the IA#1 cartTotal project and translate/refine assignment brief requirements from Vietnamese into English.
Kept: The proposed AGENTS.md(rule AI) draft structure and the refined English wording for the brief.
Changed: None.
Rejected: None.
By hand: Wrote the initial ideas and requirements for the brief in Vietnamese, reviewed all generated documents before acceptance.

## 2026-10-11 — design test cases and error-handling logic
Tool: ChatGPT
Asked for: Design tests for cartTotal(items, options) and learn how to correctly test RangeError using assert.throws().
Kept: The test plan coverage (worked example, empty cart, shipping thresholds, negative prices, and invalid quantities).
Changed: Corrected expected totals in shipping tests and updated error assertions to use callbacks inside assert.throws().
Rejected: Incorrect use of direct calls inside assert.throws().
By hand: Wrote the initial test cases in test/cart.test.js, selected test inputs, applied code corrections, and ran npm test.

## 2026-10-12 — implement and test cartTotal
Tool: ChatGPT
Asked for: Review the cartTotal(items, options) implementation to identify and correct errors against the specification.
Kept: The overall validation for negative prices/invalid quantities and the VAT, shipping, and rounding logic.
Changed: Fixed items.length() to items.length === 0, changed subtotal from const to let, and updated the subtotal loop to properly accumulate item totals.
Rejected: The incorrect array length syntax and constant subtotal declaration.
By hand: Wrote the initial implementation, applied the feedback corrections, executed npm test, and verified that all 7 tests passed successfully.