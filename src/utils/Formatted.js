/* eslint-disable no-restricted-globals */
function formatRp(number) {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  }).format(number);
}

function formatPrice(priceString) {
  if (typeof priceString !== 'string') return 0;
  const cleanString = priceString.replace(/\./g, '').replace(',', '.');
  const price = parseFloat(cleanString);
  return isNaN(price) ? 0 : price;
}

const formatDate = dateString =>
  new Date(dateString).toLocaleString('id-ID', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });

export { formatDate, formatPrice, formatRp };
