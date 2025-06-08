import React from 'react';
import { CheckCircle } from 'lucide-react';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

function CheckoutPaymentModalSucces({ open, onClose }) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="w-full sm:max-w-2xl h-[50vh] bg-white text-black p-6 pt-10 flex flex-col items-center justify-evenly rounded-xl shadow-xl">
        <CheckCircle className="text-green-600 w-16 h-16 mb-4" />
        <DialogHeader>
          <DialogTitle className="text-center text-2xl font-bold">
            Payment Successful!
          </DialogTitle>
        </DialogHeader>
        <p className="text-gray-600 mt-2 text-center">
          Thank you! Your payment has been verified.
        </p>
      </DialogContent>
    </Dialog>
  );
}

export default CheckoutPaymentModalSucces;
