// import './CreateAccountPage.scss';
import React from 'react';

// components
import LoginForm from '../../components/SignUpForm/SignUpForm';

// styles
import {
  CreateAccountMain,
  CreateAccoungContainer,
} from './CreateAccountPage.styles';

const CreateAccountPage = () => {
  return (
    <CreateAccountMain id="create-account">
      <CreateAccoungContainer>
        <LoginForm />
      </CreateAccoungContainer>
    </CreateAccountMain>
  );
};

export default CreateAccountPage;
