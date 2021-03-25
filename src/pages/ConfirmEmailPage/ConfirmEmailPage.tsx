import './ConfirmEmailPage.scss';
import React from 'react';

// svg
import Mail from '../../assets/svg/mail.svg';

// components
import PrimaryTitle from '../../components/PrimaryTitle/PrimaryTitle';
import Button from '../../components/Button/Button';

const ConfirmEmailPage = () => {
  return (
    <section id="confirm-email" className="confirm-email">
      <div className="container">
        <div className="confirm-email__left">
          <div className="confirm-email__block">
            <div className="confirm-email__textblock">
              <PrimaryTitle value={'Confirm account'} />
              <div className="confirm-email__textwrap">
                <p className="confirm-email__text">
                  Please confirm your email by clicking on the link in the
                  confirmation email that we sent to{' '}
                  <span className="confirm-email__email">
                    ozzy@softcery.com
                  </span>
                </p>
              </div>
            </div>
            <Button
              value={'Reset in 60 seconds'}
              type={'button'}
              kind={'round'}
              loading={true}
              disabled={true}
              action={undefined}
            />
            <Button
              value={'Sign out'}
              type={'button'}
              kind={'underline'}
              loading={false}
              disabled={false}
              action={undefined}
            />
          </div>
        </div>
        <div className="confirm-email__right">
          <div className="confirm-email__svgwrap">
            <Mail />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConfirmEmailPage;
