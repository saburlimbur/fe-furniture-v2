/* eslint-disable react/jsx-curly-newline */
/* eslint-disable react/button-has-type */
import React from 'react';
import {
  Building2,
  ChevronDown,
  CreditCard,
  MoreHorizontal,
  Pencil,
  Trash2,
  Truck,
  Wallet,
} from 'lucide-react';

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
import useGetAllPayments from '@/hooks/payment/useGetAllPayments';

function PaymentStatusDropdown({ status, onChange }) {
  const badgeStyle = {
    Pending: 'bg-yellow-200 text-yellow-800',
    Completed: 'bg-green-200 text-green-800',
    Failed: 'bg-red-200 text-red-800',
  };

  const statuses = ['Pending', 'Completed', 'Failed'];

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

function getPaymentMethodIcon(method) {
  switch (method.toLowerCase()) {
    case 'credit_card':
      return <CreditCard className="w-4 h-4 text-gray-600" />;
    case 'e_wallet':
      return <Wallet className="w-4 h-4 text-gray-600" />;
    case 'bank_transfer':
      return <Building2 className="w-4 h-4 text-gray-600" />;
    case 'cash_on_delivery':
      return <Truck className="w-4 h-4 text-gray-600" />;
    default:
      return <CreditCard className="w-4 h-4 text-gray-600" />;
  }
}

function PaymentsList() {
  const { allPayments, isLoading, isError } = useGetAllPayments();

  if (isLoading) {
    return <div className="text-center py-8">Loading payments...</div>;
  }

  if (isError) {
    return (
      <div className="text-center text-red-500 py-8">
        Failed to load payments.
      </div>
    );
  }

  return (
    <div>
      <Table>
        <thead>
          <TableRow>
            <TableHead className="text-gray-400">ID</TableHead>
            <TableHead className="text-gray-400">Order ID</TableHead>
            <TableHead className="text-gray-400">Amount</TableHead>
            <TableHead className="text-center text-gray-400">
              Payment Status
            </TableHead>
            <TableHead className="text-center text-gray-400">
              Order Status
            </TableHead>
            <TableHead className="text-center text-gray-400">
              Payment Method
            </TableHead>
            <TableHead className="text-right text-gray-400">Actions</TableHead>
          </TableRow>
        </thead>
        <TableBody>
          {allPayments?.map(payment => (
            <TableRow key={payment.id}>
              <TableCell>{payment.id}</TableCell>
              <TableCell>{payment.order_id}</TableCell>
              <TableCell>Rp {payment.amount}</TableCell>
              <TableCell className="text-center">
                <PaymentStatusDropdown
                  status={payment.payment_status}
                  onChange={newStatus =>
                    console.log(`Change payment ${payment.id} to`, newStatus)
                  }
                />
              </TableCell>
              <TableCell className="text-center">
                {getStatusBadge(payment.order?.status ?? 'Unknown')}
              </TableCell>
              <TableCell className="text-center">
                <div className="flex items-center justify-center gap-2">
                  {getPaymentMethodIcon(payment.payment_method)}
                  <span className="capitalize text-sm text-gray-700">
                    {payment.payment_method.replace(/_/g, ' ')}
                  </span>
                </div>
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
                      onClick={() => console.log('Edit', payment.id)}
                    >
                      <Pencil className="mr-2 w-4 h-4" />
                      Edit
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem
                      className="text-red-600"
                      onClick={() => console.log('Delete', payment.id)}
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

export default PaymentsList;
