import * as yup from 'yup';

const addressSchema = yup.object().shape({
  street: yup
    .string()
    .required('Alamat jalan wajib diisi')
    .min(1, 'Alamat jalan tidak boleh kosong'),
  city: yup
    .string()
    .required('Kota wajib diisi')
    .min(1, 'Kota tidak boleh kosong'),
  state: yup
    .string()
    .required('Provinsi wajib diisi')
    .min(1, 'Provinsi tidak boleh kosong'),
  postal_code: yup
    .string()
    .required('Kode pos wajib diisi')
    .min(1, 'Kode pos tidak boleh kosong'),
  country: yup
    .string()
    .required('Negara wajib diisi')
    .min(1, 'Negara tidak boleh kosong'),
});

export default addressSchema;
