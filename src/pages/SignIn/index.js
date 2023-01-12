import AuthLayout from 'layouts/AuthLayout';
import React from 'react';
import SignInForm from './components/SignInForm';

const SignIn = () => {
  return (
    <AuthLayout>
      <SignInForm />
    </AuthLayout>
  );
};

export default SignIn;
