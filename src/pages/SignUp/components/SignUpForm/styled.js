import { Box, Typography, Button, styled } from '@mui/material';
import { Form } from 'formik';
import { Link } from 'react-router-dom';

export const FormInner = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
});

export const FormWrapper = styled(Form)({
  width: '516px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

export const FormTitle = styled(Typography)({
  fontSize: '33px',
  lineHeight: '43px',
  fontWeight: '500',
  marginBottom: '8px',
});

export const FormText = styled(Typography)({
  fontSize: '16px',
  lineHeight: '28px',
  fontWeight: '400',
});

export const InputsWrapper = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  flexWrap: 'wrap',
  margin: '16px 0',
  gap: '16px',
});

export const SocialLinks = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  margin: '16px 0',
  '& > *': {
    marginLeft: '24px',
  },
});

export const FormButton = styled(Button)({
  width: '188px',
  margin: '24px auto',
  padding: '8px 24px',
  background: '#3A57E8',
  fontSize: '16px',
  lineHeight: '28px',
  fontWeight: '400',
});

export const FormLink = styled(Link)({
  color: '#3A57E8',
  textDecoration: 'none',
});
