/* eslint-disable react/no-array-index-key */
import React from 'react';

import { Skeleton } from '@/components/ui/skeleton';

function CategorySkeleton() {
  return (
    <>
      {Array.from({ length: 1 }).map((_, index) => (
        <div
          key={index}
          className="w-full bg-white px-5 rounded-lg shadow hover:shadow-md transition py-8 flex"
        >
          <div className="flex items-center justify-between w-full h-full">
            <div className="flex flex-col items-start gap-3 w-1/2">
              <Skeleton className="h-6 w-full bg-gray-200" />
              <Skeleton className="h-4 w-full bg-gray-100" />
            </div>
            <Skeleton className="w-1/2 h-24 rounded-md bg-gray-200" />
          </div>
        </div>
      ))}
    </>
  );
}

export default CategorySkeleton;
