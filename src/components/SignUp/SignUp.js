import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from 'react-loader-spinner';
import { createTraditionalUser } from '../Firebase';

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
  const [loading, setLoading] = useState(false);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const history = useHistory();

  const isInvalid =
    password !== confirmPassword ||
    password === '' ||
    email === '' ||
    fullName === '';

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      await createTraditionalUser(email, password);
      history.replace('/admin');
      setLoading(false);
    } catch ({ message }) {
      toast.error(message);
      setLoading(false);
    }
  };
  return (
    <Main>
      <FormArea>
        <FormHeader>Sign Up</FormHeader>
        <FormInput
          type="text"
          value={fullName}
          onChange={(event) => setFullName(event.target.value)}
          placeholder="Full Name"
          required
        />
        <FormInput
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Email"
          required
        />
        <FormInput
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          placeholder="Password"
          required
        />
        <FormInput
          type="password"
          value={confirmPassword}
          onChange={(event) => setConfirmPassword(event.target.value)}
          placeholder="Confirm Password"
          required
        />
        <FormButton disabled={isInvalid} onClick={handleSubmit}>
          {loading ? (
            <Loader type="Oval" color="#fff" height={20} width={40} />
          ) : (
            'Sign Up'
          )}
        </FormButton>
        <FormSeperator> or </FormSeperator>
        <FormButton color="#F4B400;"> Sign Up with Google</FormButton>
      </FormArea>
      <FormLinkArea>
        <p>
          Already have an account? <FormLink to="/signin">Sign In</FormLink>
        </p>
      </FormLinkArea>
    </Main>
  );
};

export default SignUp;
