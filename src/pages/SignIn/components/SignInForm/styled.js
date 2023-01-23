import { Box, Typography, Button, styled } from '@mui/material';
import { Link } from 'react-router-dom';

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

export const FormAccount = styled(Typography)({
  fontSize: '16px',
  marginTop: '25px',
});

export const FormLink = styled(Link)({
  color: '#3A57E8',
  textDecoration: 'none',
});
