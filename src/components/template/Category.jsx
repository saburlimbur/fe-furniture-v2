/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShoppingBag, Store, Users } from 'lucide-react';

import useGetCategoryById from '@/hooks/category/useGetCategoryById';

import useGetAllCategorys from '../../hooks/category/useGetAllCategorys';
import CategoryForm from '../fragments/Category/CategoryForm';
import CategoryItem from '../fragments/Category/CategoryItem';

export default function Category() {
  const { id } = useParams();
  const { categoryId, isLoading, isError } = useGetCategoryById(id);
  const { allCategorys } = useGetAllCategorys();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleCreateCategory = () => {
    closeModal();
  };

  console.log('allCategorys:', allCategorys);
  console.log('categoryId:', categoryId);

  return (
    <section className="py-16 px-4 md:px-8 lg:px-12 bg-gradient-to-b from-white to-gray-50 rounded-2xl">
      {/* stats */}
      <div className="max-w-6xl mx-auto mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-3 gap-8"
        >
          <div className="bg-white rounded-xl shadow-sm p-6 flex items-center space-x-4 border border-gray-100 hover:border-gray-200 transition-all">
            <div className="h-12 w-12 rounded-full bg-rose-50 flex items-center justify-center flex-shrink-0">
              <ShoppingBag className="h-6 w-6 text-rose-500" />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-gray-800">30+</h2>
              <p className="text-gray-500 mt-1">Products Available</p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 flex items-center space-x-4 border border-gray-100 hover:border-gray-200 transition-all">
            <div className="h-12 w-12 rounded-full bg-emerald-50 flex items-center justify-center flex-shrink-0">
              <Users className="h-6 w-6 text-emerald-500" />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-gray-800">100+</h2>
              <p className="text-gray-500 mt-1">Happy Customers</p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 flex items-center space-x-4 border border-gray-100 hover:border-gray-200 transition-all">
            <div className="h-12 w-12 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
              <Store className="h-6 w-6 text-blue-500" />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-gray-800">10+</h2>
              <p className="text-gray-500 mt-1">Product Categories</p>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="max-w-3xl mx-auto text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 tracking-tight">
            Product Categories
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Discover our carefully selected product categories to complete your
            home with a touch of modern and minimalist style.
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="grid grid-cols-3 gap-8 justify-between">
          <CategoryItem />
        </div>
      </motion.div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black/20 bg-opacity-50 flex justify-center items-center z-50"
          onClick={closeModal}
        >
          <div
            className="bg-white w-[90%] md:w-[500px] max-h-[90%] overflow-y-auto rounded-xl p-6"
            onClick={e => e.stopPropagation()}
          >
            <h3 className="text-2xl font-semibold mb-6">Create Category</h3>
            <CategoryForm onSubmit={handleCreateCategory} />
          </div>
        </div>
      )}
    </section>
  );
}
