/* eslint-disable react/button-has-type */
/* eslint-disable function-paren-newline */
/* eslint-disable no-unused-vars */
import React from 'react';
import { MoreHorizontal, Pencil, Trash2 } from 'lucide-react';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@/components/ui/table';

import useGetAllCategorys from '../../../hooks/category/useGetAllCategorys';

function CategoryLists() {
  const { allCategorys, isError, isLoading } = useGetAllCategorys();
  const categories = allCategorys?.query ?? [];

  return (
    <div>
      <Table>
        <thead>
          <TableRow>
            <TableHead className="text-gray-400">Product ID</TableHead>
            <TableHead className="text-gray-400">Image</TableHead>
            <TableHead className="text-gray-400">Product Name</TableHead>
            <TableHead className="text-gray-400">Category</TableHead>
            <TableHead className="text-gray-400">Price</TableHead>
            <TableHead className="text-gray-400">Stock</TableHead>
            <TableHead className="text-right text-gray-400">Actions</TableHead>
          </TableRow>
        </thead>
        <TableBody>
          {categories?.map(category =>
            category?.products?.map(product => (
              <TableRow key={product?.id}>
                <TableCell>{product?.id}</TableCell>
                <TableCell>
                  <img
                    src={product?.image_url}
                    alt={product?.name}
                    className="w-12 h-12 object-cover rounded"
                  />
                </TableCell>
                <TableCell>{product?.name}</TableCell>
                <TableCell>{category?.category_name}</TableCell>
                <TableCell>Rp {product?.price}</TableCell>
                <TableCell>{product?.stock}</TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <button className="p-2 hover:bg-gray-100 rounded">
                        <MoreHorizontal className="w-4 h-4" />
                      </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>
                        <Pencil className="mr-2 w-4 h-4" />
                        Edit
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem className="text-red-600">
                        <Trash2 className="mr-2 w-4 h-4" />
                        Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            )),
          )}
        </TableBody>
      </Table>
    </div>
  );
}

export default CategoryLists;
