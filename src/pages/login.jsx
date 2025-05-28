import React from 'react';

import AuthTemplate from '../components/template/AuthTemplate';
import LoginForm from '../components/template/LoginForm';

function LoginPage() {
  return (
    <AuthTemplate type="login" title="Login" subtitle="Create your account">
      <LoginForm />
    </AuthTemplate>
  );
}

export default LoginPage;
