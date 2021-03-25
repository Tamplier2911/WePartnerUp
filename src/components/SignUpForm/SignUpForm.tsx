// import './SignUpForm.scss';
import React, { useState, useContext } from 'react';

// components
import PrimaryTitle from '../PrimaryTitle/PrimaryTitle';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';

// contexts
import AuthContext, { AuthContextTypes } from '../../contexts/AuthContext';

// utils
import { signUpFormValidator } from './SignUpFormValidator';

// styles
import { LoginFormMain, FormElement } from './SignUpForm.styles';

type UserCredentialsState = {
  email: string;
  password: string;
};

type FieldValidationState = {
  emailError: boolean;
  emailErrorText: string;
  passwordError: boolean;
  passwordErrorText: string;
};

const LoginForm = () => {
  const {
    isLoading,
    signUpWithEmailAndPassword,
  } = useContext<AuthContextTypes>(AuthContext);

  const [userCredentials, setUserCredentials] = useState<UserCredentialsState>({
    email: '',
    password: '',
  });

  const { email, password } = userCredentials;

  const [fieldValidation, setFieldValidation] = useState<FieldValidationState>({
    emailError: false,
    emailErrorText: '',
    passwordError: false,
    passwordErrorText: '',
  });

  const {
    emailError,
    emailErrorText,
    passwordError,
    passwordErrorText,
  } = fieldValidation;

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // validate and send
    const { errors, emailErrors, passwordErrors } = signUpFormValidator(
      email,
      password
    );

    // if errors set error fields and return
    if (errors > 0) {
      const emailErrored = emailErrors.length ? true : false;
      const passwordErrored = passwordErrors.length ? true : false;
      setFieldValidation({
        ...fieldValidation,
        emailError: emailErrored,
        emailErrorText: emailErrored ? emailErrors.join(' ') : '',
        passwordError: passwordErrored,
        passwordErrorText: passwordErrored ? passwordErrors.join(' ') : '',
      });
      return;
    }

    // else perform sign up
    signUpWithEmailAndPassword(email, password);

    // reset fields
    setFieldValidation({
      ...fieldValidation,
      emailError: false,
      emailErrorText: '',
      passwordError: false,
      passwordErrorText: '',
    });
    setUserCredentials({ email: '', password: '' });
  };

  return (
    <LoginFormMain>
      <PrimaryTitle value={'Create account'} />
      <FormElement autoComplete="off" onSubmit={onSubmit}>
        <TextInput
          onChange={onInputChange}
          name="email"
          value={email}
          label="Email"
          type="email"
          id={'email-loginform'}
          errored={emailError}
          errorText={emailErrorText}
          placeholder={'you@examlpe.com'}
          required
        />
        <TextInput
          onChange={onInputChange}
          name="password"
          value={password}
          label="Password"
          type="password"
          id={'password-loginform'}
          errored={passwordError}
          errorText={passwordErrorText}
          placeholder={'(min 8 symbols)'}
          required
        />
        <Button
          value={'Create account'}
          type={'submit'}
          kind={'round'}
          loading={isLoading}
          disabled={isLoading}
          action={undefined}
        />
      </FormElement>
    </LoginFormMain>
  );
};

export default LoginForm;
