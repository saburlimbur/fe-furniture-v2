import React from 'react';
import { Search } from 'lucide-react';

import Input from './Input';

function SearchElement() {
  return (
    <div className="flex items-center border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-200 transition duration-200">
      <Search size={16} className="text-gray-500 mr-2" />
      <Input
        className="flex-grow py-2 px-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none"
        type="search"
        placeholder="Search"
      />
    </div>
  );
}

export default SearchElement;
