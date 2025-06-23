/* eslint-disable react/button-has-type */
import React, { useRef } from 'react';
import { MapPin, ShoppingCart, User } from 'lucide-react';

import { Card } from '@/components/ui/card';

import UserProfileAccount from './UserProfileAccount';
import UserProfileOrders from './UserProfileOrders';
import UserProfileShipping from './UserProfileShipping';

const menuItems = [
  { id: 'account', label: 'Account Details', icon: User },
  { id: 'orders', label: 'Order Summary', icon: ShoppingCart },
  { id: 'shipping', label: 'Shipping Info', icon: MapPin },
];

function UserProfileMenu() {
  const sectionRefs = {
    account: useRef(null),
    orders: useRef(null),
    shipping: useRef(null),
  };

  const scrollToSection = id => {
    const section = sectionRefs[id]?.current;
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="flex w-full gap-8">
      {/* Sidebar */}
      <aside className="w-64 bg-white border border-gray-200 rounded-lg p-4 shadow-sm h-fit sticky top-24">
        <h2 className="text-xl font-semibold text-gray-800 mb-6">My Profile</h2>
        <nav className="space-y-2">
          {menuItems.map(item => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="flex items-center w-full px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:bg-gray-100 transition-colors"
            >
              <item.icon className="w-4 h-4 mr-2" />
              {item.label}
            </button>
          ))}
        </nav>
      </aside>

      <main className="flex-1 space-y-8">
        <Card ref={sectionRefs.account}>
          <UserProfileAccount />
        </Card>

        <Card ref={sectionRefs.orders} className="p-6">
          <UserProfileOrders />
        </Card>

        <Card ref={sectionRefs.shipping} className="p-6">
          <UserProfileShipping />
        </Card>
      </main>
    </div>
  );
}

export default UserProfileMenu;
