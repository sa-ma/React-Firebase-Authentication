import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';
import { updateUserPassword, signOutUser } from '../Firebase';
import {
  Main,
  FormArea,
  FormHeader,
  FormInput,
  FormButton
} from '../FormComponents';

const PasswordChange = () => {
  const [passwordOne, setPasswordOne] = useState('');
  const [passwordTwo, setPasswordTwo] = useState('');
  const [error, setError] = useState('');
  const history = useHistory();
  const handleUpdatePassword = async (event) => {
    event.preventDefault();
    try {
      await updateUserPassword(passwordOne);
      toast.success('Password Updated');
      setPasswordOne('');
      setPasswordTwo('');
      await signOutUser();
      history.replace('/signin');
    } catch (error) {
      setError(error.message);
      console.error(error.message);
      toast.error('Error updating Password. Try again.');
    }
  };
  const isInvalid = passwordOne !== passwordTwo || passwordOne === '';
  return (
    <Main>
      <FormArea>
        <FormHeader>Update Password</FormHeader>
        <FormInput
          type="password"
          onChange={(event) => setPasswordOne(event.target.value)}
          value={passwordOne}
          placeholder="Enter Password"
        />
        <FormInput
          type="password"
          onChange={(event) => setPasswordTwo(event.target.value)}
          value={passwordTwo}
          placeholder="Confirm Password"
        />
        <FormButton disabled={isInvalid} onClick={handleUpdatePassword}>
          Change Password
        </FormButton>
      </FormArea>
    </Main>
  );
};

export default PasswordChange;
