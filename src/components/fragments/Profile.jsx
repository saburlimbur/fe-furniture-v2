import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Button from '../elements/Button';

function Profile() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative inline-block text-left z-50">
      <Button className="inline-flex justify-center w-full px-4 py-3 text-sm font-medium text-gray-700 border border-gray-100 rounded-lg">
        <div className="text-lg cursor-pointer flex items-center gap-2">
          <User className="text-lg cursor-pointer" />
          {/* <span>{user?.email || mitraData?.company_name}</span> */}
        </div>
      </Button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg z-50">
          <div
            className="py-1 z-30"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <div className="flex flex-col border-b-2  px-4 py-2 gap-2">
              <p className="text-xs text-gray-700">Signed in as</p>
              {/* <h3>{user?.email}</h3> */}
            </div>

            <Link
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              role="menuitem"
            >
              View Profile
            </Link>
            <Button
              className="w-full text-left block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              role="menuitem"
            >
              Logout
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Profile;
