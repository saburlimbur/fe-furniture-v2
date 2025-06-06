/* eslint-disable arrow-parens */
export const calculateCartTotal = items => {
  return items.reduce((sum, item) => sum + parseFloat(item.subtotal_price), 0);
};
