import React from 'react';
import {
  Main,
  FormArea,
  FormHeader,
  FormInput,
  FormButton
} from '../FormComponents';

const PasswordForget = () => {
  return (
    <Main>
      <FormArea>
        <FormHeader>Forgot Password</FormHeader>
        <FormInput type="email" placeholder="Email Address" />
        <FormButton> Submit</FormButton>
      </FormArea>
    </Main>
  );
};

export default PasswordForget;
