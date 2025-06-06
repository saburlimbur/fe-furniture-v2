/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';

import Search from '../../elements/Search';

function ProductSectionMenu() {
  return (
    <nav className="flex items-center gap-5">
      <Search />
      <Link
        className="py-2 px-2 rounded-full border border-black text-xs"
        to="/category"
      >
        All Product
      </Link>

      <Link className="text-gray-500">Chair</Link>
      <Link className="text-gray-500">Table</Link>
      <Link className="text-gray-500">Bed</Link>
      <Link className="text-gray-500 underline">See All</Link>
    </nav>
  );
}

export default ProductSectionMenu;
