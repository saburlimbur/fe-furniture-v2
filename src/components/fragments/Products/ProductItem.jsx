/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-useless-fragment */
import React from 'react';
import { Link } from 'react-router-dom';

import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { formatRp } from '@/utils/Formatted';

import useGetAllProducts from '../../../hooks/product/useGetAllProducts';

import ProductSkeleton from './ProductSkeleton';

function ProductItem() {
  const { allProducts, isLoading, isError } = useGetAllProducts();

  return (
    <>
      {isLoading ? (
        <ProductSkeleton />
      ) : (
        allProducts?.map(product => (
          <Link to={`/product/${product?.id}`} key={product.id}>
            <Card className="border rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all bg-white flex flex-col h-full">
              <img
                src={product.image_url}
                alt={product.name}
                className="w-full h-60 object-cover"
              />
              <div className="p-4 flex flex-col justify-between flex-1">
                <div>
                  <h2 className="text-lg font-bold text-gray-800 line-clamp-1">
                    {product.name}
                  </h2>
                  <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                    {product.description}
                  </p>
                </div>
                <Separator className="my-3" />
                <div className="flex items-center justify-between text-sm">
                  <span className="font-semibold text-primary">
                    {formatRp(product?.price)}
                  </span>
                  <span
                    className={`text-xs font-medium px-2 py-1 rounded-full ${
                      product.stock > 0
                        ? 'bg-green-100 text-green-700'
                        : 'bg-red-100 text-red-600'
                    }`}
                  >
                    {product.stock > 0
                      ? `Stok: ${product.stock}`
                      : 'Stok Habis'}
                  </span>
                </div>
              </div>
            </Card>
          </Link>
        ))
      )}
    </>
  );
}

export default ProductItem;
