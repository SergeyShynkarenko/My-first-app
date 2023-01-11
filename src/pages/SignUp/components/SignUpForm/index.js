import { TextField } from '@mui/material';
import React from 'react';
import { Field, Form, Formik } from 'formik';
import { boolean, object, string } from 'yup';
import Checkbox from '@mui/material/Checkbox';
import { FormInner, FormText, FormTitle, InputsWrapper, SocialLinks, FormButton } from './styled';
import { Link } from 'react-router-dom';
import FormControlLabel from '@mui/material/FormControlLabel';
import { ReactComponent as GoogleIcon } from '../../../../assets/img/google.svg';
import { ReactComponent as FacebookIcon } from '../../../../assets/img/facebook.svg';
import { ReactComponent as InstagramIcon } from '../../../../assets/img/instagram.svg';
import { ReactComponent as LinkedinIcon } from '../../../../assets/img/linkedin.svg';
import styledComponents from 'styled-components';

const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  password: '',
  confirmPassword: '',
  termsCheck: false,
};

const SignUp = () => {
  const termsCheckboxLabel = 'I agree with the terms of use';

  const FormWrapper = styledComponents(Form)({
    width: '516px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  });

  return (
    <FormInner>
      <FormTitle variant='h2'>Sign Up</FormTitle>
      <FormText style={{ color: '#8A92A6' }} variant='h4'>
        Create your Hope UI account
      </FormText>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, formikHelpers) => {
          console.log(values);
          formikHelpers.resetForm();
        }}
        validationSchema={object({
          firstName: string().required('Please enter First Name').min(2, 'First Name too short'),
          lastName: string().required('Please enter Last Name').min(2, 'Last Name too short'),
          email: string().required('Please enter Email').email('Invalid email'),
          phone: string()
            .required('Please enter Phone No')
            .min(13, 'Phone No should be minium 13 Characters'),
          password: string()
            .required('Please enter Password')
            .min(7, 'Password should be minium 7 Characters'),
          confirmPassword: string()
            .required('Please confirm Password')
            .min(7, 'Password should be minium 7 Characters'),
          termsCheck: boolean().oneOf([true], 'Required terms of use'),
        })}
      >
        {({ errors, touched }) => (
          <FormWrapper>
            <InputsWrapper>
              <Field
                as={TextField}
                placeholder='First Name'
                name='firstName'
                type='name'
                error={Boolean(errors.firstName) && Boolean(touched.firstName)}
                helperText={Boolean(touched.firstName) && errors.firstName}
              />

              <Field
                as={TextField}
                placeholder='Last Name'
                name='lastName'
                type='name'
                error={Boolean(errors.lastName) && Boolean(touched.lastName)}
                helperText={Boolean(touched.lastName) && errors.lastName}
              />

              <Field
                as={TextField}
                placeholder='Email'
                name='email'
                type='email'
                error={Boolean(errors.email) && Boolean(touched.email)}
                helperText={Boolean(touched.email) && errors.email}
              />

              <Field
                as={TextField}
                placeholder='Phone No'
                name='phone'
                type='tel'
                error={Boolean(errors.phone) && Boolean(touched.phone)}
                helperText={Boolean(touched.phone) && errors.phone}
              />

              <Field
                as={TextField}
                placeholder='Password'
                name='password'
                type='password'
                error={Boolean(errors.password) && Boolean(touched.password)}
                helperText={Boolean(touched.password) && errors.password}
              />

              <Field
                as={TextField}
                placeholder='Confirm Password'
                name='confirmPassword'
                type='password'
                error={Boolean(errors.confirmPassword) && Boolean(touched.confirmPassword)}
                helperText={Boolean(touched.confirmPassword) && errors.confirmPassword}
              />
            </InputsWrapper>

            <FormControlLabel
              control={<Checkbox id='termsCheck' name='termsCheck' color='primary' required />}
              id='termsCheck'
              name='termsCheck'
              label={termsCheckboxLabel}
            />
            <FormButton type='submit' variant='contained'>
              Sign up
            </FormButton>
          </FormWrapper>
        )}
      </Formik>

      <FormText variant='h4'>or sign up with other accounts?</FormText>

      <SocialLinks>
        <a href='https://www.google.com/' target='_blank' rel='noreferrer'>
          <GoogleIcon />
        </a>
        <a href='https://www.facebook.com/' target='_blank' rel='noreferrer'>
          <FacebookIcon />
        </a>
        <a href='https://www.instagram.com/' target='_blank' rel='noreferrer'>
          <InstagramIcon />
        </a>
        <a href='https://www.linkedin.com/' target='_blank' rel='noreferrer'>
          <LinkedinIcon />
        </a>
      </SocialLinks>

      <FormText variant='h4'>
        Already have an account?{' '}
        <Link style={{ textDecoration: 'none', color: '#3A57E8' }} to='/'>
          Sign in
        </Link>
      </FormText>
    </FormInner>
  );
};

export default SignUp;
