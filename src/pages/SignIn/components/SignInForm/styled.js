import { Box, Typography, Button, styled } from '@mui/material';

export const FormWrapper = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
});

export const FormTitle = styled(Typography)({
  marginBottom: '10px',
  fontSize: '21px',
  fontWeight: 'bold',
});

export const FormSubTitle = styled(Typography)({
  marginBottom: '25px',
  fontSize: '14px',
});

export const FormButton = styled(Button)({
  border: '1px solid black',
  marginTop: '15px',
  background: '#000',
  padding: '16px',
  color: '#fff',
  '&:hover': {
    backgroundColor: 'white',
    boxShadow: 'none',
    color: 'black',
  },
});

export const FormInner = styled(Box)({
  width: '400px',
  display: 'flex',
  flexDirection: 'column',
});
