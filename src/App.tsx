import './App.scss';
import React, { Fragment, Suspense, lazy, useContext, useEffect } from 'react';

// router
import { Switch, Route, Redirect } from 'react-router-dom';

// components
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';

// pages
import CreateAccountPage from './pages/CreateAccountPage/CreateAccountPage';
import HomePage from './pages/HomePage/HomePage';
import ConfirmEmailPage from './pages/ConfirmEmailPage/ConfirmEmailPage';

// contexts
import AuthContext, { AuthContextTypes } from './contexts/AuthContext';

// styles
import { AppMain } from './App.styles';

const App = () => {
  const {
    isLogged,
    isEmailConfirmed,
    checkUserSession,
  } = useContext<AuthContextTypes>(AuthContext);

  useEffect(() => {
    checkUserSession();
  }, []);

  return (
    <Fragment>
      <Header />
      <AppMain>
        <Switch>
          <ErrorBoundary>
            <Route
              path="/email-confirm"
              render={() =>
                isLogged && !isEmailConfirmed ? (
                  <ConfirmEmailPage />
                ) : isLogged && isEmailConfirmed ? (
                  <Redirect to="/" />
                ) : (
                  <Redirect to="/create-account" />
                )
              }
            />
            <Route
              path="/create-account"
              render={() =>
                !isLogged && !isEmailConfirmed ? (
                  <CreateAccountPage />
                ) : isLogged && !isEmailConfirmed ? (
                  <Redirect to="/email-confirm" />
                ) : (
                  <Redirect to="/" />
                )
              }
            />
            <Route
              exact
              path="/"
              render={() =>
                isLogged && isEmailConfirmed ? (
                  <HomePage />
                ) : isLogged && !isEmailConfirmed ? (
                  <Redirect to="/email-confirm" />
                ) : (
                  <Redirect to="/create-account" />
                )
              }
            />
          </ErrorBoundary>
        </Switch>
      </AppMain>
      <Footer />
    </Fragment>
  );
};

export default App;
