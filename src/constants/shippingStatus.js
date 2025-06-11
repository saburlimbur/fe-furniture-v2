const SHIPPING_STATUS = {
  Pending: 'Pending',
  Processing: 'Processing',
  Shipped: 'Shipped',
  In_Transit: 'In_Transit',
  Delivered: 'Delivered',
  Cancelled: 'Cancelled',
};

const getShippingStatusColor = status => {
  switch (status?.toLowerCase()) {
    case 'pending':
      return 'bg-yellow-100 text-yellow-700';
    case 'shipped':
      return 'bg-blue-100 text-blue-700';
    case 'delivered':
      return 'bg-green-100 text-green-700';
    case 'cancelled':
      return 'bg-red-100 text-red-700';
    default:
      return 'bg-gray-100 text-gray-700';
  }
};

const formatStatus = status => {
  if (!status) return '';
  return status.charAt(0).toUpperCase() + status.slice(1).toLowerCase();
};

export { formatStatus, getShippingStatusColor, SHIPPING_STATUS };
