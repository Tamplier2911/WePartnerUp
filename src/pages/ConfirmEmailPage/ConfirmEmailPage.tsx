// import './ConfirmEmailPage.scss';
import React, { useContext, useState, useEffect } from 'react';

// svg
import MailSVG from '../../assets/svg/mail.svg';

// components
import PrimaryTitle from '../../components/PrimaryTitle/PrimaryTitle';
import Button from '../../components/Button/Button';

// contexts
import AuthContext, { AuthContextTypes } from '../../contexts/AuthContext';

// styles
import {
  ConfirmEmailMain,
  ConfirmEmailContainer,
  ConfirmEmailLeft,
  ConfirmEmailBlock,
  ConfirmEmailTextBlock,
  ConfirmEmailTextWrap,
  ConfirmEmailText,
  ConfirmEmailMail,
  ConfirmEmailRight,
  ConfirmEmailSvgWrap,
} from './ConfirmEmailPage.styles';

const ConfirmEmailPage = () => {
  const { isLoading, logUserOut, authObject } = useContext<AuthContextTypes>(
    AuthContext
  );

  const [timer, setTimer] = useState<number>(
    Number(localStorage.getItem(authObject?.uid || '')) || 60
  );

  const btnDisabled = timer > 0 ? true : false;

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (timer > 0) {
        setTimer((timer) => timer - 1);
      } else clearInterval(intervalId);
    }, 1000);

    return () => {
      clearInterval(intervalId);
      localStorage.setItem(authObject?.uid || '', timer.toString());
    };
  }, [timer]);

  const verifyUserEmail = () => {
    authObject?.sendEmailVerification();
    setTimer(60);
  };

  return (
    <ConfirmEmailMain id="confirm-email">
      <ConfirmEmailContainer>
        <ConfirmEmailLeft>
          <ConfirmEmailBlock>
            <ConfirmEmailTextBlock>
              <PrimaryTitle value={'Confirm account'} />
              <ConfirmEmailTextWrap>
                <ConfirmEmailText>
                  Please confirm your email by clicking on the link in the
                  confirmation email that we sent to{' '}
                  <ConfirmEmailMail>{authObject?.email}</ConfirmEmailMail>
                </ConfirmEmailText>
              </ConfirmEmailTextWrap>
            </ConfirmEmailTextBlock>
            <Button
              value={btnDisabled ? `Resend in ${timer} seconds` : 'Resend'}
              type={'button'}
              kind={'round'}
              loading={isLoading}
              disabled={btnDisabled}
              action={verifyUserEmail}
            />
            <Button
              value={'Sign out'}
              type={'button'}
              kind={'underline'}
              loading={false}
              disabled={false}
              action={logUserOut}
            />
          </ConfirmEmailBlock>
        </ConfirmEmailLeft>
        <ConfirmEmailRight>
          <ConfirmEmailSvgWrap>
            <MailSVG />
          </ConfirmEmailSvgWrap>
        </ConfirmEmailRight>
      </ConfirmEmailContainer>
    </ConfirmEmailMain>
  );
};

export default ConfirmEmailPage;
