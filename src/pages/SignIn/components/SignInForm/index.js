import React from 'react';
import InputAdornment from '@mui/material/InputAdornment';
import PersonIcon from '@mui/icons-material/Person';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import HttpsIcon from '@mui/icons-material/Https';
import Stack from '@mui/material/Stack';
import { Form, Field, Formik } from 'formik';
import { FormWrapper, FormTitle, FormSubTitle, FormButton, FormInner, FormInput } from './styled';
import { object, string } from 'yup';

const initialValues = {
  name: '',
  email: '',
  password: '',
};

const SignInForm = () => {
  return (
    <FormWrapper>
      <FormInner>
        <FormTitle variant='h3'>Hello</FormTitle>
        <FormSubTitle variant='h4'>Sign Up to Get Started</FormSubTitle>

        <Formik
          initialValues={initialValues}
          onSubmit={(values, formikHelpers) => {
            console.log(values);
            formikHelpers.resetForm();
          }}
          validationSchema={object({
            name: string().required('Please enter name').min(2, 'Name too short'),
            email: string().required('Please enter email').email('Invalid email'),
            password: string()
              .required('Please enter password')
              .min(7, 'Password should be minium 7 Characters'),
          })}
        >
          {({ errors, isValid, touched, dirty }) => (
            <Form>
              <Stack gap={2}>
                <Field
                  as={FormInput}
                  placeholder='Full Name'
                  name='name'
                  type='name'
                  error={Boolean(errors.name) && Boolean(touched.name)}
                  helperText={Boolean(touched.name) && errors.name}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position='start'>
                        <PersonIcon />
                      </InputAdornment>
                    ),
                  }}
                />

                <Field
                  as={FormInput}
                  placeholder='Email'
                  name='email'
                  type='email'
                  error={Boolean(errors.email) && Boolean(touched.email)}
                  helperText={Boolean(touched.email) && errors.email}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position='start'>
                        <MailOutlineIcon />
                      </InputAdornment>
                    ),
                  }}
                />

                <Field
                  as={FormInput}
                  placeholder='Password'
                  name='password'
                  type='password'
                  error={Boolean(errors.password) && Boolean(touched.password)}
                  helperText={Boolean(touched.password) && errors.password}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position='start'>
                        <HttpsIcon />
                      </InputAdornment>
                    ),
                  }}
                />

                <FormButton type='submit' variant='contained' disabled={!dirty || !isValid}>
                  Register
                </FormButton>
              </Stack>
            </Form>
          )}
        </Formik>
      </FormInner>
    </FormWrapper>
  );
};

export default SignInForm;
