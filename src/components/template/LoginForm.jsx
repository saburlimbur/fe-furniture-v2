import React, { useState } from 'react';
import { useFormik } from 'formik';

import useLoginUser from '../../hooks/users/useLoginUser';
import { loginSchema } from '../../schema/AuthSchema';
import Button from '../elements/Button';
import InputField from '../fragments/InputField';

function LoginForm() {
  const { loginUser, isLoading, isError } = useLoginUser();
  const [loading, setLoading] = useState();

  const formik = useFormik({
    initialValues: {
      loginData: '',
      password: '',
    },
    validationSchema: loginSchema,
    onSubmit: async values => {
      const payload = {
        loginData: values.loginData,
        password: values.password,
      };

      setLoading(true);
      try {
        await loginUser(payload);
      } catch (error) {
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
          htmlFor="loginData"
          label="Email atau Nomor Telepon"
          type="text"
          name="loginData"
          id="loginData"
          value={formik.values.loginData}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="Masukkan email atau nomor telepon"
          className={`mt-1 block w-full px-3 py-5 border border-gray-300 rounded-lg text-xs shadow-sm ${
            formik.errors.loginData && formik.touched.loginData
              ? 'ring-2 ring-red-500'
              : ''
          }`} // ternary
          autoComplete="off"
        />
        {formik.errors.loginData && formik.touched.loginData && (
          <small className="text-red-500 text-xs">
            {formik.errors.loginData}
          </small>
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

      <Button
        type="submit"
        className="bg-blue-600 text-white p-4 rounded-lg hover:bg-blue-700 transition-all duration-200 text-lg font-semibold cursor-pointer"
      >
        {loading ? 'Loading...' : 'Login'}
      </Button>
    </form>
  );
}

export default LoginForm;
