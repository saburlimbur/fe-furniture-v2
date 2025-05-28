import React from 'react';
import toast from 'react-hot-toast';
import { MoreHorizontal, ShieldCheck, User2 } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
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
import useListUsers from '@/hooks/users/useListUsers';

import useDeleteUserById from '../../../hooks/users/useDeleteUserById';

function UsersList() {
  const { listUsers } = useListUsers();
  const { deleteUserId } = useDeleteUserById();

  console.log('listUsers:', listUsers);

  const handleDeleteUser = async id => {
    try {
      await deleteUserId(Number(id));
      toast.success('User deleted successfully!');
    } catch (error) {
      toast.error(error.message || 'Failed to delete user');
    }
  };

  return (
    <div>
      <Table>
        <thead>
          <TableRow className="text-muted-foreground">
            <TableHead className="text-gray-400">Username</TableHead>
            <TableHead className="text-gray-400">Email</TableHead>
            <TableHead className="text-gray-400">Phone Number</TableHead>
            <TableHead className="text-gray-400 text-center">Role</TableHead>
            <TableHead className="text-gray-400 text-right">Actions</TableHead>
          </TableRow>
        </thead>
        <TableBody>
          {listUsers?.query?.map(user => (
            <TableRow key={user.id}>
              <TableCell className="font-medium">{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.phone_number}</TableCell>
              <TableCell>
                <div className="flex justify-center items-center gap-2">
                  {user.role === 'Admin' ? (
                    <>
                      <ShieldCheck className="h-4 w-4" />
                      <span className="text-gray-800">Admin</span>
                    </>
                  ) : (
                    <>
                      <User2 className="h-4 w-4" />
                      <span className="text-gray-800 font-semibold">User</span>
                    </>
                  )}
                </div>
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
                    <DropdownMenuItem>Edit User</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem
                      onClick={() => handleDeleteUser(user?.id)}
                    >
                      Delete User
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

export default UsersList;
