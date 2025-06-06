/* eslint-disable no-unused-vars */
/* eslint-disable arrow-parens */
import React from 'react';
import { Minus, Plus, X } from 'lucide-react';

import Card from '@/components/fragments/Card';
import { Button } from '@/components/ui/button';
import useGetCartById from '@/hooks/cart/useGetCartById';
import useDeleteCartItem from '@/hooks/cartItem/useDeleteCartItem';
import { formatPrice, formatRp } from '@/utils/Formatted';

import EmptyCart from '../Cart/EmptyCart';

function CheckoutProductItems() {
  const cartData = JSON.parse(localStorage.getItem('cart_data'));
  const cartId = cartData?.id;

  const { cartId: cart, refetch, isLoading } = useGetCartById(Number(cartId));
  const { deleteCartItem } = useDeleteCartItem();

  const itemList = cart?.cartItems || [];

  const handleDeleteProduct = async id => {
    if (!id || typeof id !== 'number') {
      console.error('Invalid cart item ID:', id);
      return;
    }

    try {
      await deleteCartItem(id);
      refetch();
    } catch (err) {
      console.error('Failed to delete cart item:', err);
    }
  };

  return (
    <div className=" bg-white rounded-3xl border border-gray-100 p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Your Cart Items</h2>
        <Button
          variant="outline"
          size="icon"
          className="bg-white text-red-500 border rounded-full shadow"
        >
          <X size={16} />
        </Button>
      </div>

      <div className="flex justify-between text-gray-500 text-sm px-4 pt-6">
        <p className="w-1/2">Product</p>
        <p className="w-1/4 text-center">Quantity</p>
        <p className="w-1/4 text-right">Price</p>
      </div>

      <div className="flex flex-col gap-4 pt-6">
        {itemList.length === 0 ? (
          <EmptyCart />
        ) : (
          itemList.map(item => (
            <Card
              key={item.id}
              className="relative flex items-center justify-between p-4 border border-gray-100 rounded-xl"
            >
              <Button
                onClick={() => handleDeleteProduct(item.id)}
                variant="outline"
                size="icon"
                className="absolute -top-2 -right-2 bg-white text-red-500 border rounded-full shadow"
              >
                <X size={16} />
              </Button>

              <div className="flex items-center gap-4 w-1/2">
                <Card.Image
                  className="w-20 h-20 object-cover rounded-lg"
                  src={item.product.image_url}
                  alt={item.product.name}
                />
                <Card.Header>
                  <h3 className="text-md font-semibold">{item.product.name}</h3>
                  <p className="text-xs text-gray-500">
                    {item.product.description}
                  </p>
                </Card.Header>
              </div>

              <Card.Body className="flex items-center gap-2 w-1/4 justify-center">
                <Button size="icon" variant="outline" className="rounded-full">
                  <Minus size={16} />
                </Button>
                <span className="text-sm">{item.quantity}</span>
                <Button size="icon" variant="outline" className="rounded-full">
                  <Plus size={16} />
                </Button>
              </Card.Body>

              <div className="flex items-center justify-end w-1/4 gap-4">
                <Card.Footer className="text-right">
                  <p className="font-semibold">
                    {formatRp(formatPrice(item.subtotal_price))}
                  </p>
                </Card.Footer>
              </div>
            </Card>
          ))
        )}
      </div>
    </div>
  );
}

export default CheckoutProductItems;
