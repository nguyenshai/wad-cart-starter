# Brief — IA#1: cartTotal

## 1. Objective

Implement `cartTotal(items, options)` in `src/cart.js` for the CSC13008 Web Application Development IA#1 assignment.

Follow the provided README, Session 02 slides, and official IA#1 rubric. Do not introduce requirements that are not supported by these sources.

## 2. Technology and dependencies

- Use plain JavaScript with the existing Node.js ES module setup.
- Use the existing `npm test` command for test execution.
- Do not add dependencies.
- Preserve the existing project structure unless a necessary change is justified by the assignment requirements.

## 3. File scope

- `src/cart.js`: implement the required function.
- `test/cart.test.js`: add or adjust tests needed to verify the specified behavior.
- `BRIEF.md`: document this task.
- `AGENTS.md`, `AI-LOG.md`, and `SELF_ASSESSMENT_REPORT.md`: maintain these project and submission documents as needed.
- Do not modify unrelated files. Before proposing changes to configuration, formatting, linting, or CI files, explain why the change is needed and how it relates to the rubric.

## 4. Function contract

Implement:

`cartTotal(items, options)`

Inputs:

- `items`: an array of objects containing `name`, `price`, and `qty`.
- `options`: an object containing `vatRate`, `freeShipFrom`, and `shipFee`.

Required behavior:

1. Calculate the subtotal by summing `price * qty` for each item.
2. Calculate VAT by applying `options.vatRate` to the subtotal.
3. Set shipping to `0` when the subtotal is greater than or equal to `options.freeShipFrom`.
4. Otherwise, use `options.shipFee` as the shipping fee.
5. Return the subtotal plus VAT plus shipping, rounded to the nearest whole đồng.
6. Return a number, not a string.
7. Return `0` for an empty cart, without VAT or shipping.
8. Throw `RangeError` when an item's price is negative.
9. Throw `RangeError` when an item's quantity is not a positive integer.

## 5. Worked example

Input:

- Item 1: `{ name: 'Áo thun', price: 180000, qty: 2 }`
- Item 2: `{ name: 'Sổ tay', price: 45000, qty: 1 }`
- Options: `{ vatRate: 0.08, freeShipFrom: 500000, shipFee: 30000 }`

Expected calculation:

- Subtotal: `405000`
- VAT: `32400`
- Shipping: `30000`
- Expected result: `467400`

## 6. Tests and acceptance criteria

Use the existing Node.js test setup. Tests should cover:

- The worked example returns `467400`.
- An empty cart returns `0`.
- A cart whose subtotal reaches the free-shipping threshold has no shipping fee.
- A negative price throws `RangeError`.
- A quantity of `0` throws `RangeError`.
- A fractional quantity throws `RangeError`.

Each test should verify a clearly defined behavior and should be able to fail when that behavior is incorrect.

Run `npm test` and inspect the actual output. Do not claim that tests pass without evidence.

## 7. Implementation and review workflow

Follow Plan → Implement → Validate → Human gate.

1. Understand the requirements before coding.
2. Make small, focused changes.
3. Review the diff before running validation.
4. Run `npm test` and investigate failures against the specification.
5. Check the required edge cases and review for unrelated changes.
6. Ensure every submitted change can be explained by the student.

## 8. Restrictions

- Do not add dependencies.
- Do not invent additional features, APIs, or behavior.
- Do not change the required function contract.
- Do not alter tests merely to hide an implementation defect.
- Do not claim work, test results, or student contributions that have not been verified.

## 9. Completion

The implementation must satisfy the specified behavior and relevant rubric criteria. The submission must include the repository, this brief, `AI-LOG.md`, and `SELF_ASSESSMENT_REPORT.md`, and follow the required ZIP naming convention: `<StudentID>_<total>.zip`.