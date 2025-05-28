import * as yup from 'yup';

const validCategories = ['Chair', 'Table', 'Bed', 'Sofa', 'Wardrobe'];

const categorySchema = yup.object().shape({
  category_name: yup
    .string()
    .oneOf(validCategories, 'Kategori tidak valid')
    .required('Nama kategori harus diisi'),
});

export default categorySchema;
