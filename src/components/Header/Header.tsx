// import './Header.scss';
import React from 'react';

// svgs
import LogoSVG from '../../assets/svg/logo.svg';
import MenuSVG from '../../assets/svg/menu.svg';

// components
import Button from '../Button/Button';

// styles
import {
  HeaderMain,
  HeaderContent,
  HeaderContentLeft,
  HeaderContentLSvgWrap,
  HeaderContentRight,
  HeaderContentRSvgWrap,
  HeaderContentUl,
  HeaderContentLi,
} from './Header.styles';

const Header = () => {
  return (
    <HeaderMain>
      <HeaderContent>
        <HeaderContentLeft>
          <HeaderContentLSvgWrap>
            <LogoSVG />
          </HeaderContentLSvgWrap>
        </HeaderContentLeft>
        <HeaderContentRight>
          <HeaderContentUl>
            <HeaderContentLi>Find partner</HeaderContentLi>
            <HeaderContentLi>Blog</HeaderContentLi>
            <HeaderContentLi>Log In</HeaderContentLi>
            <HeaderContentLi>
              <Button
                value={'Post a pitch'}
                type={'button'}
                kind={'square'}
                loading={false}
                disabled={false}
                action={undefined}
              />
            </HeaderContentLi>
          </HeaderContentUl>
          <HeaderContentRSvgWrap>
            <MenuSVG />
          </HeaderContentRSvgWrap>
        </HeaderContentRight>
      </HeaderContent>
    </HeaderMain>
  );
};

export default Header;
