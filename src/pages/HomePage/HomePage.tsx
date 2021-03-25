// import './HomePage.scss';
import React, { useContext } from 'react';

// components
import PrimaryTitle from '../../components/PrimaryTitle/PrimaryTitle';
import Button from '../../components/Button/Button';

// contexts
import AuthContext, { AuthContextTypes } from '../../contexts/AuthContext';

// styles
import {
  HomePageMain,
  HomePageContainer,
  HomePageContent,
} from './HomePage.styles';

const HomePage = () => {
  const { logUserOut } = useContext<AuthContextTypes>(AuthContext);
  return (
    <HomePageMain className="home-page">
      <HomePageContainer>
        <HomePageContent>
          <PrimaryTitle value={'Home page'} />
          <Button
            value={'Sign out'}
            type={'button'}
            kind={'round'}
            loading={false}
            disabled={false}
            action={logUserOut}
          />
        </HomePageContent>
      </HomePageContainer>
    </HomePageMain>
  );
};

export default HomePage;
