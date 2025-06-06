/* eslint-disable arrow-parens */
import React, { useState } from 'react';
import { useFormik } from 'formik';

import { Button } from '@/components/ui/button';
import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import useCreateCategoryName from '@/hooks/category/useCreateCategoryName';
import categorySchema from '@/schema/CategorySchema';

import InputField from '../InputField';

function FormCreateCategory({ onSuccess }) {
  const { createCategory } = useCreateCategoryName();
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

        if (onSuccess) onSuccess();
      } catch (error) {
        console.error('Create category error:', error);
      } finally {
        setLoading(false);
      }
    },
  });

  return (
    <div>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add New Product</DialogTitle>
          <DialogDescription>
            Create a new user account. They will receive an invitation email.
          </DialogDescription>
        </DialogHeader>

        <form className="flex flex-col gap-6" onSubmit={formik.handleSubmit}>
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
              placeholder="Enter category name"
              className={`mt-1 block w-full px-3 py-5 border border-gray-300 rounded-lg text-xs shadow-sm ${formik.errors.category_name && formik.touched.category_name ? 'ring-2 ring-red-500' : ''}`}
              autoComplete="off"
            />
            {formik.errors.category_name && formik.touched.category_name && (
              <small className="text-red-500 text-xs">
                {formik.errors.category_name}
              </small>
            )}
          </div>

          <div className="md:col-span-2 flex justify-end">
            <DialogFooter>
              <Button variant="outline" className="cursor-pointer">
                Cancel
              </Button>
              <Button type="submit" className="cursor-pointer">
                Add Category
              </Button>
            </DialogFooter>
          </div>
        </form>
      </DialogContent>
    </div>
  );
}

export default FormCreateCategory;
