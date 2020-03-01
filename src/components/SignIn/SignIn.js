import React, { useState } from 'react';
import { toast } from 'react-toastify';
import Loader from 'react-loader-spinner';
import { useHistory } from 'react-router-dom';
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
import { signInTraditionalUser, signInWithGoogle } from '../Firebase';

const SignIn = () => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      await signInTraditionalUser(email, password);
      history.replace('/admin');

      setLoading(false);
    } catch ({ message }) {
      toast.error(message);
      setLoading(false);
    }
  };
  const handleGoogleAuth = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      await signInWithGoogle();
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
        <FormHeader>Sign In</FormHeader>
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
        <FormButton onClick={handleSubmit}>
          {loading ? (
            <Loader type="Oval" color="#fff" height={20} width={40} />
          ) : (
            'Sign In'
          )}
        </FormButton>
        <FormSeperator> or </FormSeperator>
        <FormButton color="#F4B400;" onClick={handleGoogleAuth}>
          Sign in with Google
        </FormButton>
      </FormArea>
      <FormLinkArea>
        <p>
          Don't have an account? <FormLink to="/signup">Sign Up</FormLink>
        </p>
        <FormLink to="/reset-password"> Reset Password </FormLink>
      </FormLinkArea>
    </Main>
  );
};

export default SignIn;
