/* eslint-disable react/no-array-index-key */
/* eslint-disable indent */
import React from 'react';
import { CheckCircle, Dot } from 'lucide-react';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

function NoItemFound() {
  return (
    <Card className="border-none shadow-none p-0">
      <CardContent className="space-y-8 px-0">
        <CardTitle>
          <h2 className="text-2xl font-bold text-gray-900">My Shippings</h2>
        </CardTitle>
        <CardDescription className="p-6 text-center text-sm text-gray-500">
          No Shipping Found
        </CardDescription>
      </CardContent>
    </Card>
  );
}

function UserProfileShipping() {
  const shippingDataStorage = JSON.parse(localStorage.getItem('shipping_data'));
  const userDataStorage = JSON.parse(localStorage.getItem('furniture_user'));

  if (!shippingDataStorage) {
    return <NoItemFound />;
  }

  const courier = 'JNE';
  const serviceCode = 'REG';
  const shippingDate = shippingDataStorage?.shipping_date
    ? new Date(shippingDataStorage.shipping_date).toLocaleDateString('id-ID', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
      })
    : '-';

  const trackingNumber = 'JNE20250617001';

  const timeline = [
    {
      title: 'Paket akan dikirim ke alamat penerima',
      date: '17 Jun 2025, 12:00',
      isComplete: false,
    },
    {
      title: 'Paket telah sampai di DC Cakung',
      date: '16 Jun 2025, 21:00',
      isComplete: true,
    },
    {
      title: `Status saat ini: ${shippingDataStorage?.status || '-'}`,
      date: new Date(shippingDataStorage?.created_at).toLocaleDateString(
        'id-ID',
        {
          day: '2-digit',
          month: 'short',
          year: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
        },
      ),
      isComplete: true,
    },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900">My Shippings</h2>
      <div className="w-full flex gap-5">
        <div className="w-1/2 border-r border-gray-200">
          <Card className="border-none shadow-none">
            <CardHeader className="space-y-2 px-4">
              <div className="flex items-center justify-between">
                <p className="text-sm text-gray-400">Kurir</p>
                <p className="text-sm font-medium text-gray-800">{courier}</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-sm text-gray-400">Service Code</p>
                <p className="text-sm font-medium text-gray-800">
                  {serviceCode}
                </p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-sm text-gray-400">Estimasi Pengiriman</p>
                <p className="text-sm font-medium text-gray-800">
                  {shippingDate}
                </p>
              </div>
            </CardHeader>

            <CardContent className="py-4 border-y border-gray-200 px-4">
              <div className="flex items-center justify-between">
                <p className="text-sm text-gray-400">Nomor Resi</p>
                <p className="text-sm font-semibold text-gray-800">
                  {trackingNumber}
                </p>
              </div>
            </CardContent>

            <CardFooter className="border-gray-200 px-4">
              <div className="flex items-center justify-between w-full">
                <p className="text-sm text-gray-400">Nama Pembeli</p>
                <p className="text-sm font-medium text-gray-800">
                  {userDataStorage?.name}
                </p>
              </div>
            </CardFooter>
          </Card>
        </div>

        {/* Right Side Timeline */}
        <div className="w-1/2">
          <Card className="border-none shadow-none h-full">
            <CardHeader className="px-6">
              <h3 className="text-base font-semibold text-gray-800 mb-2">
                Status Pengiriman
              </h3>
            </CardHeader>
            <CardContent className="flex flex-col gap-4 px-6 pb-6">
              {timeline.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="mt-1">
                    {item.isComplete ? (
                      <CheckCircle className="w-4 h-4 text-green-600" />
                    ) : (
                      <Dot className="w-4 h-4 text-gray-400" />
                    )}
                  </div>
                  <div>
                    <p className="text-sm text-gray-800 font-medium">
                      {item.title}
                    </p>
                    <p className="text-xs text-gray-500">{item.date}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default UserProfileShipping;
