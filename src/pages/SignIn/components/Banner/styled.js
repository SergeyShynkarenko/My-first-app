import { Box, Typography, styled } from '@mui/material';
import Image from '../../../../assets/img/bg.jpg';

export const BannerWrapper = styled(Box)({
  backgroundImage: `url(${Image})`,
  position: 'relative',
  left: '0',
  top: '0',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  zIndex: '-1',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const BannerTitle = styled(Typography)({
  fontSize: '41px',
  fontWeight: 'bold',
  color: 'white',
});
