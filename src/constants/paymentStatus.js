/* eslint-disable arrow-parens */
const PAYMENT_STATUS = {
  Pending: 'Pending',
  Completed: 'Completed',
  Failed: 'Failed',
};

export default PAYMENT_STATUS;

export const getStatusColor = status => {
  switch (status?.toLowerCase()) {
    case 'completed':
      return 'bg-green-100 text-green-700';
    case 'pending':
      return 'bg-yellow-100 text-yellow-700';
    case 'failed':
      return 'bg-red-100 text-red-700';
    default:
      return 'bg-gray-100 text-gray-700';
  }
};

export const formatStatus = status => {
  if (!status) return '';
  return status.charAt(0).toUpperCase() + status.slice(1).toLowerCase();
};
