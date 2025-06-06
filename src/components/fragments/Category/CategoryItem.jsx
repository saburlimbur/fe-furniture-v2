/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable arrow-parens */

/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';

import useGetAllCategorys from '../../../hooks/category/useGetAllCategorys';
import Card from '../Card';

import CategorySkeleton from './CategorySkeleton';

function CategoryItem() {
  const { allCategorys, isError, isLoading } = useGetAllCategorys();
  const categories = allCategorys?.query ?? [];

  const categoryImage = {
    Chair: 'Chair.png',
    Table: '/Table.png',
    Bed: '/Bed.png',
    Sofa: '/Sofa.png',
    Wardrobe: '/Wardrobe.png',
  };

  const categoryDesc = {
    Chair: 'Comfortable and stylish chairs for any room.',
    Table: 'Sturdy, elegant tables for every need.',
    Bed: 'Cozy beds for perfect rest and sleep.',
    Sofa: 'Modern, comfy sofas for relaxing moments.',
    Wardrobe: 'Spacious wardrobes to keep things organized.',
  };

  return (
    <>
      {isLoading ? (
        <CategorySkeleton />
      ) : (
        categories?.map(item => (
          <Link
            key={item?.id}
            to={`/category/${item?.id}`}
            className="block bg-white px-5 rounded-lg shadow hover:shadow-md transition w-full h-full py-8"
          >
            <Card className="flex items-center justify-between w-full h-full">
              <Card.Body className="flex flex-col items-start gap-1.5 w-1/2">
                <h1 className="font-semibold text-2xl">
                  {item?.category_name}
                </h1>
                <p className="text-sm text-gray-600">
                  {categoryDesc[item.category_name]}
                </p>
              </Card.Body>
              <Card.Image
                src={categoryImage[item.category_name]}
                className="w-1/2 object-cover"
              />
            </Card>
          </Link>
        ))
      )}
    </>
  );
}

export default CategoryItem;
