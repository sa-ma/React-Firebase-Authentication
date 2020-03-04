import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { resetUserPassword } from '../Firebase';

import {
  Main,
  FormArea,
  FormHeader,
  FormInput,
  FormButton
} from '../FormComponents';

const PasswordForget = () => {
  const [email, setEmail] = useState('');

  const handleResetPassword = async (event) => {
    event.preventDefault();
    try {
      await resetUserPassword(email);
      setEmail('');
      toast.success('Reset link sent to your inbox');
    } catch (error) {
      toast.error('Error reseting password');
      console.error(error);
    }
  };
  return (
    <Main>
      <FormArea>
        <FormHeader>Forgot Password</FormHeader>
        <FormInput
          type="email"
          onChange={(event) => setEmail(event.target.value)}
          value={email}
          placeholder="Email Address"
        />
        <FormButton onClick={handleResetPassword}> Reset Password</FormButton>
      </FormArea>
    </Main>
  );
};

export default PasswordForget;
