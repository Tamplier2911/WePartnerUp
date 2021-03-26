import React, { useState, createContext } from 'react';

// firebase
import { auth } from '../firebase/firebase.config';
import { User } from '@firebase/auth-types';

// context initial values
const Context = createContext<AuthContextTypes>({
  authObject: null,
  isLoading: false,
  isLogged: false,
  isEmailConfirmed: false,
  errorMessage: '',
  signUpWithEmailAndPassword: () => {},
  logUserOut: () => {},
  checkUserSession: () => {},
  logUserInWithEmailAndPassword: () => {},
});

export type AuthContextTypes = {
  authObject: User | null;
  isLoading: boolean;
  isLogged: boolean;
  isEmailConfirmed: boolean;
  errorMessage: string;
  signUpWithEmailAndPassword: Function;
  logUserOut: Function;
  checkUserSession: Function;
  logUserInWithEmailAndPassword: Function;
};

type AuthState = {
  authObject: User | null;
  isLoading: boolean;
  isLogged: boolean;
  isEmailConfirmed: boolean;
  errorMessage: string;
};

type AuthContextProps = {
  children: JSX.Element;
};

export const AuthContext = ({ children }: AuthContextProps) => {
  const [authData, setAuthData] = useState<AuthState>({
    authObject: null,
    isLoading: false,
    isLogged: false,
    isEmailConfirmed: false,
    errorMessage: '',
  });

  const {
    authObject,
    isLoading,
    isLogged,
    isEmailConfirmed,
    errorMessage,
  } = authData;

  // spin loader when any user action starts
  const userAuthActionStart = () => {
    setAuthData({ ...authData, isLoading: true });
  };

  // state clean up and error hold
  const userAuthActionFail = (errMessage: string) => {
    setAuthData({
      ...authData,
      authObject: null,
      isLoading: false,
      isLogged: false,
      isEmailConfirmed: false,
      errorMessage: errMessage,
    });
    if (errMessage) alert(errMessage);
  };

  // try to sign up with email and password
  const signUpWithEmailAndPassword = async (e: string, p: string) => {
    try {
      // spin loader
      userAuthActionStart();

      // sign up with email and password
      const { user } = await auth.createUserWithEmailAndPassword(e, p);

      // send email verification
      await user?.sendEmailVerification();

      // load user object
      checkUserSession();
    } catch (e) {
      userAuthActionFail(e.message);
    }
  };

  // login functionality
  const logUserInWithEmailAndPassword = async (e: string, p: string) => {
    try {
      // spin loader
      userAuthActionStart();

      // login
      await auth.signInWithEmailAndPassword(e, p);

      // load user object
      checkUserSession();
    } catch (e) {
      userAuthActionFail(e.message);
    }
  };

  // user logged out successfully
  const logUserOutSuccess = () => {
    setAuthData({
      ...authData,
      authObject: null,
      isLoading: false,
      isLogged: false,
      isEmailConfirmed: false,
      errorMessage: '',
    });
  };

  // log user out
  const logUserOut = async () => {
    try {
      // spin loader
      userAuthActionStart();

      // log out
      await auth.signOut();

      // clean up state
      logUserOutSuccess();
    } catch (e) {
      userAuthActionFail(e.message);
    }
  };

  // user auth object fetched successfully
  const checkUserSessionSuccess = (user: User) => {
    setAuthData({
      ...authData,
      authObject: user,
      isLoading: false,
      isLogged: true,
      isEmailConfirmed: user.emailVerified,
      errorMessage: '',
    });
  };

  // auth fetcher
  const fetchAuthObject = (): Promise<User | null> => {
    return new Promise((res, rej) => {
      const unsubscribe = auth.onAuthStateChanged((auth) => {
        unsubscribe();
        res(auth);
      }, rej);
    });
  };

  // try to fetch auth object
  const checkUserSession = async () => {
    try {
      // spin loader
      userAuthActionStart();

      // wait for used object
      const user = await fetchAuthObject();
      if (user) {
        // load user in satate
        checkUserSessionSuccess(user);

        // keep checking for users email verification
        checkEmailVerification();
      } else userAuthActionFail('');
    } catch (e) {
      userAuthActionFail(e.message);
    }
  };

  // keep reloading user object every 4 seconds untill email is verified
  const checkEmailVerification = async () => {
    try {
      // try to fetch user object
      const user = await fetchAuthObject();
      if (user) {
        // if we get it, check if user is verified email
        if (!user.emailVerified) {
          // if not keep checking recursively
          setTimeout(() => {
            user.reload();
            checkEmailVerification();
          }, 4000);
        } else {
          // else load new object to state
          checkUserSessionSuccess(user);
        }
        // if no user session found return
      } else userAuthActionFail('');
    } catch (e) {
      userAuthActionFail(e.message);
    }
  };

  return (
    <Context.Provider
      value={{
        authObject,
        isLoading,
        isLogged,
        isEmailConfirmed,
        errorMessage,
        signUpWithEmailAndPassword,
        logUserOut,
        checkUserSession,
        logUserInWithEmailAndPassword,
      }}
    >
      {children ? children : null}
    </Context.Provider>
  );
};

export default Context;
