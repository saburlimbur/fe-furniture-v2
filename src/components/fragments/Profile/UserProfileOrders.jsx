import React from 'react';
import { CheckCircle, Clock, Package, Truck, XCircle } from 'lucide-react';

import { formatStatus, getOrderStatusColor } from '@/constants/orderStatus';
import useGetCartById from '@/hooks/cart/useGetCartById';
import { formatRp } from '@/utils/Formatted';

const StatusBadge = ({ status }) => {
  const normalizedStatus = status?.toLowerCase();

  const icons = {
    pending: <Clock className="w-4 h-4 mr-1" />,
    processing: <Truck className="w-4 h-4 mr-1" />,
    shipped: <Package className="w-4 h-4 mr-1" />,
    delivered: <CheckCircle className="w-4 h-4 mr-1" />,
    cancelled: <XCircle className="w-4 h-4 mr-1" />,
  };

  return (
    <span
      className={`inline-flex items-center px-2.5 py-1.5 text-xs rounded-md font-medium ${getOrderStatusColor(
        normalizedStatus,
      )}`}
    >
      {icons[normalizedStatus] || null}
      {formatStatus(normalizedStatus)}
    </span>
  );
};

function UserProfileOrders() {
  const cartData = JSON.parse(localStorage.getItem('cart_data'));
  const cartId = cartData?.id;

  const { cartId: cart } = useGetCartById(Number(cartId));
  const itemList = cart?.cartItems || [];

  const orderDataStorage = JSON.parse(localStorage.getItem('order_data'));

  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold text-gray-900">My Carts and Orders</h2>

      <div
        key={orderDataStorage?.id}
        className="bg-white rounded-xl border border-gray-100 overflow-hidden"
      >
        <div className="flex items-center justify-between p-5 bg-gray-50 border-b">
          <div>
            <p className="text-sm text-gray-600">
              <span className="font-semibold text-gray-900">Order ID:</span>{' '}
              ORDER_{orderDataStorage?.id}
            </p>
            <p className="text-xs text-gray-500 mt-1">
              Placed on{' '}
              {new Date(orderDataStorage?.created_at).toLocaleDateString(
                'id-ID',
                {
                  day: '2-digit',
                  month: 'short',
                  year: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit',
                },
              )}
            </p>
          </div>
          <div className="text-right">
            <StatusBadge status={orderDataStorage?.status} />
            <p className="text-base font-semibold text-gray-900 mt-2">
              {formatRp(orderDataStorage?.total_price)}
            </p>
          </div>
        </div>

        {/* Cart Items */}
        <div className="divide-y">
          {itemList.length === 0 ? (
            <div className="p-6 text-center text-sm text-gray-500">
              No items found.
            </div>
          ) : (
            itemList.map(item => (
              <div
                key={item.id}
                className="flex items-center gap-4 p-5 bg-white"
              >
                <img
                  src={item.product.image_url}
                  alt={item.product.name}
                  className="w-20 h-20 object-cover rounded-lg border"
                />
                <div className="flex-1">
                  <p className="font-semibold text-gray-800">
                    {item.product.name}
                  </p>
                  <p className="text-sm text-gray-500 line-clamp-2">
                    {item.product.description}
                  </p>
                </div>
                <div className="text-right space-y-1">
                  <p className="text-sm text-gray-700">
                    Qty: <span className="font-medium">{item.quantity}</span>
                  </p>
                  <p className="font-semibold text-gray-900">
                    {formatRp(item.subtotal_price)}
                  </p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default UserProfileOrders;
