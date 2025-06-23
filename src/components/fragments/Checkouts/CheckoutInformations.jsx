/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable camelcase */
import React from 'react';
import toast from 'react-hot-toast';
import {
  CreditCard,
  Home,
  Landmark,
  LocateFixed,
  Mail,
  MapPin,
  Phone,
  ReceiptText,
  Truck,
  User,
} from 'lucide-react';

import InfoRow from '@/components/elements/InfoRow';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { CHECKOUT_STATUS } from '@/constants/checkoutStatus';
import { getOrderStatusColor, ORDER_STATUS } from '@/constants/orderStatus';
import PAYMENT_STATUS, {
  formatStatus,
  getStatusColor,
} from '@/constants/paymentStatus';
import {
  getShippingStatusColor,
  SHIPPING_STATUS,
} from '@/constants/shippingStatus';
import useCreateCheckout from '@/hooks/checkouts/useCreateCheckout';
import useUpdateOrder from '@/hooks/order/useUpdateOrder';
import useUpdatePayment from '@/hooks/payment/useUpdatePayment';
import useUpdateShipping from '@/hooks/shipping/useUpdateShipping';
import { formatDate, formatRp } from '@/utils/Formatted';

import SectionTitle from '../SectionTitle';

function CheckoutInformations() {
  const userData = JSON.parse(localStorage.getItem('furniture_user'));
  const addressData = JSON.parse(localStorage.getItem('address_data'));
  const paymentDataStorage = JSON.parse(localStorage.getItem('payment_data'));
  const shippingDataStorage = JSON.parse(localStorage.getItem('shipping_data'));
  const cartData = JSON.parse(localStorage.getItem('cart_data'));
  const orderDataStorage = JSON.parse(localStorage.getItem('order_data'));

  const { createCheckoutMutation, isLoading } = useCreateCheckout();
  const { updateOrder } = useUpdateOrder();
  const { updatePayment } = useUpdatePayment();
  const { updateShipping } = useUpdateShipping();

  const removeTransactionStorage = () => {
    localStorage.removeItem('address_data');
    localStorage.removeItem('payment_data');
    localStorage.removeItem('shipping_data');
    localStorage.removeItem('order_data');
    localStorage.removeItem('cart_data');
    localStorage.removeItem('cart_item_data');
  };

  const handleCheckout = async () => {
    try {
      await createCheckoutMutation({
        user_id: Number(userData?.id),
        cart_id: cartData?.id,
        address_id: addressData?.id,

        orderData: {
          total_price: orderDataStorage?.total_price,
          status: ORDER_STATUS.DELIVERED,
          created_at: orderDataStorage?.created_at
            ? new Date(orderDataStorage?.created_at)
            : new Date(),
          updated_at: orderDataStorage?.updated_at
            ? new Date(orderDataStorage?.updated_at)
            : new Date(),
        },

        paymentData: {
          payment_method: paymentDataStorage?.payment_method,
          payment_status: PAYMENT_STATUS.Completed,
          payment_date: new Date(),
          amount: orderDataStorage?.total_price,
        },

        shippingData: {
          shipping_cost: shippingDataStorage?.shipping_cost,
          shipping_date: new Date(),
          status: SHIPPING_STATUS.Delivered,
        },

        checkoutData: {
          total_price: orderDataStorage?.total_price,
          status: CHECKOUT_STATUS.Completed,
          created_at: new Date(),
          updated_at: new Date(),
        },
      });

      toast.success('Checkout created successfully!');
      // removeTransactionStorage();

      // setTimeout(() => {
      //   window.location.href = '/';
      // }, 1000);
    } catch (error) {
      console.error('error:', error.message);
      throw new Error();
    }
  };

  const Badge = ({ status, colorClass }) => (
    <span
      className={`px-3 py-1 rounded-full text-xs font-medium uppercase ${colorClass}`}
    >
      {formatStatus(status)}
    </span>
  );

  return (
    <section className="w-full bg-white text-black py-8">
      <div className="flex flex-col lg:flex-row gap-6">
        {/* LEFT */}
        <div className="w-full lg:w-[60%] space-y-6">
          {/* user & addres */}

          {/* shipping */}
          <Card className="rounded-lg border border-gray-200 shadow-sm">
            <SectionTitle
              icon={Truck}
              title="Shipping Details"
              subtitle="Information about delivery"
            />
            <Separator />
            <CardContent className="space-y-4 pt-6">
              <InfoRow
                className="flex justify-between text-sm"
                label="Shipping Cost"
                value={formatRp(shippingDataStorage?.shipping_cost)}
              />
              <InfoRow
                className="flex justify-between text-sm"
                label="Shipping Date"
                value={formatDate(shippingDataStorage?.shipping_date)}
              />
              <InfoRow
                className="flex justify-between text-sm"
                label="Status"
                value={
                  <Badge
                    status={shippingDataStorage?.status}
                    colorClass={getShippingStatusColor(
                      shippingDataStorage?.status,
                    )}
                  />
                }
              />
              <Separator />
              <InfoRow
                className="flex justify-between text-sm"
                label="Created At"
                value={formatDate(shippingDataStorage?.created_at)}
              />
              <InfoRow
                className="flex justify-between text-sm"
                label="Updated At"
                value={formatDate(shippingDataStorage?.updated_at)}
              />
            </CardContent>
          </Card>

          {/* payment */}
          <Card className="rounded-lg border border-gray-200 shadow-sm">
            <SectionTitle
              icon={CreditCard}
              title="Payment Details"
              subtitle="Payment info and status"
            />
            <Separator />
            <CardContent className="space-y-4 pt-6">
              <InfoRow
                label="Payment Method"
                value={
                  <span className="flex items-center gap-2 capitalize">
                    <img src="/CreditCard.png" className="w-6 h-6" />
                    {paymentDataStorage?.payment_method?.replace('_', ' ')}
                  </span>
                }
              />
              <InfoRow
                label="Status"
                value={
                  <Badge
                    status={paymentDataStorage?.payment_status}
                    colorClass={getStatusColor(
                      paymentDataStorage?.payment_status,
                    )}
                  />
                }
              />
              <InfoRow
                label="Amount"
                value={formatRp(paymentDataStorage?.amount)}
              />
              <InfoRow
                label="Payment Date"
                value={formatDate(paymentDataStorage?.payment_date)}
              />
              <Separator />
              <InfoRow
                label="Order ID"
                value={`#${paymentDataStorage?.order?.id}`}
              />
              <InfoRow
                label="Order Status"
                value={
                  <Badge
                    status={paymentDataStorage?.order?.status}
                    colorClass={getOrderStatusColor(
                      paymentDataStorage?.order?.status,
                    )}
                  />
                }
              />
              <InfoRow
                label="Total Price"
                value={formatRp(paymentDataStorage?.order?.total_price)}
              />
            </CardContent>
          </Card>
        </div>

        {/* RIGHT: Order Summary & User Information */}
        <div className="w-full lg:w-[40%] flex flex-col gap-6">
          <Card className="rounded-lg border border-gray-200 shadow-sm">
            <SectionTitle
              icon={User}
              title="User Information"
              subtitle="Your order details appear below"
            />
            <Separator />
            <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6 py-6">
              <div className="flex gap-3 items-start">
                <User className="mt-1 text-gray-600" />
                <div>
                  <p className="text-xs text-gray-500">Full Name</p>
                  <h2 className="text-base">{userData?.name || '-'}</h2>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <Mail className="mt-1 text-gray-600" />
                <div>
                  <p className="text-xs text-gray-500">Email</p>
                  <h2 className="text-base break-words">
                    {userData?.email || '-'}
                  </h2>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <Phone className="mt-1 text-gray-600" />
                <div>
                  <p className="text-xs text-gray-500">Phone Number</p>
                  <h2 className="text-base">{userData?.phone_number || '-'}</h2>
                </div>
              </div>
            </CardContent>
            <Separator />
            <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6 py-6">
              <div className="flex gap-3 items-start">
                <Home className="mt-1 text-gray-600" />
                <div>
                  <p className="text-xs text-gray-500">Street</p>
                  <h2 className="text-base">{addressData?.street || '-'}</h2>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <MapPin className="mt-1 text-gray-600" />
                <div>
                  <p className="text-xs text-gray-500">City</p>
                  <h2 className="text-base">{addressData?.city || '-'}</h2>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <Landmark className="mt-1 text-gray-600" />
                <div>
                  <p className="text-xs text-gray-500">Province</p>
                  <h2 className="text-base">{addressData?.state || '-'}</h2>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <LocateFixed className="mt-1 text-gray-600" />
                <div>
                  <p className="text-xs text-gray-500">Postal Code</p>
                  <h2 className="text-base">
                    {addressData?.postal_code || '-'}
                  </h2>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-lg border border-gray-200 shadow-sm">
            <CardHeader className="flex items-center gap-2 text-xl">
              <ReceiptText className="w-5 h-5" />
              Order Summary
            </CardHeader>
            <Separator />
            <CardContent className="py-6 space-y-4">
              <InfoRow label="Order ID" value={`#${orderDataStorage?.id}`} />
              <InfoRow
                label="Status"
                value={
                  <Badge
                    status={orderDataStorage?.status}
                    colorClass={getOrderStatusColor(orderDataStorage?.status)}
                  />
                }
              />
              <InfoRow
                label="Total Price"
                value={formatRp(orderDataStorage?.total_price)}
              />
              <Separator />
              <InfoRow
                label="Created At"
                value={formatDate(orderDataStorage?.created_at)}
              />
              <InfoRow
                label="Last Updated"
                value={formatDate(orderDataStorage?.updated_at)}
              />
            </CardContent>
          </Card>
        </div>
      </div>
      {/* button */}
      <div className="flex justify-end pt-8">
        <Button
          onClick={handleCheckout}
          disabled={isLoading}
          className={`cursor-pointer px-6 py-3 rounded-lg font-semibold transition ${
            isLoading ? 'bg-gray-400' : 'bg-black text-white hover:bg-gray-900'
          }`}
        >
          {isLoading ? 'Processing...' : 'Complete Checkout'}
        </Button>
      </div>
    </section>
  );
}

export default CheckoutInformations;
