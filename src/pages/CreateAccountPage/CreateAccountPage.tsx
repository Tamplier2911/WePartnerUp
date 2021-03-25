import './CreateAccountPage.scss';
import React from 'react';

import LoginForm from '../../components/LoginForm/LoginForm';

const CreateAccountPage = () => {
  return (
    <section id="create-account" className="create-account">
      <div className="container">
        <LoginForm />
      </div>
    </section>
  );
};

export default CreateAccountPage;
