import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { Minus, Plus, X } from 'lucide-react';

import Card from '@/components/fragments/Card';
import EmptyCart from '@/components/fragments/Cart/EmptyCart';
import AddressForm from '@/components/template/AddressForm';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { Button } from '@/components/ui/button';
import { ORDER_STATUS } from '@/constants/orderStatus';
import useGetCartById from '@/hooks/cart/useGetCartById';
import useDeleteCartItem from '@/hooks/cartItem/useDeleteCartItem';
import useGetAllCartItems from '@/hooks/cartItem/useGetAllCartItems';
import useGetCartItemById from '@/hooks/cartItem/useGetCartItemById';
import useCreateOrder from '@/hooks/order/useCreateOrder';
import { formatPrice, formatRp } from '@/utils/Formatted';

function CartPage() {
  const navigate = useNavigate();
  const userData = JSON.parse(localStorage.getItem('furniture_user'));
  const cartData = JSON.parse(localStorage.getItem('cart_data'));

  const cartId = cartData?.id;
  const userId = userData?.id;

  const { cartItemId } = useGetCartItemById(Number(cartId));
  const { cartId: cart } = useGetCartById(Number(cartId));
  const {
    createOrder,
    isLoading: isOrderLoading,
    isError: isOrderError,
  } = useCreateOrder();

  console.log('cartItemId:', cartItemId);
  console.log('cartId:', cartId);
  console.log('userId:', userId);

  const itemList = cart?.cartItems || [];

  console.log('itemList:', itemList);

  const subtotal = itemList.reduce(
    (total, item) => total + formatPrice(item.subtotal_price),
    0,
  );

  const shipping = 0; // memang 0
  const total = subtotal + shipping;

  const handleCreateOrder = async () => {
    try {
      await createOrder({
        user_id: Number(userId),
        cart_id: Number(cartId),
        total_price: total,
        status: ORDER_STATUS.PENDING, // pending jadi default
      });

      toast.success('Order created successfully!');
    } catch (error) {
      console.error('Error creating order:', error);
      toast.error('Something went wrong', error.message);
    }
  };

  return (
    <section className="max-w-[1400px] mx-auto p-4 pt-12 min-h-screen space-y-10">
      <div>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Carts</BreadcrumbPage>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink>Orders</BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="flex w-full gap-8">
        <div className="w-2/3  space-y-6 flex-col">
          <div className=" bg-white rounded-3xl border border-gray-100 p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">Your Shopping Cart</h2>
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
                      // onClick={handleDeleteProduct}
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
                        <h3 className="text-md font-semibold">
                          {item.product.name}
                        </h3>
                        <p className="text-xs text-gray-500">
                          {item.product.description}
                        </p>
                      </Card.Header>
                    </div>

                    <Card.Body className="flex items-center gap-2 w-1/4 justify-center">
                      <Button
                        size="icon"
                        variant="outline"
                        className="rounded-full"
                      >
                        <Minus size={16} />
                      </Button>
                      <span className="text-sm">{item.quantity}</span>
                      <Button
                        size="icon"
                        variant="outline"
                        className="rounded-full"
                      >
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

          <div className="w-full">
            <AddressForm />
          </div>
        </div>

        <div className="w-1/3">
          <div className="bg-white rounded-3xl border border-gray-100 p-6 shadow-sm space-y-6 sticky top-20">
            <h2 className="text-xl font-semibold">Product Items Summary</h2>

            {/* summary subtotal dan total */}
            <div className="flex justify-between text-sm text-gray-600">
              <span>Subtotal</span>
              <span>{formatRp(subtotal)}</span>
            </div>

            <div className="border-t pt-4 flex justify-between font-semibold text-md">
              <span>Total</span>
              <span>
                Rp.{' '}
                {itemList
                  .reduce(
                    (total, item) => total + formatPrice(item.subtotal_price),
                    0,
                  )
                  .toLocaleString('id-ID')}
              </span>
            </div>

            <div className="flex justify-between text-sm text-gray-600">
              <span>Shipping</span>
              <span>{formatRp(shipping)}</span>
            </div>

            <div className="border-t pt-4 flex justify-between font-semibold text-md">
              <span>Total</span>
              <span>{formatRp(total)}</span>
            </div>

            <Button
              size="lg"
              variant="outline"
              className="w-full cursor-pointer"
              onClick={() => navigate('/products')}
            >
              Continue Shopping
            </Button>

            <Button
              size="lg"
              className="w-full text-white cursor-pointer"
              onClick={() => {
                handleCreateOrder();
              }}
            >
              Proceed to Checkout
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CartPage;
