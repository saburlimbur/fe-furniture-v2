/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
import { useState } from 'react';
import { Calendar, Clock, Package, Truck, Zap } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { ORDER_STATUS } from '@/constants/orderStatus';
import { SHIPPING_STATUS } from '@/constants/shippingStatus';
import useCreateShipping from '@/hooks/shipping/useCreateShipping';

const shippingOptions = [
  {
    id: 'regular',
    name: 'Pengiriman Reguler',
    description: 'Pengiriman standar dengan jaminan keamanan',
    cost: 15000,
    estimatedDays: '3-5 hari kerja',
    icon: <Truck className="h-5 w-5" />,
  },
  {
    id: 'express',
    name: 'Pengiriman Express',
    description: 'Pengiriman cepat untuk kebutuhan mendesak',
    cost: 25000,
    estimatedDays: '1-2 hari kerja',
    icon: <Zap className="h-5 w-5" />,
    popular: true,
  },
  {
    id: 'same-day',
    name: 'Same Day Delivery',
    description: 'Pengiriman di hari yang sama (area terbatas)',
    cost: 35000,
    estimatedDays: 'Hari ini',
    icon: <Clock className="h-5 w-5" />,
  },
];

function CheckoutShippingMethod() {
  const { createShipping } = useCreateShipping();
  const [selectedShipping, setSelectedShipping] = useState('express');

  const orderData = JSON.parse(localStorage.getItem('order_data'));
  const addressData = JSON.parse(localStorage.getItem('address_data'));

  const selectedOption = shippingOptions.find(
    option => option.id === selectedShipping,
  );

  const formatCurrency = amount => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
    }).format(amount);
  };

  const handleCreateShipping = async () => {
    try {
      await createShipping({
        order_id: orderData?.id,
        address_id: addressData?.id,
        shipping_cost: selectedOption.cost,
        shipping_date: new Date().toISOString().split('T')[0], // dari BE string
        status: SHIPPING_STATUS.Pending,
      });
    } catch (error) {
      console.error('error:', error.message);
      throw new Error();
    }
  };

  return (
    <div>
      <div className="flex flex-col gap-3">
        <div className="lg:col-span-2 space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Truck className="h-5 w-5" />
                Shipping Method
              </CardTitle>
              <CardDescription>
                Select one of the available shipping options below.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <RadioGroup
                value={selectedShipping}
                onValueChange={setSelectedShipping}
                className="space-y-4"
              >
                {shippingOptions.map(option => (
                  <div key={option.id} className="relative">
                    <Label
                      htmlFor={option.id}
                      className={`flex items-center space-x-4 rounded-lg border p-4 cursor-pointer transition-all hover:bg-accent ${
                        selectedShipping === option.id
                          ? 'border-primary bg-accent'
                          : ''
                      }`}
                    >
                      <RadioGroupItem value={option.id} id={option.id} />
                      <div className="flex items-center gap-3 flex-1">
                        <div className="flex-shrink-0 p-2 rounded-full bg-primary/10 text-primary">
                          {option.icon}
                        </div>
                        <div className="flex-1 space-y-1">
                          <div className="flex items-center gap-2">
                            <h3 className="font-medium">{option.name}</h3>
                            {option.popular && (
                              <Badge variant="secondary" className="text-xs">
                                Popular
                              </Badge>
                            )}
                          </div>
                          <p className="text-sm text-muted-foreground">
                            {option.description}
                          </p>
                          <div className="flex items-center gap-4 text-sm">
                            <span className="flex items-center gap-1">
                              <Calendar className="h-3 w-3" />
                              {option.estimatedDays}
                            </span>
                            <span className="font-medium text-primary">
                              {formatCurrency(option.cost)}
                            </span>
                          </div>
                        </div>
                      </div>
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Order Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2">
                  <span className="text-sm font-medium">Shipping Cost</span>
                  <span className="text-sm">
                    {selectedOption ? formatCurrency(selectedOption.cost) : '-'}
                  </span>
                </div>

                <div className="flex justify-between items-center py-2">
                  <span className="text-sm font-medium">
                    Estimated Delivery
                  </span>
                  <span className="text-sm">
                    {selectedOption ? selectedOption.estimatedDays : '-'}
                  </span>
                </div>

                <div className="flex justify-between items-center py-2">
                  <span className="text-sm font-medium">Status</span>

                  <div className="flex items-center gap-3">
                    <Badge variant="outline" className="text-xs py-2">
                      <Clock size={18} />
                      Awaiting Payment
                    </Badge>

                    <Badge className="bg-blue-100 text-blue-800 uppercase text-sm">
                      {ORDER_STATUS.PENDING}
                    </Badge>
                  </div>
                </div>
              </div>

              <CardFooter className="flex items-center justify-end gap-4 px-0 pt-5">
                <Button
                  onClick={handleCreateShipping}
                  className="bg-black text-white hover:bg-gray-800"
                  size="lg"
                >
                  Confirm Shipping Method
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
      </div>
    </div>
  );
}

export default CheckoutShippingMethod;
