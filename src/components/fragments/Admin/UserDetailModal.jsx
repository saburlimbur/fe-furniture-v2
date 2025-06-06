import React, { useState } from 'react';
import { CreditCard, MapPin, User, X } from 'lucide-react';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { DialogContent } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import useGetUserById from '@/hooks/users/useGetUserById';

const menuItems = [
  { id: 'account', label: 'Account Details', icon: User },
  { id: 'shipping', label: 'Shipping Address', icon: MapPin },
  { id: 'payment', label: 'Payment Methods', icon: CreditCard },
];

function UserDetailModal({ userId }) {
  const [activeTab, setActiveTab] = useState('account');
  const { user, isLoading, isError } = useGetUserById(userId);

  if (isLoading || !user) {
    return (
      <DialogContent className="w-full sm:max-w-md md:max-w-lg bg-white">
        <div className="flex items-center justify-center h-64 text-black">
          <div className="text-center">
            <div className="animate-spin rounded-full h-10 w-10 border-2 border-gray-300 border-t-black mx-auto mb-3" />
            <p className="text-sm font-medium">Loading user data...</p>
          </div>
        </div>
      </DialogContent>
    );
  }

  if (isError) {
    return (
      <DialogContent className="w-full sm:max-w-md md:max-w-lg bg-white">
        <div className="flex items-center justify-center h-64 text-black">
          <div className="text-center">
            <div className="w-14 h-14 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <X className="h-6 w-6 text-gray-400" />
            </div>
            <p className="font-semibold mb-1">Failed to load user data</p>
            <p className="text-sm text-gray-500">Please try again later.</p>
          </div>
        </div>
      </DialogContent>
    );
  }

  return (
    <DialogContent className="w-full sm:max-w-3xl bg-white text-black p-0 overflow-hidden">
      <div className="flex items-center gap-4 px-6 py-5 border-b border-gray-200">
        <Avatar className="h-14 w-14">
          <AvatarImage
            src={user?.avatar || 'https://github.com/shadcn.png'}
            alt="User Avatar"
          />
          <AvatarFallback className="bg-black text-white text-lg font-semibold">
            {user?.name?.[0] || 'U'}
          </AvatarFallback>
        </Avatar>
        <div>
          <h2 className="text-xl font-bold">{user?.name}</h2>
          <p className="text-sm text-gray-500">{user?.email}</p>
        </div>
      </div>

      <div className="flex h-[400px]">
        <aside className="w-1/3 bg-gray-50 border-r border-gray-200 p-4 space-y-2">
          {menuItems.map(({ id, label, icon: Icon }) => (
            <Button
              variant="outline"
              key={id}
              onClick={() => setActiveTab(id)}
              className={`w-full flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition text-left ${
                activeTab === id
                  ? 'bg-black text-white'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <Icon className="h-4 w-4" />
              {label}
            </Button>
          ))}
        </aside>

        <section className="w-3/4 p-6 overflow-y-auto">
          {activeTab === 'account' && (
            <>
              <h3 className="text-lg font-semibold mb-4">
                Personal Information
              </h3>
              <div className="grid grid-cols-2 gap-6 mb-4">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input readOnly id="name" defaultValue={user?.name || ''} />
                </div>
                <div>
                  <Label htmlFor="role">Role</Label>
                  <Input readOnly id="role" defaultValue={user?.role || ''} />
                </div>
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input readOnly id="email" defaultValue={user?.email || ''} />
              </div>
            </>
          )}

          {activeTab === 'shipping' && (
            <>
              <h3 className="text-lg font-semibold mb-4">
                Personal Information
              </h3>
              <div className="grid grid-cols-2 gap-6 mb-4">
                <div className="flex flex-col gap-2">
                  <Label htmlFor="name">Name</Label>
                  <Input readOnly id="name" defaultValue={user?.name || ''} />
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="role">Role</Label>
                  <Input readOnly id="role" defaultValue={user?.role || ''} />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="email">Email</Label>
                <Input readOnly id="email" defaultValue={user?.email || ''} />
              </div>
            </>
          )}

          {activeTab === 'payment' && (
            <>
              <h3 className="text-lg font-semibold mb-4">
                Personal Information
              </h3>
              <div className="grid grid-cols-2 gap-6 mb-4">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input readOnly id="name" defaultValue={user?.name || ''} />
                </div>
                <div>
                  <Label htmlFor="role">Role</Label>
                  <Input readOnly id="role" defaultValue={user?.role || ''} />
                </div>
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input readOnly id="email" defaultValue={user?.email || ''} />
              </div>
            </>
          )}
        </section>
      </div>
    </DialogContent>
  );
}

export default UserDetailModal;
