import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Main = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
`;
export const FormArea = styled.form`
  max-width: 500px;
  width: 100%;
  padding: 2rem;
  margin: 3rem 0 1rem;
  border: 0 solid #e2e8f0;
  border-radius: 5px;
  background: white;
`;
export const FormHeader = styled.h2`
  font-size: 1.6rem;
  font-weight: 900;
  text-align: center;
  color: #274c77;
  margin-bottom: 30px;
`;
export const FormInput = styled.input`
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 1rem;
  margin: 20px 0;
  height: 46px;
  display: block;
  width: 100%;
  outline: none;
  transition: border-color 0.3s ease-in, color 1s linear;
  border: 1px solid rgba(10, 46, 101, 0.1);
  &:focus {
    border-color: #26547c;
  }
`;
export const FormButton = styled.button`
  text-align: center;
  color: white;
  padding: 10px 5px;
  width: 100%;
  border-radius: 5px;
  border: 1px solid;
  border-color: ${(props) => (props.color ? props.color : '#ef476f')};
  font-size: 1.4rem;
  background: ${(props) => (props.color ? props.color : '#ef476f')};
  cursor: pointer;
  outline: none;
  transition: background-color 0.3s ease-in, color 1s linear;
  &:hover {
    border-color: #274c77;
    background-color: #274c77;
  }
  &:disabled {
    background-color: #ff9999;
    cursor: not-allowed;
  }
`;

export const FormLink = styled(Link)`
  text-decoration: none;
  color: #274c77;
  text-align: center;
  font-size: 0.95rem;
  text-decoration: underline;
  &:hover {
    color: #ef476f;
  }
`;

export const FormLinkArea = styled.div`
  font-size: 0.8rem;
  text-align: center;
  line-height: 1.3rem;
`;

export const FormSeperator = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  margin: 0.5rem;
  &::before,
  &::after {
    content: '';
    flex: 1;
    border-bottom: 1px solid #26547c;
  }
  &::before {
    margin-right: 0.25em;
  }
  &::after {
    margin-left: 0.25em;
  }
`;
