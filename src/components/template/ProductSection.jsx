import React, { useState } from 'react';
import { Plus } from 'lucide-react';

import useGetAllProducts from '../../hooks/product/useGetAllProducts';
import ProductForm from '../fragments/Products/ProductForm';
import ProductItem from '../fragments/Products/ProductItem';
import ProductSectionMenu from '../fragments/Products/ProductSectionMenu';

function ProductSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleCreateProduct = () => {
    closeModal();
  };

  return (
    <section className="flex flex-col w-full gap-10 py-16">
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
        <ProductItem />

        {/* <div
          className="border border-gray-300 rounded-lg p-6 bg-white cursor-pointer w-full h-full"
          onClick={openModal}
        >
          <div className="w-full py-16 border-2 border-dashed border-gray-300 rounded-lg flex flex-col justify-center items-center gap-5 hover:border-orange-600 transition-colors">
            <Plus className="text-gray-500 text-6xl" />
            <h3 className="text-sm font-base text-gray-400">Create Product</h3>
          </div>
        </div> */}
      </div>

      {/* {isModalOpen && (
        <div
          className="fixed inset-0 bg-black/20 bg-opacity-50 flex justify-center items-center z-50"
          onClick={closeModal}
        >
          <div
            className="bg-white w-[90%] max-w-2xl max-h-[90%] overflow-y-auto rounded-xl p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-2xl font-semibold mb-6">Create Product</h3>
            <ProductForm onSubmit={handleCreateProduct} />
          </div>
        </div>
      )} */}
    </section>
  );
}

export default ProductSection;
