import React, { useState } from 'react';
import { useQueryClient } from '@tanstack/react-query';
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
import useCreateProduct from '@/hooks/product/useCreateProduct';
import productSchema from '@/schema/ProductSchema';

import InputField from '../InputField';

function FormCreateProduct({ onSuccess }) {
  const queryClient = useQueryClient();
  const { createProduct, isLoading, isError } = useCreateProduct();
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: '',
      description: '',
      price: '',
      stock: '',
      category_id: '',
      image_url: '',
    },

    validationSchema: productSchema,
    onSubmit: async values => {
      const payload = {
        name: values.name,
        description: values.description,
        price: values.price,
        stock: values.stock,
        category_id: values.category_id,
        image_url: values.image_url,
      };

      setLoading(true);
      try {
        await createProduct(payload);
        await queryClient.invalidateQueries(['products']);

        if (onSuccess) onSuccess();
      } catch (error) {
        console.error('Create product error:', err);
      } finally {
        setLoading(false);
      }
    },
  });
  return (
    <div>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add New Product</DialogTitle>
          <DialogDescription>
            Create a new user account. They will receive an invitation email.
          </DialogDescription>
        </DialogHeader>
        <form
          onSubmit={formik.handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-[900px]"
        >
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
              placeholder="Enter product name"
              className={`mt-1 block w-full px-3 py-5 border border-gray-300 rounded-lg text-xs shadow-sm ${formik.errors.name && formik.touched.name ? 'ring-2 ring-red-500' : ''}`}
              autoComplete="off"
            />
            {formik.errors.name && formik.touched.name && (
              <small className="text-red-500 text-xs">
                {formik.errors.name}
              </small>
            )}
          </div>

          <div>
            <InputField
              htmlFor="price"
              label="Price"
              type="number"
              name="price"
              id="price"
              value={formik.values.price}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Enter product price"
              className={`mt-1 block w-full px-3 py-5 border border-gray-300 rounded-lg text-xs shadow-sm ${formik.errors.price && formik.touched.price ? 'ring-2 ring-red-500' : ''}`}
              autoComplete="off"
            />
            {formik.errors.price && formik.touched.price && (
              <small className="text-red-500 text-xs">
                {formik.errors.price}
              </small>
            )}
          </div>

          <div>
            <InputField
              htmlFor="stock"
              label="Stock"
              type="number"
              name="stock"
              id="stock"
              value={formik.values.stock}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Enter product stock"
              className={`mt-1 block w-full px-3 py-5 border border-gray-300 rounded-lg text-xs shadow-sm ${formik.errors.stock && formik.touched.stock ? 'ring-2 ring-red-500' : ''}`}
              autoComplete="off"
            />
            {formik.errors.stock && formik.touched.stock && (
              <small className="text-red-500 text-xs">
                {formik.errors.stock}
              </small>
            )}
          </div>

          <div>
            <InputField
              htmlFor="category_id"
              label="Category Id"
              type="number"
              name="category_id"
              id="category_id"
              value={formik.values.category_id}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Enter product category id"
              className={`mt-1 block w-full px-3 py-5 border border-gray-300 rounded-lg text-xs shadow-sm ${formik.errors.category_id && formik.touched.category_id ? 'ring-2 ring-red-500' : ''}`}
              autoComplete="off"
            />
            {formik.errors.category_id && formik.touched.category_id && (
              <small className="text-red-500 text-xs">
                {formik.errors.category_id}
              </small>
            )}
          </div>

          <div>
            <InputField
              htmlFor="image_url"
              label="Image URL"
              type="text"
              name="image_url"
              id="image_url"
              value={formik.values.image_url}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Enter product category id"
              className={`mt-1 block w-full px-3 py-5 border border-gray-300 rounded-lg text-xs shadow-sm ${formik.errors.image_url && formik.touched.image_url ? 'ring-2 ring-red-500' : ''}`}
              autoComplete="off"
            />
            {formik.errors.image_url && formik.touched.image_url && (
              <small className="text-red-500 text-xs">
                {formik.errors.image_url}
              </small>
            )}
          </div>

          <div className="flex flex-col md:col-span-2">
            <Label className="block mb-2 text-xs font-semibold text-[#111827]">
              Description
            </Label>
            <textarea
              name="description"
              value={formik.values.description}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              rows={4}
              className={`mt-1 border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-orange-500 ${formik.errors.description && formik.touched.description ? 'ring-2 ring-red-500' : ''}`}
            />
            {formik.errors.description && formik.touched.description && (
              <small className="text-red-500 text-xs pt-1">
                {formik.errors.description}
              </small>
            )}
          </div>

          <div className="md:col-span-2 flex justify-end">
            <DialogFooter>
              <Button variant="outline">Cancel</Button>
              <Button type="submit">Add Product</Button>
            </DialogFooter>
          </div>
        </form>
      </DialogContent>
    </div>
  );
}

export default FormCreateProduct;
