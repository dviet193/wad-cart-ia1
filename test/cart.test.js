import { test } from 'node:test'
import assert from 'node:assert/strict'
import { cartTotal } from '../src/cart.js'

const defaultOptions = { vatRate: 0.08, freeShipFrom: 500000, shipFee: 30000 }

// 1. Worked example from slides
test('the example from the slides returns 467400 as a number', () => {
  const items = [
    { name: 'Áo thun', price: 180000, qty: 2 },
    { name: 'Sổ tay', price: 45000, qty: 1 },
  ]
  const result = cartTotal(items, defaultOptions)
  assert.strictEqual(typeof result, 'number')
  assert.strictEqual(result, 467400)
})

// 2. Empty cart
test('empty cart returns 0 without VAT or shipping', () => {
  assert.strictEqual(cartTotal([], defaultOptions), 0)
})

// 3. Free shipping at threshold
test('free shipping when subtotal exactly equals threshold', () => {
  const items = [{ name: 'Giày', price: 500000, qty: 1 }]
  // subtotal: 500000, VAT: 40000, shipping: 0 -> total: 540000
  assert.strictEqual(cartTotal(items, defaultOptions), 540000)
})

test('free shipping when subtotal exceeds threshold', () => {
  const items = [{ name: 'Áo khoác', price: 600000, qty: 1 }]
  // subtotal: 600000, VAT: 48000, shipping: 0 -> total: 648000
  assert.strictEqual(cartTotal(items, defaultOptions), 648000)
})

test('charges shipping fee when subtotal is below threshold', () => {
  const items = [{ name: 'Bút', price: 100000, qty: 1 }]
  // subtotal: 100000, VAT: 8000, shipping: 30000 -> total: 138000
  assert.strictEqual(cartTotal(items, defaultOptions), 138000)
})

// 4. Rounding to whole dong
test('rounds total to the nearest whole dong', () => {
  const items = [{ name: 'Mặt hàng lẻ', price: 105, qty: 1 }]
  const options = { vatRate: 0.085, freeShipFrom: 500, shipFee: 0 }
  // subtotal: 105, VAT: 8.925, shipping: 0 -> 113.925 -> rounded: 114
  assert.strictEqual(cartTotal(items, options), 114)
})

// 5. Validation & RangeError cases
test('throws RangeError when price is negative', () => {
  const items = [{ name: 'Giá âm', price: -50000, qty: 1 }]
  assert.throws(() => cartTotal(items, defaultOptions), RangeError)
})

test('throws RangeError when quantity is zero', () => {
  const items = [{ name: 'Số lượng 0', price: 50000, qty: 0 }]
  assert.throws(() => cartTotal(items, defaultOptions), RangeError)
})

test('throws RangeError when quantity is negative', () => {
  const items = [{ name: 'Số lượng âm', price: 50000, qty: -2 }]
  assert.throws(() => cartTotal(items, defaultOptions), RangeError)
})

test('throws RangeError when quantity is a non-integer decimal', () => {
  const items = [{ name: 'Số lượng thập phân', price: 50000, qty: 1.5 }]
  assert.throws(() => cartTotal(items, defaultOptions), RangeError)
})
