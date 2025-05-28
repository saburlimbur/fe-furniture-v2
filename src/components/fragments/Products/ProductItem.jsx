import React from 'react';
import { Link } from 'react-router-dom';

import useGetAllProducts from '../../../hooks/product/useGetAllProducts';

function ProductItem() {
  const { allProducts, isLoading, isError } = useGetAllProducts();

  return (
    <>
      {allProducts?.map(product => (
        <Link
          to={`/product/${product?.id}`}
          key={product.id}
          className="border rounded-lg overflow-hidden shadow hover:shadow-md transition w-full flex flex-col h-auto justify-between"
        >
          <div>
            <img
              src={product.image_url}
              alt={product.name}
              className="w-full object-cover p-3"
            />
          </div>
          <div className="p-4 flex flex-col">
            <div>
              <h2 className="text-lg font-semibold">{product.name}</h2>
              <p className="text-sm text-gray-600 line-clamp-2">
                {product.description}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </>
  );
}

export default ProductItem;
