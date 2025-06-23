/* eslint-disable react/button-has-type */
import React from 'react';
import { ChevronDown, MoreHorizontal, Pencil, Trash2 } from 'lucide-react';

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
  TableRow,
} from '@/components/ui/table';
import useGetAllCheckouts from '@/hooks/checkouts/useGetAllCheckouts';
import { formatRp } from '@/utils/Formatted';

function CheckoutStatusDropdown({ status, onChange }) {
  const badgeStyle = {
    Pending: 'bg-yellow-200 text-yellow-800',
    Processing: 'bg-blue-200 text-blue-800',
    Completed: 'bg-green-200 text-green-800',
    Cancelled: 'bg-red-200 text-red-800',
  };

  const statuses = ['Pending', 'Processing', 'Completed', 'Cancelled'];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="cursor-pointer w-full flex justify-center items-center">
          <Badge className={badgeStyle[status] || 'bg-gray-200 text-gray-800'}>
            {status}
          </Badge>
          <ChevronDown size={16} />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="center">
        {statuses.map(item => (
          <DropdownMenuItem
            key={item}
            onClick={() => onChange(item)}
            className="cursor-pointer"
          >
            {item}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

function CheckoutList() {
  const { allCheckouts, isLoading, isError } = useGetAllCheckouts();

  if (isLoading) {
    return <div className="text-center py-8">Loading checkouts...</div>;
  }

  if (isError) {
    return (
      <div className="text-center text-red-500 py-8">
        Failed to load checkouts.
      </div>
    );
  }

  return (
    <div>
      <Table>
        <thead>
          <TableRow>
            <TableHead className="text-gray-400">ID</TableHead>
            <TableHead className="text-gray-400">User ID</TableHead>
            <TableHead className="text-gray-400">Cart ID</TableHead>
            <TableHead className="text-gray-400">Payment ID</TableHead>
            <TableHead className="text-gray-400">Shipping ID</TableHead>
            <TableHead className="text-gray-400">Address ID</TableHead>
            <TableHead className="text-gray-400">Total Price</TableHead>
            <TableHead className="text-center text-gray-400">Status</TableHead>
            <TableHead className="text-gray-400">Created At</TableHead>
            <TableHead className="text-right text-gray-400">Actions</TableHead>
          </TableRow>
        </thead>
        <TableBody>
          {allCheckouts?.map(checkout => (
            <TableRow key={checkout.id}>
              <TableCell>{checkout.id}</TableCell>
              <TableCell>{checkout.user_id}</TableCell>
              <TableCell>{checkout.cart_id}</TableCell>
              <TableCell>{checkout.payment_id}</TableCell>
              <TableCell>{checkout.shipping_id}</TableCell>
              <TableCell>{checkout.address_id}</TableCell>
              <TableCell>{formatRp(checkout.total_price)}</TableCell>
              <TableCell className="text-center">
                <CheckoutStatusDropdown
                  status={checkout.status}
                  onChange={newStatus =>
                    console.log(`Change checkout ${checkout.id} to`, newStatus)
                  }
                />
              </TableCell>
              <TableCell>
                {new Date(checkout.created_at).toLocaleDateString()}
              </TableCell>
              <TableCell className="text-right">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <button className="p-2 hover:bg-gray-100 rounded">
                      <MoreHorizontal className="w-4 h-4" />
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem
                      onClick={() => console.log('Edit', checkout.id)}
                    >
                      <Pencil className="mr-2 w-4 h-4" />
                      Edit
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem
                      className="text-red-600"
                      onClick={() => console.log('Delete', checkout.id)}
                    >
                      <Trash2 className="mr-2 w-4 h-4" />
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

export default CheckoutList;
