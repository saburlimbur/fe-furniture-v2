/* eslint-disable no-unused-vars */
/* eslint-disable no-alert */
import React from 'react';
import Barcode from 'react-barcode';
import { ArrowRight, Copy, QrCode } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';

function CheckoutPaymentModalBarcode({ open, onClose, method, amount }) {
  const paymentData = JSON.parse(localStorage.getItem('payment_data'));
  const barcodeValue = `PAYMENT|${method}|${paymentData?.id}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(barcodeValue);
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent
        className="w-full sm:max-w-2xl h-[50vh] bg-white text-black p-6 pt-10 flex flex-col items-center justify-evenly rounded-xl shadow-xl"
        style={{ zIndex: 100 }}
      >
        <div className="absolute -top-6 bg-white p-3 rounded-full border shadow">
          <QrCode />
        </div>

        <DialogHeader className="text-center flex flex-col items-center">
          <DialogTitle className="text-4xl font-extrabold tracking-tight">
            Scan QR Code
          </DialogTitle>
          <p className="text-base font-medium">
            Use your phone to scan and verify payment
          </p>
        </DialogHeader>

        <div className="w-full flex justify-center my-6">
          <Barcode
            value={barcodeValue}
            width={2.5}
            height={100}
            displayValue={false}
            background="#fff"
            lineColor="#000"
            className="max-w-[400px] w-full flex"
          />
        </div>

        <div className="w-full flex flex-col items-center gap-2 mb-6">
          <p className="text-sm uppercase font-semibold tracking-wide">
            Or enter the code manually
          </p>
          <div className="flex w-full max-w-md border border-black rounded-md overflow-hidden flex justify-center items-center">
            <Input
              readOnly
              value={barcodeValue}
              className="flex-grow text-center font-mono text-black bg-white border-none focus:ring-0 focus:outline-none"
            />
            <Button
              variant="outline"
              size="icon"
              className="text-black hover:bg-black hover:text-white transition m-2"
              onClick={handleCopy}
              aria-label="Copy payment code"
            >
              <Copy className="w-5 h-5" />
            </Button>
          </div>
        </div>

        <Button
          className="w-full cursor-pointer h-[50px]"
          size="lg"
          onClick={() => alert('Hello')}
        >
          Verify Payment
          <ArrowRight className="ml-2 w-4 h-4" />
        </Button>
      </DialogContent>
    </Dialog>
  );
}

export default CheckoutPaymentModalBarcode;
