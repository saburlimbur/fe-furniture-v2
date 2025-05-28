/* eslint-disable no-console */
import { useState } from 'react';
import { useFormik } from 'formik';

import { Button } from '@/components/ui/button';
import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import useRegisterUser from '@/hooks/users/useRegisterUser';
import { registerSchema } from '@/schema/AuthSchema';

function FormCreateUser() {
  const { registerUser } = useRegisterUser({ redirect: false });
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone_number: '',
      password: '',
      role: '',
    },
    validationSchema: registerSchema,
    onSubmit: async values => {
      const payload = {
        name: values.name,
        email: values.email,
        phone_number: values.phone_number,
        password: values.password,
        role: values.role,
      };

      setLoading(true);
      try {
        await registerUser(payload);
      } catch (err) {
        console.error('Register error:', err);
      } finally {
        setLoading(false);
      }
    },
  });

  const inputClass = field =>
    `mt-1 w-full text-sm ${
      formik.touched[field] && formik.errors[field]
        ? 'border-red-500 ring-1 ring-red-500'
        : ''
    }`;

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle className="text-xl font-semibold text-black">
          Add New User
        </DialogTitle>
        <DialogDescription className="text-sm text-gray-600">
          Create a new user account. They will receive an invitation email.
        </DialogDescription>
      </DialogHeader>

      <form
        onSubmit={formik.handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-5"
      >
        <div>
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            name="name"
            type="text"
            placeholder="Full name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={inputClass('name')}
          />
          {formik.touched.name && formik.errors.name && (
            <p className="text-xs text-red-500 mt-1">{formik.errors.name}</p>
          )}
        </div>

        <div>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="user@example.com"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={inputClass('email')}
          />
          {formik.touched.email && formik.errors.email && (
            <p className="text-xs text-red-500 mt-1">{formik.errors.email}</p>
          )}
        </div>

        <div>
          <Label htmlFor="phone_number">Phone Number</Label>
          <Input
            id="phone_number"
            name="phone_number"
            type="text"
            placeholder="+62 or 08"
            value={formik.values.phone_number}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={inputClass('phone_number')}
          />
          {formik.touched.phone_number && formik.errors.phone_number && (
            <p className="text-xs text-red-500 mt-1">
              {formik.errors.phone_number}
            </p>
          )}
        </div>

        <div>
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            name="password"
            type="password"
            placeholder="******"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={inputClass('password')}
          />
          {formik.touched.password && formik.errors.password && (
            <p className="text-xs text-red-500 mt-1">
              {formik.errors.password}
            </p>
          )}
        </div>

        <div>
          <Label htmlFor="role">Role</Label>
          <Select
            value={formik.values.role}
            onValueChange={value => formik.setFieldValue('role', value)}
          >
            <SelectTrigger className={inputClass('role')} id="role">
              <SelectValue placeholder="Select role" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Admin">Admin</SelectItem>
              <SelectItem value="User">User</SelectItem>
            </SelectContent>
          </Select>
          {formik.touched.role && formik.errors.role && (
            <p className="text-xs text-red-500 mt-1">{formik.errors.role}</p>
          )}
        </div>
        <DialogFooter className="pt-4">
          <Button variant="outline">Cancel</Button>
          <Button type="submit" disabled={loading} className="cursor-pointer">
            {loading ? 'Creating...' : 'Add User'}
          </Button>
        </DialogFooter>
      </form>
    </DialogContent>
  );
}

export default FormCreateUser;
