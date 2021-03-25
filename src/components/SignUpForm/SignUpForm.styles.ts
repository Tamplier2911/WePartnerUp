import styled from '@emotion/styled';

export const LoginFormMain = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  max-width: 450px;

  @media only screen and (max-width: 320px) {
    padding: 0rem;
  }

  & > h2 {
    margin-bottom: 2rem;
  }
`;

export const FormElement = styled.form`
  display: flex;
  flex-direction: column;

  & > div:not(:last-child) {
    margin-bottom: 0.4rem;
  }

  & > div:nth-of-type(2) {
    margin-bottom: 2rem;
  }
`;
