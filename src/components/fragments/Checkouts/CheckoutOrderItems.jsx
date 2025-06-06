/* eslint-disable no-nested-ternary */
/* eslint-disable consistent-return */
/* eslint-disable no-unused-vars */
/* eslint-disable no-restricted-syntax */
/* eslint-disable camelcase */
/* eslint-disable no-await-in-loop */
/* eslint-disable operator-linebreak */
import React, { useState } from 'react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { ORDER_STATUS } from '@/constants/orderStatus';
import useGetCartById from '@/hooks/cart/useGetCartById';
import useCreateOrder from '@/hooks/order/useCreateOrder';
import useUpdateOrder from '@/hooks/order/useUpdateOrder';
import useCreateOrderItem from '@/hooks/orderItem/useCreateOrderItem';
import { formatRp } from '@/utils/Formatted';

function CheckoutOrderItems() {
  const [loadingOrder, setLoadingOrder] = useState(false);
  const [loadingOrderItem, setLoadingOrderItem] = useState(false);

  const [submittedOrder, setSubmittedOrder] = useState(false);
  const [submittedOrderItem, setSubmittedOrderItem] = useState(false);

  const userData = JSON.parse(localStorage.getItem('furniture_user'));
  const orderData = JSON.parse(localStorage.getItem('order_data'));
  const cartItemData = JSON.parse(localStorage.getItem('cart_item_data'));

  const userId = userData?.id;
  const orderId = orderData?.id;
  // const cartItemIdProduct = cartItemData?.id;

  const cartData = JSON.parse(localStorage.getItem('cart_data'));
  const cartId = cartData?.id;
  const cartDataTotal = cartData?.total_price;

  const { cartId: cart, isLoading, isError } = useGetCartById(Number(cartId));

  const { createOrder } = useCreateOrder();
  const { createOrderItem } = useCreateOrderItem();
  const { updateOrder } = useUpdateOrder();

  if (isLoading) return <p>Loading cart data...</p>;
  if (isError) return <p>Error loading cart data</p>;

  const totalQuantity =
    cart?.cartItems?.reduce((sum, item) => sum + item.quantity, 0) || 0;

  const handleCreateOrder = async () => {
    setLoadingOrder(true);
    try {
      await createOrder({
        user_id: userId,
        cart_id: cartId,
        total_price: cartDataTotal,
        status: ORDER_STATUS.PENDING,
      });

      // setSubmittedOrder(true);
    } catch (error) {
      console.error(error.message);
    } finally {
      setLoadingOrder(false);
    }
  };

  const handleCreateOrderItem = async () => {
    try {
      if (!orderId) {
        console.error('Order ID not found. Please create order first.');
        return;
      }

      for (const item of cartItemData) {
        const { product_id, quantity, product } = item;
        const price = Number(product?.price);

        await createOrderItem({
          order_id: orderId,
          product_id,
          quantity,
          price,
        });
      }
    } catch (error) {
      console.error('Error creating order items:', error.message);
    }
  };

  // const handleUpdateOrderToPaid = async () => {
  //   try {
  //     if (!orderId) return console.error('Order ID tidak ditemukan');

  //     await updateOrder({
  //       id: orderId,
  //       status: ORDER_STATUS.PROCESSING,
  //     });

  //     console.log('Order status berhasil diubah ke PAID');
  //   } catch (err) {
  //     console.error('Gagal update status order:', err.message);
  //   }
  // };

  return (
    <section>
      <div className="flex flex-col gap-5">
        {/* Order Summary Card */}
        <Card className="p-6 border-gray-200">
          <CardContent className="p-0 flex flex-col gap-3">
            <div>
              <h2 className="text-2xl font-semibold text-black">
                Your Order Data
              </h2>
              <p className="text-sm text-gray-500 mt-1">
                Please check your order data!
              </p>
            </div>

            <div className="flex flex-col gap-6">
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-sm font-medium text-gray-600">Name</span>
                <span className="text-base font-semibold text-black">
                  {userData?.name}
                </span>
              </div>

              <div className="flex justify-between items-center border-b border-gray-100 py-2">
                <span className="text-sm font-medium text-gray-600">
                  Status
                </span>
                <Badge className="bg-blue-100 text-blue-800 uppercase text-sm">
                  {ORDER_STATUS.PENDING}
                </Badge>
              </div>

              <div className="flex justify-between items-center py-2">
                <span className="text-sm font-medium text-gray-600">
                  Total Price
                </span>
                <span className="text-xl font-bold text-black">
                  {formatRp(cartDataTotal)}
                </span>
              </div>
            </div>
          </CardContent>

          <CardFooter className="flex items-center justify-end gap-4 px-0 pt-5">
            <Button
              onClick={handleCreateOrder}
              className="bg-black text-white hover:bg-gray-800"
              size="lg"
              disabled={loadingOrder || submittedOrder}
            >
              {loadingOrder
                ? 'Saving...'
                : submittedOrder
                  ? 'Update Order'
                  : 'Confirm Order'}
            </Button>
            <Button
              variant="outline"
              className="border-gray-300 text-black hover:bg-gray-50"
              size="lg"
            >
              Cancel
            </Button>
          </CardFooter>
        </Card>

        {/* Order Items */}
        <Card className="p-6 border-gray-200">
          <CardContent className="p-0 flex flex-col gap-3">
            <div>
              <h2 className="text-2xl font-semibold text-black">
                Your Order Items Data
              </h2>
              <p className="text-sm text-gray-500 mt-1">
                Please check your order items data!
              </p>
            </div>

            {cart?.cartItems?.map(item => (
              <div
                key={item.id}
                className="flex justify-between items-center py-2 border-b border-gray-100"
              >
                <span className="text-sm font-medium text-gray-600">
                  {item.product.name}
                </span>
                <span className="text-sm font-medium text-gray-600">
                  Qty: {item.quantity}
                </span>
                {/* <span className="text-base font-semibold text-black">
                  {formatRp(item.subtotal_price)}
                </span> */}
              </div>
            ))}

            <div className="flex justify-between items-center py-2 font-semibold text-black">
              <span>Total Quantity</span>
              <span>{totalQuantity}</span>
            </div>

            <CardFooter className="flex items-center justify-end gap-4 px-0 pt-5">
              <Button
                onClick={handleCreateOrderItem}
                className="bg-black text-white hover:bg-gray-800"
                size="lg"
                disabled={loadingOrderItem || submittedOrderItem}
              >
                {loadingOrderItem
                  ? 'Saving...'
                  : submittedOrderItem
                    ? 'Update Order Item'
                    : 'Confirm Order Item'}
              </Button>
              <Button
                variant="outline"
                className="border-gray-300 text-black hover:bg-gray-50"
                size="lg"
              >
                Cancel
              </Button>
            </CardFooter>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

export default CheckoutOrderItems;
