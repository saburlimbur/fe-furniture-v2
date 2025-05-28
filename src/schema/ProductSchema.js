import * as yup from 'yup';

const productSchema = yup.object().shape({
  name: yup
    .string()
    // .min(8, 'Minimal 8 karakter huruf')
    .required('Nama produk harus diisi'),

  description: yup
    .string()
    // .min(10, 'Deskripsi minimal 10 karakter')
    .required('Deskripsi harus diisi'),

  price: yup
    .number()
    .typeError('Harga harus berupa angka')
    .positive('Harga harus lebih dari 0')
    .required('Harga produk harus diisi'),

  stock: yup
    .number()
    .typeError('Stok harus berupa angka')
    .integer('Stok harus berupa bilangan bulat')
    .min(0, 'Stok tidak boleh kurang dari 0')
    .required('Stok produk harus diisi'),

  category_id: yup
    .number()
    .typeError('Kategori harus berupa angka')
    .required('Kategori harus dipilih'),

  image_url: yup
    .string()
    .url('URL gambar tidak valid')
    .required('URL gambar harus diisi'),
});

export default productSchema;
