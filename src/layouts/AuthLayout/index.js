import React from 'react';
import { BannerTitle, BannerWrapper, SignInWrapper } from './styled';

const AuthLayout = ({ children }) => {
  return (
    <SignInWrapper>
      <BannerWrapper>
        <BannerTitle variant='h1' textAlign='center'>
          Welcome To My First <br /> React App
        </BannerTitle>
      </BannerWrapper>

      {children}
    </SignInWrapper>
  );
};

export default AuthLayout;
