import React from 'react';

import ProductItem from '@/components/fragments/Products/ProductItem';
import ProductSectionMenu from '@/components/fragments/Products/ProductSectionMenu';

function ProductsPages() {
  return (
    <section className="max-w-[1400px] mx-auto p-4 pt-12 min-h-screen space-y-10">
      <div
        className="relative h-[500px] rounded-2xl overflow-hidden"
        style={{
          backgroundImage:
            'url(https://img.freepik.com/free-photo/empty-modern-room-with-furniture_23-2149178345.jpg?semt=ais_hybrid&w=740)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 flex flex-col justify-center items-start h-full px-10 text-white">
          <h1 className="text-7xl font-bold drop-shadow-md">Our Products</h1>
          <p className="mt-2 text-lg text-white/80">
            Discover furniture that fits your lifestyle and budget.
          </p>
        </div>
      </div>

      <header className="flex items-center justify-between">
        <div className="flex justify-start items-start flex-col gap-2">
          <div className="bg-gray-200 py-2 px-3 rounded-full">
            <h4 className="text-orange-600 font-semibold">
              Checkout our Product
            </h4>
          </div>
          <h1 className="text-3xl font-semibold">Must have product</h1>
        </div>
        <ProductSectionMenu />
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
        <ProductItem />
      </div>
    </section>
  );
}

export default ProductsPages;
