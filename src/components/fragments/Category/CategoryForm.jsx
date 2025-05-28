/* eslint-disable arrow-parens */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useFormik } from 'formik';

import useCreateCategoryName from '../../../hooks/category/useCreateCategoryName';
import categorySchema from '../../../schema/CategorySchema';
import Button from '../../elements/Button';
import InputField from '../InputField';

function CategoryForm({ onSubmit }) {
  const { createCategory, isLoading, isError } = useCreateCategoryName();
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      category_name: '',
    },

    validationSchema: categorySchema,
    onSubmit: async values => {
      const payload = {
        category_name: values.category_name,
      };

      setLoading(true);
      try {
        await createCategory(payload);
      } catch (err) {
        console.error('Create catgory error:', err);
      } finally {
        setLoading(false);
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className=" space-y-6 transition-all">
      <div>
        <InputField
          htmlFor="category_name"
          label="Category Name"
          type="text"
          name="category_name"
          id="category_name"
          value={formik.values.category_name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="Enter your category name"
          className={`mt-1 block w-full px-3 py-5 border border-gray-300 rounded-lg text-xs shadow-sm ${formik.errors.category_name && formik.touched.category_name ? 'ring-2 ring-red-500' : ''}`}
          autoComplete="off"
        />
        {formik.errors.category_name && formik.touched.category_name && (
          <small className="text-red-500 text-xs">
            {formik.errors.category_name}
          </small>
        )}
      </div>

      <div className="flex justify-end space-x-3">
        <Button
          type="button"
          onClick={onSubmit}
          className="text-gray-500 hover:text-gray-700 py-3 px-4 transition text-base"
        >
          Cancel
        </Button>
        <Button
          type="submit"
          className="bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-all duration-200 text-base font-semibold cursor-pointer"
        >
          {loading ? 'Loading...' : 'Submit'}
        </Button>
      </div>
    </form>
  );
}

export default CategoryForm;
