import React from 'react';
import Banner from './components/Banner';
import SignUpForm from './components/SignUpForm';

import { SignUpWrapper } from './styled';

const SignUp = () => {
  return (
    <SignUpWrapper>
      <Banner />
      <SignUpForm />
    </SignUpWrapper>
  );
};

export default SignUp;
