import React from 'react';
import { Field, Formik } from 'formik';
import { boolean, object, string } from 'yup';
import {
  FormInner,
  FormText,
  FormTitle,
  InputsWrapper,
  SocialLinks,
  FormButton,
  FormWrapper,
  FormLink,
} from './styled';
import { ReactComponent as GoogleIcon } from 'assets/img/google.svg';
import { ReactComponent as FacebookIcon } from 'assets/img/facebook.svg';
import { ReactComponent as InstagramIcon } from 'assets/img/instagram.svg';
import { ReactComponent as LinkedinIcon } from 'assets/img/linkedin.svg';
import CustomCheckbox from 'components/CustomCheckbox';
import CustomInput from 'components/CustomInput';

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
  return (
    <FormInner>
      <FormTitle variant='h2'>Sign Up</FormTitle>

      <FormText sx={{ color: '#8A92A6' }} variant='h4'>
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
        <FormWrapper>
          <InputsWrapper>
            <Field component={CustomInput} placeholder='First Name' name='firstName' type='name' />

            <Field component={CustomInput} placeholder='Last Name' name='lastName' type='name' />

            <Field component={CustomInput} placeholder='Email' name='email' type='email' />

            <Field component={CustomInput} placeholder='Phone No' name='phone' type='tel' />

            <Field component={CustomInput} placeholder='Password' name='password' type='password' />

            <Field component={CustomInput} name='confirmPassword' placeholder='Confirm password' />
          </InputsWrapper>

          {/* <Field
								component={CustomCheckbox}
								label='I agree with the terms of use'
								name='termsCheck'
								error={Boolean(errors.termsCheck)}
							/> */}

          <Field
            name='termsCheck'
            label='I agree with the terms of use'
            component={CustomCheckbox}
          />

          <FormButton type='submit' variant='contained'>
            Sign up
          </FormButton>
        </FormWrapper>
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
        Already have an account? <FormLink to='/'>Sign in</FormLink>
      </FormText>
    </FormInner>
  );
};

export default SignUp;

{
  /* <Field
name='pacingOptimizationPerAd'
label='Performance price optimization per ad size'
tooltip='Some text'
component={FormCheckbox}
/> */
}
