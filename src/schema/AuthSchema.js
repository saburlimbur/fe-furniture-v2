/* eslint-disable camelcase */

import * as yup from 'yup';

const MATCHES_PASSWORD = /^[a-zA-Z0-9]+$/;

const registerSchema = yup.object().shape({
  name: yup
    .string()
    .min(6, 'Username harus diisi minimal 6 karakter huruf')
    .required('Username harus diisi, ini digunakan untuk public profile'),
  email: yup
    .string()
    .email('Masukan email yang valid')
    .required('Email harus diisi'),
  phone_number: yup
    .string()
    .matches(
      /^(08|628)\d+$/,
      // jangan lupa, harus dari 08 atau 628 di depannya. sesuai di BE
      'Nomor telepon harus diawali dengan 08 atau 628 dan hanya berisi angka',
    )
    .min(10, 'Nomor telepon harus minimal 10 digit')
    .max(14, 'Nomor telepon tidak boleh lebih dari 14 digit')
    .required('Nomor telepon harus diisi'),
  password: yup
    .string()
    .matches(MATCHES_PASSWORD, 'Password harus mengandung huruf dan angka saja')
    .min(8, 'Password harus diisi minimal 8 karakter')
    .required('Password harus diisi'),
  role: yup
    .string()
    .required('Pilih dahulu role anda, demi kenyamanan bersama'),
});

const loginSchema = yup.object().shape({
  loginData: yup
    .string()
    .required('Email atau nomor telepon harus diisi')
    .test(
      'emailOrPhone',
      'Masukkan email yang valid atau nomor telepon yang diawali dengan 08 atau 628',
      value => {
        const email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phone_number = /^(08|628)\d+$/;
        return email.test(value) || phone_number.test(value);
      },
    ),
  password: yup
    .string()
    .matches(MATCHES_PASSWORD, 'Password harus mengandung huruf dan angka saja')
    .min(8, 'Password harus diisi minimal 8 karakter')
    .required('Password harus diisi'),
});

export { loginSchema, registerSchema };
