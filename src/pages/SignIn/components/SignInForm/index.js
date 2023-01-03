import React from 'react';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import PersonIcon from '@mui/icons-material/Person';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import HttpsIcon from '@mui/icons-material/Https';
import { FormWrapper, FormTitle, FormSubTitle, FormButton, FormInner } from './styled';

const SignInForm = () => {
  return (
    <FormWrapper>
      <FormInner>
        <FormTitle variant='h3'>Hello</FormTitle>
        <FormSubTitle variant='h4'>Sign Up to Get Started</FormSubTitle>

        <TextField
          placeholder='Full Name'
          InputProps={{
            startAdornment: (
              <InputAdornment position='start'>
                <PersonIcon />
              </InputAdornment>
            ),
          }}
        />

        <TextField
          placeholder='Email'
          sx={{ my: '15px' }}
          InputProps={{
            startAdornment: (
              <InputAdornment position='start'>
                <MailOutlineIcon />
              </InputAdornment>
            ),
          }}
        />

        <TextField
          placeholder='Password'
          InputProps={{
            startAdornment: (
              <InputAdornment position='start'>
                <HttpsIcon />
              </InputAdornment>
            ),
          }}
        />
        <FormButton variant='contained'>Register</FormButton>
      </FormInner>
    </FormWrapper>
  );
};

export default SignInForm;
