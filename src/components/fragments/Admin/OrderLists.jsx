/* eslint-disable no-unused-vars */
/* eslint-disable react/button-has-type */
/* eslint-disable radix */
import React from 'react';
import toast from 'react-hot-toast';
import { MoreHorizontal, Pencil, Trash2 } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
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
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import useGetAllOrders from '@/hooks/order/useGetAllOrders';

function getStatusBadge(status) {
  switch (status) {
    case 'Pending':
      return <Badge className="bg-yellow-200 text-yellow-800">{status}</Badge>;
    case 'Processing':
      return <Badge className="bg-blue-200 text-blue-800">{status}</Badge>;
    case 'Shipped':
      return <Badge className="bg-purple-200 text-purple-800">{status}</Badge>;
    case 'Delivered':
      return <Badge className="bg-green-200 text-green-800">{status}</Badge>;
    case 'Cancelled':
      return <Badge className="bg-red-200 text-red-800">{status}</Badge>;
    default:
      return <Badge variant="outline">{status}</Badge>;
  }
}

function OrderLists() {
  const { allOrders, isLoading, isError } = useGetAllOrders();

  const handleDeleteOrder = id => {
    toast.success(id);
  };

  if (isLoading) return <div>Loading orders...</div>;
  if (isError) return <div>Failed to fetch orders.</div>;

  return (
    <div>
      <Table>
        <thead>
          <TableRow className="text-muted-foreground">
            <TableHead className="text-gray-400">Order ID</TableHead>
            <TableHead className="text-gray-400">User ID</TableHead>
            <TableHead className="text-gray-400">Status</TableHead>
            <TableHead className="text-gray-400">Total</TableHead>
            <TableHead className="text-gray-400">Qty</TableHead>
            <TableHead className="text-gray-400 text-right">Actions</TableHead>
          </TableRow>
        </thead>
        <TableBody>
          {allOrders?.map(order => {
            const totalQty = order.orderItems.reduce(
              (sum, item) => sum + item.quantity,
              0,
            );

            return (
              <TableRow key={order.id}>
                <TableCell>{order.id}</TableCell>
                <TableCell>{order.user_id}</TableCell>
                <TableCell>{getStatusBadge(order.status)}</TableCell>
                <TableCell>
                  Rp {parseInt(order.total_price).toLocaleString()}
                </TableCell>
                <TableCell>{totalQty}</TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <button className="h-8 w-8 p-0 inline-flex items-center justify-center rounded-md hover:bg-gray-100">
                        <MoreHorizontal className="h-4 w-4" />
                        <span className="sr-only">Open menu</span>
                      </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>
                        <Pencil className="w-4 h-4 mr-2" />
                        Edit
                      </DropdownMenuItem>

                      <DropdownMenuSeparator />
                      <DropdownMenuItem
                        className="text-red-600"
                        onClick={() => handleDeleteOrder(order.id)}
                      >
                        <Trash2 className="w-4 h-4 mr-2" />
                        Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}

export default OrderLists;
