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

const SignUp = () => {
  return (
    <Main>
      <FormArea>
        <FormHeader>Sign Up</FormHeader>
        <FormInput type="text" placeholder="Full Name" />
        <FormInput type="email" placeholder="Email" />
        <FormInput type="password" placeholder="Password" />
        <FormInput type="password" placeholder="Confirm Password" />
        <FormButton> Sign Up</FormButton>
      </FormArea>
      <FormLinkArea>
        <p>
          Already have an account? <FormLink href="/signin">Sign In</FormLink>
        </p>
      </FormLinkArea>
      <FormSeperator> or </FormSeperator>
      <FormButton color="#F4B400;"> Sign in with Google</FormButton>
    </Main>
  );
};

export default SignUp;
