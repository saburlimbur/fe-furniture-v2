/* eslint-disable no-unused-vars */
/* eslint-disable react/button-has-type */
import React from 'react';
import toast from 'react-hot-toast';
import { MoreHorizontal, Pencil, Trash2 } from 'lucide-react';
import moment from 'moment';

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
import useGetAllShipping from '@/hooks/shipping/useGetAllShippings';
import { formatRp } from '@/utils/Formatted';

function getStatusBadge(status) {
  switch (status) {
    case 'Pending':
      return <Badge className="bg-yellow-200 text-yellow-800">{status}</Badge>;
    case 'Delivered':
      return <Badge className="bg-green-200 text-green-800">{status}</Badge>;
    case 'Shipped':
      return <Badge className="bg-purple-200 text-purple-800">{status}</Badge>;
    case 'Cancelled':
      return <Badge className="bg-red-200 text-red-800">{status}</Badge>;
    default:
      return <Badge variant="outline">{status}</Badge>;
  }
}

function ShippingLists() {
  const { listShippings, isLoading, isError } = useGetAllShipping();

  const handleDeleteShipping = id => {
    toast.success(`Delete shipping with ID: ${id}`);
  };

  if (isLoading) return <div>Loading shipping data...</div>;
  if (isError) return <div>Failed to fetch shipping data.</div>;

  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow className="text-muted-foreground">
            <TableHead className="text-gray-400">Shipping ID</TableHead>
            <TableHead className="text-gray-400">Order ID</TableHead>
            <TableHead className="text-gray-400">Address ID</TableHead>
            <TableHead className="text-gray-400">Cost</TableHead>
            <TableHead className="text-gray-400">Date</TableHead>
            <TableHead className="text-gray-400">Status</TableHead>
            <TableHead className="text-gray-400 text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {listShippings?.map(shipping => (
            <TableRow key={shipping.id}>
              <TableCell>{shipping.id}</TableCell>
              <TableCell>{shipping.order_id}</TableCell>
              <TableCell>{shipping.address_id}</TableCell>
              <TableCell>Rp {formatRp(shipping.shipping_cost)}</TableCell>
              <TableCell>
                {moment(shipping.shipping_date).format('DD MMM YYYY')}
              </TableCell>
              <TableCell>{getStatusBadge(shipping.status)}</TableCell>
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
                      onClick={() => handleDeleteShipping(shipping.id)}
                    >
                      <Trash2 className="w-4 h-4 mr-2" />
                      Delete
                    </DropdownMenuItem>
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

export default ShippingLists;
