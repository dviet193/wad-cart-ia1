/**
 * Calculate the total cost of a shopping cart including VAT and shipping.
 *
 * @param {Array<{ name: string, price: number, qty: number }>} items
 * @param {{ vatRate: number, freeShipFrom: number, shipFee: number }} options
 * @returns {number} Total rounded to the nearest whole dong
 */
export function cartTotal(items, options) {
  if (!items || items.length === 0) {
    return 0
  }

  let subtotal = 0

  for (const item of items) {
    if (typeof item.price !== 'number' || item.price < 0) {
      throw new RangeError(`Item "${item.name}" has invalid price: ${item.price}`)
    }

    if (!Number.isInteger(item.qty) || item.qty <= 0) {
      throw new RangeError(`Item "${item.name}" has invalid quantity: ${item.qty}`)
    }

    subtotal += item.price * item.qty
  }

  const vat = subtotal * options.vatRate
  const shipping = subtotal >= options.freeShipFrom ? 0 : options.shipFee

  return Math.round(subtotal + vat + shipping)
}
