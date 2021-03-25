import './App.scss';
import React, { Fragment } from 'react';

// components
import Header from './components/Header/Header';

// pages
import CreateAccountPage from './pages/CreateAccountPage/CreateAccountPage';
import HomePage from './pages/HomePage/HomePage';
import ConfirmEmailPage from './pages/ConfirmEmailPage/ConfirmEmailPage';

const App = () => {
  return (
    <Fragment>
      <Header />
      <main>
        {/* <CreateAccountPage /> */}
        {/* <HomePage /> */}
        <ConfirmEmailPage />
      </main>
      <footer></footer>
    </Fragment>
  );
};

export default App;
