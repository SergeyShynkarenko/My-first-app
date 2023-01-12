import AuthLayout from 'layouts/AuthLayout';
import React from 'react';

import SignUpForm from './components/SignUpForm';

const SignUp = () => {
  return (
    <AuthLayout>
      <SignUpForm />
    </AuthLayout>
  );
};

export default SignUp;
