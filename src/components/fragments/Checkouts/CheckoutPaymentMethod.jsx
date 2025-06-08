/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { ORDER_STATUS } from '@/constants/orderStatus';
import PAYMENT_STATUS from '@/constants/paymentStatus';
import useUpdateOrder from '@/hooks/order/useUpdateOrder';
import useCreatePayment from '@/hooks/payment/useCreatePayment';

import {
  BankTransfer,
  CashOnDelivery,
  CreditCards,
  EWallet,
} from '../Payment/PaymentMethod';

import CheckoutPaymentModalBarcode from './CheckoutPaymentModalBarcode';
import CheckoutPaymentModalSucces from './CheckoutPaymentModalSucces';

const paymentOptions = [
  { id: 'bank', label: 'Bank Transfer' },
  { id: 'credit', label: 'Credit Card' },
  { id: 'ewallet', label: 'E-Wallet' },
  { id: 'cod', label: 'Cash On Delivery' },
];

function CheckoutPaymentMethod() {
  const [selectedMethod, setSelectedMethod] = useState('ewallet');
  const [paymentConfirmed, setPaymentConfirmed] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [amount, setAmount] = useState(0);

  const { createPayment } = useCreatePayment();
  const { updateOrder } = useUpdateOrder();

  const paymentData = JSON.parse(localStorage.getItem('payment_data'));

  const mapToPrismaEnum = {
    bank: 'Bank_Transfer',
    credit: 'Credit_Card',
    ewallet: 'E_Wallet',
    cod: 'Cash_on_Delivery',
  };

  const handleCreatePayment = async () => {
    const orderData = JSON.parse(localStorage.getItem('order_data'));
    const userData = JSON.parse(localStorage.getItem('furniture_user'));
    const cartData = JSON.parse(localStorage.getItem('cart_data'));

    if (!orderData?.id || !orderData?.total_price) {
      console.error('Data order tidak lengkap');
      return;
    }

    try {
      await createPayment({
        order_id: orderData?.id,
        payment_method: mapToPrismaEnum[selectedMethod],
        payment_status: PAYMENT_STATUS.Pending,
        payment_date: new Date().toISOString().split('T')[0],
        amount: orderData?.total_price,
      });

      // hanya update status order nya
      await updateOrder({
        id: orderData?.id,
        user_id: userData?.id,
        cart_id: cartData?.id,
        total_price: orderData?.total_price,
        status: ORDER_STATUS.PROCESSING,
      });

      setAmount(orderData?.total_price);

      setPaymentConfirmed(true); // triger state untuk modal barcode
      if (selectedMethod !== 'cod') {
        setShowModal(true);
      }
    } catch (error) {
      console.error('error:', error || error.message);
    }
  };

  return (
    <>
      <Card className="max-w-4xl mx-auto p-6">
        <CardHeader className="mb-4">
          <CardTitle className="text-2xl text-black font-semibold">
            Payment Method
          </CardTitle>
          <p className="text-sm text-gray-500">
            Select one of the payment methods available below.
          </p>
        </CardHeader>

        <CardContent>
          <RadioGroup
            value={selectedMethod}
            onValueChange={setSelectedMethod}
            className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6"
          >
            {paymentOptions.map(option => (
              <div
                key={option.id}
                className={`flex items-center justify-between border rounded-md p-4 cursor-pointer transition-all hover:bg-gray-50 ${
                  selectedMethod === option.id
                    ? 'border-black bg-gray-100'
                    : 'border-gray-300'
                }`}
                onClick={() => setSelectedMethod(option.id)}
              >
                <div className="flex items-center gap-3">
                  <RadioGroupItem
                    id={option.id}
                    value={option.id}
                    checked={selectedMethod === option.id}
                    onChange={() => setSelectedMethod(option.id)}
                  />
                  <Label
                    htmlFor={option.id}
                    className="font-medium text-gray-800"
                  >
                    {option.label}
                  </Label>
                </div>
              </div>
            ))}
          </RadioGroup>

          <div className="transition-all duration-300">
            {selectedMethod === 'bank' && <BankTransfer />}
            {selectedMethod === 'credit' && <CreditCards />}
            {selectedMethod === 'ewallet' && <EWallet />}
            {selectedMethod === 'cod' && <CashOnDelivery />}
          </div>
        </CardContent>

        <CardFooter className="flex items-center justify-end gap-4 px-0 pt-5">
          {paymentData ? (
            <Button
              onClick={() => setShowModal(true)}
              className="bg-black text-white hover:bg-gray-800"
              size="lg"
            >
              Show Payment Barcode
            </Button>
          ) : (
            <Button
              onClick={handleCreatePayment}
              className="bg-black text-white hover:bg-gray-800"
              size="lg"
            >
              Confirm Payment Method
            </Button>
          )}
          <Button
            variant="outline"
            className="border-gray-300 text-black hover:bg-gray-50"
            size="lg"
          >
            Cancel
          </Button>
        </CardFooter>
      </Card>

      <CheckoutPaymentModalBarcode
        open={showModal}
        onClose={() => setShowModal(false)}
        method={
          paymentOptions.find(opt => opt.id === selectedMethod)?.label || ''
        }
        amount={amount}
        onVerifySuccess={() => {
          setShowModal(false);
          setShowSuccessModal(true);
        }}
      />

      <CheckoutPaymentModalSucces
        open={showSuccessModal}
        onClose={() => setShowSuccessModal(false)}
      />
    </>
  );
}

export default CheckoutPaymentMethod;
