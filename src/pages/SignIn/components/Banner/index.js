import React from 'react';
import { BannerWrapper, BannerTitle } from './styled';

const Banner = () => {
  return (
    <BannerWrapper>
      <BannerTitle variant='h1' textAlign='center'>
        Welcome To My First <br /> React App
      </BannerTitle>
    </BannerWrapper>
  );
};

export default Banner;
