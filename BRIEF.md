# BRIEF — Implementation Specification for `cartTotal`

## 1. Scope & Allowed Files
You are only allowed to inspect and modify the following files:
- `src/cart.js`: Implementation of the `cartTotal` function.
- `test/cart.test.js`: Unit test cases verifying all specifications.
Do NOT modify `package.json`, `AGENTS.md`, or any files outside this scope.

## 2. Technical Constraints
- **Plain JavaScript (Vanilla ES Modules):** Zero external dependencies. Do not install or import any npm packages.
- **Return Type:** Must return a primitive `number`, rounded to the whole đồng (nearest integer) using `Math.round()`.
- **Strict Prohibition:** NEVER use `.toFixed()` because it returns a `string`, which violates the contract.

## 3. Function Contract
### Signature
`cartTotal(items, options)`

### Input Parameters
1. `items` (Array of Objects): Each object represents a cart item:
   - `name` (string): Item description / title.
   - `price` (number): Unit price in VND.
   - `qty` (number): Quantity of items.
2. `options` (Object): Configuration options:
   - `vatRate` (number): VAT percentage expressed as a decimal (e.g., `0.08` for 8%).
   - `freeShipFrom` (number): Subtotal threshold for free shipping.
   - `shipFee` (number): Standard shipping fee.

### Output
- A `number` representing the final total.

## 4. Business Logic & Calculation Rules
1. **Empty Cart:** If `items` is empty (`items.length === 0`), return `0` immediately (no VAT, no shipping fee applied).
2. **Subtotal:** Sum of `(price * qty)` for all items in the cart.
3. **VAT:** `subtotal * vatRate`.
4. **Shipping Fee:**
   - If `subtotal >= freeShipFrom`: Shipping fee is `0` (free shipping).
   - If `subtotal < freeShipFrom`: Shipping fee is `shipFee`.
5. **Final Total:** `Math.round(subtotal + VAT + shipping)`.

### Worked Example:
- Items: 2 × 180,000 + 1 × 45,000 = 405,000 (subtotal).
- Options: `{ vatRate: 0.08, freeShipFrom: 500000, shipFee: 30000 }`.
- VAT: 405,000 × 0.08 = 32,400.
- Shipping: 405,000 < 500,000 → 30,000.
- Result: 405,000 + 32,400 + 30,000 = **467400** (number).

## 5. Error Handling & Validation
Throw a `RangeError` if:
- Any item has a negative price (`price < 0`).
- Any item has a quantity `qty` that is not a positive integer (e.g. `qty <= 0`, `!Number.isInteger(qty)`, decimal numbers like `1.5`, or non-number types).
