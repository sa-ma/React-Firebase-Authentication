import React from 'react';
import {
  Main,
  FormArea,
  FormHeader,
  FormInput,
  FormButton,
  FormLink,
  FormLinkArea,
  FormSeperator
} from '../FormComponents';

const SignIn = () => {
  return (
    <Main>
      <FormArea>
        <FormHeader>Sign In</FormHeader>
        <FormInput type="email" placeholder="Email" />
        <FormInput type="password" placeholder="Password" />
        <FormButton> Sign In</FormButton>
        <FormSeperator> or </FormSeperator>
        <FormButton color="#F4B400;"> Sign in with Google</FormButton>
      </FormArea>
      <FormLinkArea>
        <p>
          Don't have an account? <FormLink href="/sign-up">Sign Up</FormLink>
        </p>
        <FormLink href="/reset-password"> Reset Password </FormLink>
      </FormLinkArea>
    </Main>
  );
};

export default SignIn;
