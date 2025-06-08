/* eslint-disable arrow-parens */
/* eslint-disable react/button-has-type */
import React from 'react';
import { MoreHorizontal } from 'lucide-react';

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
import useGetAllProducts from '@/hooks/product/useGetAllProducts';

function ProductsList() {
  const { allProducts } = useGetAllProducts();

  return (
    <div>
      <Table>
        <thead>
          <TableRow className="text-muted-foreground">
            <TableHead className="text-gray-400">Name</TableHead>
            <TableHead className="text-gray-400">Image</TableHead>
            <TableHead className="text-gray-400">Description</TableHead>
            <TableHead className="text-center text-gray-400">Price</TableHead>
            <TableHead className="text-center text-gray-400">Stock</TableHead>
            <TableHead className="text-center text-gray-400">
              Category ID
            </TableHead>
            <TableHead className="text-right text-gray-400">Actions</TableHead>
          </TableRow>
        </thead>
        <TableBody>
          {allProducts?.map(product => (
            <TableRow key={product.id}>
              <TableCell className="font-medium">{product.name}</TableCell>
              <TableCell>
                <img
                  src={product.image_url}
                  alt={product.name}
                  className="w-16 h-16 object-cover rounded-md"
                />
              </TableCell>
              <TableCell className="max-w-xs truncate text-sm text-muted-foreground">
                {product.description}
              </TableCell>
              <TableCell className="text-center">
                Rp
                {product.price}
              </TableCell>
              <TableCell className="text-center">{product.stock}</TableCell>
              <TableCell className="text-center">
                {product.category_id}
              </TableCell>
              <TableCell className="text-right">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <button className="h-8 w-8 p-0 inline-flex items-center justify-center rounded-md hover:bg-gray-100">
                      <MoreHorizontal className="h-4 w-4" />
                      <span className="sr-only">Open menu</span>
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>Edit Product</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Delete Product</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default ProductsList;
