import React from 'react';
import { Box } from '@mui/system';
import bg from '../../../../assets/img/sign-up-bg.png';

const Banner = () => {
  return (
    <Box style={{ height: '100%' }}>
      <img style={{ width: '100%', height: '100%' }} src={bg} alt='Sign Up' />
    </Box>
  );
};

export default Banner;
