import styled from '@emotion/styled';
import { Global, css } from '@emotion/react';

export const AppMain = styled.main``;

export const GlobalStyles = Global;

export const globalStyles = css`
  :root {
    // TYPOGRAPHY
    --font-primary: 'Montserrat', monospace;

    // COLOR PALET
    --cl-font: #757373;
    --cl-font-secondary: #254353;
    --cl-primary: #57b3e4;

    --cl-bg: #f8f8f8;
    --cl-black: #000;
    --cl-white: #fff;
    --cl-grey: #bebebe;
    --cl-input-grey: rgba(37, 67, 83, 40);
    --cl-input-label: rgba(37, 67, 83, 0.75);
    --cl-disabled: rgba(87, 179, 228, 0.7);
    --cl-error: #ff2828;
    --cl-shadow: rgba(0, 0, 0, 0.623);

    // BREAKPOINTS
    --bp-tablet: 48em;
    --bp-mobile: 26.563em;

    // 768px / 16px = 48em
    // $tablet: 48em;

    // 425px / 16px = 26.5625em
    // $mobile: 26.563em;
  }
  // Z-INDEX

  // BASE
  *,
  *::before,
  *::after {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
  }

  html {
    box-sizing: border-box;
    font-size: 62.5%;

    // 100% / 16px * 10px = 1rem = 62.5% 10px
    // 100% / 16px * 9px = 1rem = 56.25% 9px
    // 100% / 16px * 8px = 1rem = 50% 8px

    @media only screen and (max-width: 48em) {
      font-size: 56.25%;
    }
    @media only screen and (max-width: 26.563em) {
      font-size: 50%;
    }
  }

  body {
    font-family: var(--font-primary), -apple-system, BlinkMacSystemFont,
      'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans',
      'Droid Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    font-size: 1.6rem;
    font-weight: 400;
    line-height: 1.6;
    color: var(--cl-font);
    // background-color: var(--cl-bg);
    overflow-x: hidden;

    &::-webkit-scrollbar {
      width: 0.8rem;
      background-color: var(--cl-bg);
      border-radius: 5rem;
    }
    &::-webkit-scrollbar-thumb {
      background-image: linear-gradient(
        to bottom,
        var(--cl-black),
        var(--cl-primary)
      );
      border-radius: 5rem;
    }
    &::-webkit-scrollbar-track {
      -webkit-box-shadow: inset 0 0 6px var(--cl-scroll-shadow);
      box-shadow: inset 0 0 6px var(--cl-scroll-shadow);
    }
  }

  // SELECTION
  ::selection {
    background-color: var(--cl-font);
    color: var(--cl-white);
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
`;
