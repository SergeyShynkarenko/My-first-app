import { Box, styled } from '@mui/material';

export const SignInWrapper = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  height: '100%',
  '& > *': {
    flex: 1,
  },
});
