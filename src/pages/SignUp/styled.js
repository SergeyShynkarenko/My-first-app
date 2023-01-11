import { Box, styled } from '@mui/material';
import Image from '../../assets/img/form.svg';

export const SignUpWrapper = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  backgroundImage: `url(${Image})`,
  backgroundPosition: 'top right',
  backgroundRepeat: 'no-repeat',
  height: '100%',
  '& > *': {
    flex: 1,
  },
});
