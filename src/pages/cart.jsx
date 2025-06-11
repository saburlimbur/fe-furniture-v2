/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { isEqual } from 'lodash';

import CheckoutInformations from '@/components/fragments/Checkouts/CheckoutInformations';
import CheckoutOrderItems from '@/components/fragments/Checkouts/CheckoutOrderItems';
import CheckoutPaymentMethod from '@/components/fragments/Checkouts/CheckoutPaymentMethod';
import CheckoutProductItems from '@/components/fragments/Checkouts/CheckoutProductItems';
import CheckoutShippingMethod from '@/components/fragments/Checkouts/CheckoutShippingMethod';
import CheckoutSteps from '@/components/fragments/Checkouts/CheckoutSteps';
import AddressForm from '@/components/template/AddressForm';
import { Button } from '@/components/ui/button';
import { ORDER_STATUS } from '@/constants/orderStatus';
import useGetCartById from '@/hooks/cart/useGetCartById';
import useUpdateCart from '@/hooks/cart/useUpdateCart';
import useCreateOrder from '@/hooks/order/useCreateOrder';
import useGetShippingById from '@/hooks/shipping/useGetShippingById';
import { calculateCartTotal } from '@/utils/CartUtils';
import { formatRp } from '@/utils/Formatted';

function CartPage() {
  const [currentStep, setCurrentStep] = useState(1);
  // const navigate = useNavigate();

  const userData = JSON.parse(localStorage.getItem('furniture_user'));
  const cartData = JSON.parse(localStorage.getItem('cart_data'));
  // const shippingData = JSON.parse(localStorage.getItem('shipping_data'));

  const cartId = cartData?.id;
  const userId = userData?.id;

  const { cartId: cart } = useGetCartById(Number(cartId));
  const { createOrder } = useCreateOrder();
  const { updateCart } = useUpdateCart();
  // const { shippingId, refetch } = useGetShippingById();

  const itemList = cart?.cartItems || [];
  const subtotal = calculateCartTotal(itemList);
  const shipping = 0;
  const total = subtotal + shipping;

  const prevTotalRef = useRef(total);
  const prevItemsRef = useRef([]);

  useEffect(() => {
    const totalChanged = prevTotalRef.current !== total;
    const itemsChanged = !isEqual(prevItemsRef.current, itemList);

    if (cartId && userId && subtotal >= 0 && (totalChanged || itemsChanged)) {
      const update = async () => {
        try {
          await updateCart({
            id: cartId,
            user_id: userId,
            total_price: total,
          });

          const updatedCart = {
            ...cartData,
            total_price: total,
          };

          localStorage.setItem('cart_data', JSON.stringify(updatedCart));
          localStorage.setItem('cart_item_data', JSON.stringify(itemList));

          prevTotalRef.current = total;
          prevItemsRef.current = itemList;
        } catch (err) {
          console.error('Failed to update cart:', err);
          toast.error('Gagal memperbarui cart');
        }
      };

      update();
    }
  }, [cartId, userId, subtotal, total, cartData, itemList, updateCart]);

  // const handleCreateOrder = async () => {
  //   try {
  //     await createOrder({
  //       user_id: Number(userId),
  //       cart_id: Number(cartId),
  //       total_price: total,
  //       status: ORDER_STATUS.PENDING,
  //     });

  //     toast.success('Order created successfully!');
  //   } catch (error) {
  //     console.error('Error creating order:', error);
  //     toast.error('Something went wrong', error.message);
  //   }
  // };

  return (
    <section className="max-w-[1500px] mx-auto p-4 pt-12 min-h-screen space-y-10">
      <CheckoutSteps
        currentStep={currentStep}
        setCurrentStep={setCurrentStep}
      />

      <div className="flex w-full gap-6">
        <div
          className={`${
            currentStep === 5 ? 'w-full' : 'w-[60%]'
          } space-y-6 flex-col transition-all duration-300`}
        >
          {currentStep === 1 && <AddressForm />}
          {currentStep === 2 && <CheckoutOrderItems />}
          {currentStep === 3 && <CheckoutShippingMethod />}
          {currentStep === 4 && <CheckoutPaymentMethod />}

          <div className="w-full">
            {currentStep === 5 && <CheckoutInformations />}
          </div>

          <div className="flex gap-4 justify-end">
            <Button
              variant="outline"
              onClick={() => setCurrentStep(prev => Math.max(prev - 1, 1))}
              disabled={currentStep === 1}
            >
              Previous Step
            </Button>
            <Button
              onClick={() => setCurrentStep(prev => Math.min(prev + 1, 5))}
              disabled={currentStep === 5}
            >
              Next Step
            </Button>
          </div>
        </div>

        {currentStep !== 5 && (
          <div className="w-[40%] flex flex-col gap-3">
            <CheckoutProductItems />

            <div className="bg-white rounded-3xl border border-gray-100 p-6 shadow-sm space-y-6 sticky top-20">
              <div className="flex justify-between text-sm text-gray-600">
                <span>Subtotal</span>
                <span>{formatRp(subtotal)}</span>
              </div>

              <div className="flex justify-between text-sm text-gray-600">
                <span>Shipping</span>
                <span>{formatRp(shipping)}</span>
              </div>

              <div className="border-t pt-4 flex justify-between font-semibold text-md">
                <span>Total</span>
                <span>{formatRp(total)}</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default CartPage;
