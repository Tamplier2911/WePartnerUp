import './HomePage.scss';
import React from 'react';

// components
import PrimaryTitle from '../../components/PrimaryTitle/PrimaryTitle';
import Button from '../../components/Button/Button';

const HomePage = () => {
  return (
    <section id="home-page" className="home-page">
      <div className="container">
        <div className="home-page__content">
          <PrimaryTitle value={'Home page'} />
          <Button
            value={'Sign out'}
            type={'button'}
            kind={'round'}
            loading={false}
            disabled={false}
            action={undefined}
          />
        </div>
      </div>
    </section>
  );
};

export default HomePage;
