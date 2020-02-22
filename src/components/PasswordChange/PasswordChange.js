import React from 'react';
import {
  Main,
  FormArea,
  FormHeader,
  FormInput,
  FormButton
} from '../FormComponents';

const PasswordChange = () => {
  return (
    <Main>
      <FormArea>
        <FormHeader>Reset Password</FormHeader>
        <FormInput type="password" placeholder="Password" />
        <FormInput type="password" placeholder="Confirm Password" />
        <FormButton> Submit</FormButton>
      </FormArea>
    </Main>
  );
};

export default PasswordChange;
