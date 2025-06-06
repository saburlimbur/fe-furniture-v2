/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';

import { Avatar, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import NavMenu from '../elements/NavMenu';

function Navbar() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('furniture_token');
    const userData = localStorage.getItem('furniture_user');

    if (token && userData) {
      setIsLoggedIn(true);
      setUser(JSON.parse(userData));
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('furniture_token');
    localStorage.removeItem('furniture_user');
    localStorage.removeItem('cart_id');
    localStorage.removeItem('cart_data');
    localStorage.removeItem('address_data');

    setTimeout(() => {
      toast.success('Logout Successfully');
      navigate('/login');
    }, 800);
  };

  return (
    <div className="border-b-gray-300 relative pb-28 flex justify-center z-[50]">
      <header className="max-w-[1500px] w-full mx-auto py-2 fixed top-5 left-0 right-0 rounded-2xl border border-gray-100 bg-white">
        <div className="flex items-center justify-between px-6">
          <Link to="/">
            <img src="/logo.png" className="w-[100px] h-24 object-cover" />
          </Link>

          <NavMenu />

          <div className="flex items-center ml-auto gap-5">
            {isLoggedIn && user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <div className="cursor-pointer">
                    <Avatar>
                      <AvatarImage
                        src="https://github.com/shadcn.png"
                        alt="@shadcn"
                      />
                    </Avatar>
                  </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-64 z-[100]">
                  <DropdownMenuLabel className="flex flex-col gap-1">
                    <span className="text-sm font-medium">{user.name}</span>
                    <span className="text-xs text-muted-foreground">
                      {user.email}
                    </span>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                  <DropdownMenuItem>Billing</DropdownMenuItem>
                  <DropdownMenuItem>Settings</DropdownMenuItem>
                  <DropdownMenuItem>New Team</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleLogout}>
                    Log out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <button
                className="px-6 py-3 border rounded-md border-gray-200 cursor-pointer"
                onClick={() => navigate('/login')}
              >
                Login
              </button>
            )}
          </div>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
