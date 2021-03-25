import './Header.scss';
import React from 'react';

// svgs
import Logo from '../../assets/svg/logo.svg';
import Menu from '../../assets/svg/menu.svg';

// components
import Button from '../Button/Button';

const Header = () => {
  const type = Math.random() > 0.5 ? 'square' : 'round';
  return (
    <header className="header">
      <div className="header__content">
        <div className="header__content--left">
          <div className="header__content--lsvgwrap">
            <Logo />
          </div>
        </div>
        <div className="header__content--right">
          <ul className="header__content--ul">
            <li className="header__content--li">Find partner</li>
            <li className="header__content--li">Blog</li>
            <li className="header__content--li">Log In</li>
            <li className="header__content--li">
              <Button
                value={'Post a pitch'}
                type={'button'}
                kind={'square'}
                loading={false}
                disabled={false}
                action={(e: Event) => console.log(e)}
              />
            </li>
          </ul>
          <div className="header__content--rsvgwrap">
            <Menu />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
