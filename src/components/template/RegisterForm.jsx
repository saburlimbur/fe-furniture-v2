import React, { useState } from 'react';
import { useFormik } from 'formik';

import useRegisterUser from '../../hooks/users/useRegisterUser';
import { registerSchema } from '../../schema/AuthSchema';
import Button from '../elements/Button';
import SelectOption from '../elements/SelectOption';
import InputField from '../fragments/InputField';

function RegisterForm() {
  const { registerUser, isLoading, isError } = useRegisterUser();
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

  return (
    <form onSubmit={formik.handleSubmit} className="flex flex-col gap-5 w-full">
      <div>
        <InputField
          htmlFor="name"
          label="Name"
          type="text"
          name="name"
          id="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="Enter your name"
          className={`mt-1 block w-full px-3 py-5 border border-gray-300 rounded-lg text-xs shadow-sm ${formik.errors.name && formik.touched.name ? 'ring-2 ring-red-500' : ''}`}
          autoComplete="off"
        />
        {formik.errors.name && formik.touched.name && (
          <small className="text-red-500 text-xs">{formik.errors.name}</small>
        )}
      </div>

      <div>
        <InputField
          htmlFor="email"
          label="Email"
          type="text"
          name="email"
          id="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="Enter your email"
          className={`mt-1 block w-full px-3 py-5 border border-gray-300 rounded-lg text-xs shadow-sm ${formik.errors.email && formik.touched.email ? 'ring-2 ring-red-500' : ''}`}
          autoComplete="off"
        />
        {formik.errors.email && formik.touched.email && (
          <small className="text-red-500 text-xs">{formik.errors.email}</small>
        )}
      </div>

      <div>
        <InputField
          htmlFor="password"
          label="Password"
          type="password"
          name="password"
          id="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="Enter your password"
          className={`mt-1 block w-full px-3 py-5 border border-gray-300 rounded-lg text-xs shadow-sm ${formik.errors.password && formik.touched.password ? 'ring-2 ring-red-500' : ''}`}
          autoComplete="off"
        />
        {formik.errors.password && formik.touched.password && (
          <small className="text-red-500 text-xs">
            {formik.errors.password}
          </small>
        )}
      </div>

      <div>
        <InputField
          htmlFor="phone_number"
          label="Phone Number"
          type="text"
          name="phone_number"
          id="phone_number"
          value={formik.values.phone_number}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="Confirm your password"
          className={`mt-1 block w-full px-3 py-5 border border-gray-300 rounded-lg text-xs shadow-sm ${formik.errors.phone_number && formik.touched.phone_number ? 'ring-2 ring-red-500' : ''}`}
          autoComplete="off"
        />
        {formik.errors.phone_number && formik.touched.phone_number && (
          <small className="text-red-500 text-xs">
            {formik.errors.phone_number}
          </small>
        )}
      </div>

      <div>
        <SelectOption
          name="role"
          title="Role"
          value={formik.values.role}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className="mt-1 block w-full px-3 py-5 border border-gray-300 bg-white text-xs rounded-lg shadow-sm cursor-pointer text-gray-500"
          label="Silakhan pilih role anda"
          options={[
            { value: 'Admin', label: 'Admin' },
            { value: 'User', label: 'User' },
          ]}
        />
        {formik.errors.role && formik.touched.role && (
          <small className="text-red-500 text-xs">{formik.errors.role}</small>
        )}
      </div>

      <Button
        type="submit"
        className="bg-blue-600 text-white p-4 rounded-lg hover:bg-blue-700 transition-all duration-200 text-lg font-semibold cursor-pointer"
      >
        {loading ? 'Loading...' : 'Register'}
      </Button>
    </form>
  );
}

export default RegisterForm;
