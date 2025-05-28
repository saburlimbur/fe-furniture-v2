import React from 'react';

import AuthTemplate from '../components/template/AuthTemplate';
import RegisterForm from '../components/template/RegisterForm';

function RegisterPage() {
  return (
    <AuthTemplate
      type="register"
      title="Hello, lets create an new account in Furniture"
      subtitle="Please enter our details"
    >
      <RegisterForm />
    </AuthTemplate>
  );
}

export default RegisterPage;
