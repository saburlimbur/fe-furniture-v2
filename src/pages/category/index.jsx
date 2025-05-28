import React from 'react';
import { Link, useParams } from 'react-router-dom';

import useGetCategoryById from '../../hooks/category/useGetCategoryById';

function CategoryDetails() {
  const { id } = useParams();
  const { categoryId, isLoading, isError } = useGetCategoryById(id);

  console.log('categoryId:', categoryId);

  const bgUrl =
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr7fwCssN3SzHROF_yVanOscPbAXwTLxf_9w&s';

  return (
    <section className="max-w-[1400px] mx-auto p-4 pt-12 min-h-screen">
      <div
        className="relative h-[450px] rounded-2xl overflow-hidden"
        style={{
          backgroundImage: `url(${bgUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30" />

        <div className="relative z-10 flex flex-col justify-center items-start h-full px-10 text-white">
          <h1 className="text-7xl font-extrabold drop-shadow-lg">
            {categoryId?.category_name}
          </h1>
          <p className="mt-3 text-lg font-light drop-shadow-sm">
            Explore our premium selection of{' '}
            <span className="font-medium">
              {categoryId?.category_name.toLowerCase()}'s
            </span>
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
        {categoryId?.products?.map(product => (
          <Link
            to={`/product/${product.id}`}
            key={product.id}
            className="border rounded-lg overflow-hidden shadow hover:shadow-md transition w-full h-auto flex flex-col justify-between"
          >
            <img
              src={product.image_url}
              alt={product.name}
              className="w-full object-cover p-3"
            />
            <div className="p-4 flex flex-col h-auto justify-between">
              <div>
                <h2 className="text-lg font-semibold">{product.name}</h2>
                <p className="text-sm text-gray-600 line-clamp-2">
                  {product.description}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default CategoryDetails;
