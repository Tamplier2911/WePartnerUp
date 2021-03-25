import './LoginForm.scss';
import React, { useState } from 'react';

// components
import PrimaryTitle from '../PrimaryTitle/PrimaryTitle';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';

const LoginForm = () => {
  const [userCredentials, setUserCredentials] = useState({
    email: '',
    password: '',
  });

  const { email, password } = userCredentials;

  const [fieldValidation, setFieldValidation] = useState({
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
    console.log(value);
    setUserCredentials({ ...userCredentials, [name]: value });
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // validate and send
    console.log(userCredentials);
    setUserCredentials({ email: '', password: '' });
  };

  return (
    <div className="login-form">
      <PrimaryTitle value={'Create account'} />
      <form
        className="login-form__element"
        autoComplete="off"
        onSubmit={onSubmit}
      >
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
          loading={false}
          disabled={false}
          action={undefined}
        />
      </form>
    </div>
  );
};

export default LoginForm;
