/* eslint-disable arrow-parens */
/* eslint-disable no-nested-ternary */
/* eslint-disable jsx-a11y/no-static-element-interactions */

import { Check, CreditCard, Info, Package, Truck, User } from 'lucide-react';

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const steps = [
  {
    id: 1,
    name: 'User Information and Address',
    icon: User,
    description: 'Personal details',
  },
  {
    id: 2,
    name: 'Order Items',
    icon: Package,
    description: 'Confirm your order items',
  },
  {
    id: 3,
    name: 'Shipping Method',
    icon: Truck,
    description: 'Delivery options',
  },
  {
    id: 4,
    name: 'Payment Method',
    icon: CreditCard,
    description: 'Payment details',
  },
  {
    id: 5,
    name: 'Checkouts Informations',
    icon: Info,
    description: 'Overview & validation',
  },
];

function CheckoutSteps({ currentStep, setCurrentStep }) {
  const handleStepClick = stepId => {
    if (stepId <= currentStep) {
      setCurrentStep(stepId);
    }
  };

  return (
    <div className="w-full">
      <Card className="py-6 rounded-xl border border-gray-100 bg-white">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-semibold text-gray-800">
            Checkout
          </CardTitle>
          <CardDescription className="text-sm text-gray-500">
            Complete your purchase in {steps.length} steps
          </CardDescription>
        </CardHeader>

        {/* Connector Line */}
        <div className="relative">
          <div className="absolute top-6 left-6 right-6 h-0.5 bg-gray-200 hidden md:block z-0">
            <div
              className="h-full bg-blue-500 transition-all duration-500 ease-out"
              style={{
                width: `${((currentStep - 1) / (steps.length - 1)) * 100}%`,
              }}
            />
          </div>

          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-4 z-10 relative">
            {steps.map(step => {
              const Icon = step.icon;
              const isCompleted = currentStep > step.id;
              const isCurrent = currentStep === step.id;
              const isClickable = step.id <= currentStep;

              return (
                <div
                  key={step.id}
                  className={`relative flex flex-col items-center text-center ${
                    isClickable ? 'cursor-pointer' : 'cursor-default'
                  }`}
                  onClick={() => handleStepClick(step.id)}
                >
                  {/* Icon Bulat */}
                  <div
                    className={`flex items-center justify-center w-10 h-10 rounded-full border-2 transition-all duration-300
                      ${
                        isCompleted
                          ? 'bg-blue-600 text-white border-blue-600'
                          : isCurrent
                            ? 'bg-white border-blue-500 text-blue-600'
                            : 'bg-white border-gray-300 text-gray-400'
                      }`}
                  >
                    {isCompleted ? (
                      <Check className="w-4 h-4" />
                    ) : (
                      <Icon className="w-4 h-4" />
                    )}
                  </div>

                  {/* Text */}
                  <div className="mt-3 space-y-1">
                    <p
                      className={`text-xs font-medium ${isCurrent ? 'text-blue-600' : 'text-gray-500'}`}
                    >
                      Step {step.id}
                    </p>
                    <p className="text-sm font-semibold text-gray-700">
                      {step.name}
                    </p>
                    <p className="text-xs text-gray-400">{step.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Card>
    </div>
  );
}

export default CheckoutSteps;
