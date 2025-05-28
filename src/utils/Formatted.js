/* eslint-disable no-restricted-globals */
function formatRp(number) {
  if (typeof number !== 'number' || isNaN(number)) return 'Rp 0';
  return number.toLocaleString('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  });
}

function formatPrice(priceString) {
  if (typeof priceString !== 'string') return 0;
  const cleanString = priceString.replace(/\./g, '').replace(',', '.');
  const price = parseFloat(cleanString);
  return isNaN(price) ? 0 : price;
}

export { formatPrice, formatRp };
