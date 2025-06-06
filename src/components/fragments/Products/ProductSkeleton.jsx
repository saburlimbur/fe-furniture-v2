/* eslint-disable react/no-array-index-key */
import React from 'react';

import { Skeleton } from '@/components/ui/skeleton';

function ProductSkeleton() {
  return (
    <>
      {Array.from({ length: 4 }).map((_, index) => (
        <div
          key={index}
          className="border rounded-lg overflow-hidden shadow hover:shadow-md transition w-full flex flex-col h-auto justify-between"
        >
          <div>
            <Skeleton className="w-full h-64 bg-gray-200" />
          </div>
          <div className="p-4 flex flex-col gap-2">
            <Skeleton className="h-5 w-3/4 bg-gray-300" />
            <Skeleton className="h-4 w-full bg-gray-200" />
            <Skeleton className="h-4 w-5/6 bg-gray-200" />
          </div>
        </div>
      ))}
    </>
  );
}

export default ProductSkeleton;
