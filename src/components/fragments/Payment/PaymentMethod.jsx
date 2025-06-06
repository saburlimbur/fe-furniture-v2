/* eslint-disable jsx-a11y/alt-text */
import { useState } from 'react';

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const bank = [
  {
    id: 1,
    name: 'SIMULACRA STUDIO',
    logo: 'https://ver02.rumahpiatu.org/wp-content/uploads/2020/04/logo-mandiri.png',
    nrk: 123456789,
  },
  {
    id: 2,
    name: 'SIMULACRA STUDIO',
    logo: 'https://w7.pngwing.com/pngs/561/1/png-transparent-bank-central-asia-logo-bca-finance-business-bank-blue-cdr-text.png',
    nrk: 987654321,
  },
];

const cardCredit = [
  {
    id: 1,
    name: 'Visa Platinum',
    number: '4111 1111 1111 1111',
    expiry: '12/25',
    holder: 'FUFUFAFA Company',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png',
    background: 'bg-gradient-to-r from-blue-500 to-blue-300',
  },
  {
    id: 2,
    name: 'MasterCard Gold',
    number: '5555 5555 5555 4444',
    expiry: '09/26',
    holder: 'FUFUFAFA Company',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg',
    background: 'bg-gradient-to-r from-yellow-500 to-yellow-300',
  },
];

const eWallets = [
  {
    id: 1,
    name: 'GoPay',
    accountNumber: '0812-3456-7890',
    company: 'FUFUFAFA Company',
    logo: 'https://static.vecteezy.com/system/resources/previews/028/766/371/non_2x/gopay-payment-icon-symbol-free-png.png',
    background: 'bg-gradient-to-r from-blue-500 to-blue-300',
  },
  {
    id: 2,
    name: 'OVO',
    accountNumber: '0812-9876-5432',
    company: 'FUFUFAFA Company',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlbLfNtav8cKPqxoNPiz1e31_mgsVAb0ze2daTvNWCDvToYVN6Oc0tdR8efBL1CwR7nak&usqp=CAU',
    background: 'bg-gradient-to-r from-purple-500 to-purple-300',
  },
];

export function BankTransfer() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      {bank.map(item => (
        <Card
          key={item.id}
          onClick={() => setSelected(item.id)}
          className={`cursor-pointer flex items-center justify-center gap-5 p-4 border ${
            selected === item.id
              ? 'border-yellow-400 border-4'
              : 'border-gray-200'
          }`}
        >
          <CardHeader className="w-full">
            <img src={item.logo} className="w-24 h-16 object-cover" />
          </CardHeader>
          <div className="flex flex-col gap-2">
            <CardContent>
              <CardTitle className="text-md font-semibold text-gray-800">
                {item.name}
              </CardTitle>
            </CardContent>
            <CardFooter>
              <p className="text-sm text-gray-600 font-mono">{item.nrk}</p>
            </CardFooter>
          </div>
        </Card>
      ))}
    </div>
  );
}

export function CreditCards() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {cardCredit.map(card => (
        <Card
          key={card.id}
          onClick={() => setSelected(card.id)}
          className={`cursor-pointer text-white p-6 ${card.background} ${
            selected === card.id ? 'border-yellow-400 border-4' : ''
          }`}
        >
          <CardHeader className="flex justify-between items-center mb-4">
            <CardTitle>{card.name}</CardTitle>
            <img src={card.logo} className="w-12 h-12 object-contain" />
          </CardHeader>
          <CardContent className="text-xl font-mono tracking-widest mb-4">
            {card.number}
          </CardContent>
          <CardFooter className="flex justify-between text-sm">
            <div>
              <p className="uppercase text-gray-200">Card Holder</p>
              <p>{card.holder}</p>
            </div>
            <div>
              <p className="uppercase text-gray-200">Expires</p>
              <p>{card.expiry}</p>
            </div>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}

export function EWallet() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {eWallets.map(wallet => (
        <Card
          key={wallet.id}
          onClick={() => setSelected(wallet.id)}
          className={`cursor-pointer text-white p-6 ${wallet.background} ${
            selected === wallet.id ? 'border-yellow-400 border-4' : ''
          }`}
        >
          <CardHeader className="flex justify-between items-center mb-4">
            <CardTitle>{wallet.name}</CardTitle>
            <img
              src={wallet.logo}
              className="w-12 h-12 rounded-full object-contain"
            />
          </CardHeader>
          <CardContent>
            <p className="uppercase text-gray-200 text-sm">Account Number</p>
            <p className="text-xl font-bold">{wallet.accountNumber}</p>
          </CardContent>
          <CardFooter className="mt-4">
            <p className="text-sm">{wallet.company}</p>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}

export function CashOnDelivery() {
  return (
    <Card className="p-6 bg-white border border-gray-200">
      <CardHeader>
        <CardTitle className="text-2xl text-gray-800">
          Cash On Delivery (COD)
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <h3 className="text-lg font-medium text-gray-700">Payment Method</h3>
          <p className="text-gray-600">
            Please prepare the exact amount in cash to hand over to the courier
            upon delivery.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-medium text-gray-700">
            Delivery Instructions
          </h3>
          <p className="text-gray-600">
            Ensure someone is available at the delivery address to receive the
            order and make the payment.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-medium text-gray-700">
            Customer Support
          </h3>
          <p className="text-gray-600">
            If you have any questions or concerns, please reach out to our
            support team at <strong>E-Furniture</strong>:
          </p>
          <p className="text-gray-800 font-semibold">📞 +62 812-3456-7890</p>
          <p className="text-gray-800 font-semibold">
            ✉️ support@e-furniture.com
          </p>
          <p className="text-gray-600 mt-2">
            We are available Monday to Friday, 9:00 AM - 6:00 PM.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
