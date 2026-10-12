import { test } from 'node:test'
import assert from 'node:assert/strict'
import { cartTotal } from '../src/cart.js'

// This test fails until you implement cartTotal. That is the point:
// run `npm test` first and see it red.
test('the example from the slides', () => {
  const items = [
    { name: 'Áo thun', price: 180000, qty: 2 },
    { name: 'Sổ tay', price: 45000, qty: 1 },
  ]
  const options = { vatRate: 0.08, freeShipFrom: 500000, shipFee: 30000 }
  assert.equal(cartTotal(items, options), 467400)
})

test('the empty cart', () => {
  const items = []
  const options = { vatRate: 0.08, freeShipFrom: 500000, shipFee: 30000 }
  assert.equal(cartTotal(items, options), 0)
})

test('the subtotal under freeShipFrom', () => {
  const items = [
    { name: 'Jean', price: 100000, qty: 2 }
  ]
  const options = { vatRate: 0.01, freeShipFrom: 500000, shipFee: 30000 }
  assert.equal(cartTotal(items, options), 232000)
})

test('The subtotal have enough condition to freeShip', () => {
  const items = [
    { name: 'Jean', price: 100000, qty: 2},
    { name: 'T-shirt', price: 200000, qty: 2}
  ]
  const options = { vatRate: 0.01, freeShipFrom: 500000, shipFee: 30000 }
  assert.equal(cartTotal(items, options), 606000)
})

test('The price of item is negative', () =>{
  const items = [
    { name: 'Jean', price: -100000, qty: 2}
  ]
  const options = { vatRate: 0.01, freeShipFrom: 500000, shipFee: 30000 }
  assert.throws(
    () => cartTotal(items, options),
    RangeError
  )
})

test('The qty is negative', () => {
  const items = [
      { name: 'Jean', price: 100000, qty: -2}
  ]
  const options = { vatRate: 0.01, freeShipFrom: 500000, shipFee: 30000 }
  assert.throws(
    () => cartTotal(items, options),
    RangeError
  )
})

test('The qty is not the positive integer', () => {
  const items = [
      { name: 'Jean', price: 100000, qty: 2.6}
  ]
  const options = { vatRate: 0.01, freeShipFrom: 500000, shipFee: 30000 }
  assert.throws(
    () => cartTotal(items, options),
    RangeError
  )
})

// new testcase for problem round
test('The total round up', () =>{
  const items = [
      {name: 'Jean', price: 50, qty: 1}
  ]
  const options = { vatRate: 0.01, freeShipFrom: 500, shipFee: 30 }
  assert.equal(cartTotal(items, options), 81);
})

test('The total round down', () =>{
  const items = [
      {name: 'Jean', price: 40, qty: 1}
  ]
  const options = { vatRate: 0.01, freeShipFrom: 500, shipFee: 30 }
  assert.equal(cartTotal(items, options), 70);
})

// new testcase for qty = 0
