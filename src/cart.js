// Implement cartTotal here. See README.md for the specification.
export function cartTotal(items, options) {
  // check cart is null or not
  if (items.length === 0) return 0;

  let subtotal = 0;
  for (const item of items) {
    if (item.price < 0) throw new RangeError('The cost item is negative');
    if (!Number.isInteger(item.qty) || item.qty <= 0) throw new RangeError('The qty need positive integer');
    subtotal += item.price * item.qty;
  }

  const VAT = subtotal * options.vatRate;
  const shipFee = (subtotal >= options.freeShipFrom ? 0 : options.shipFee);
  const total = Math.round(subtotal + VAT + shipFee);

  return total;
}
