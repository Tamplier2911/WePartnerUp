import styled from '@emotion/styled';

export const ConfirmEmailMain = styled.section`
  display: flex;
  background-color: var(--cl-bg);
  min-height: calc(100vh - 8rem);
  width: 100vw;

  & > div {
    flex: 1;
  }
`;

export const ConfirmEmailContainer = styled.div`
  max-width: 1170px;
  margin: 0 auto;
  padding: 0 2rem;

  display: flex;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ConfirmEmailLeft = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 768px) {
    order: 2;
  }
`;

export const ConfirmEmailBlock = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  max-width: 450px;

  & > div:nth-of-type(2) {
    margin-bottom: 2rem;
  }

  & > div:nth-of-type(3) {
    display: flex;
    justify-content: center;
  }

  & > div:nth-of-type(3) button {
    font-size: 1.4rem;
  }

  @media only screen and (max-width: 320px) {
    padding: 0rem;
  }
`;

export const ConfirmEmailTextBlock = styled.div`
  margin-bottom: 3rem;
`;

export const ConfirmEmailTextWrap = styled.div`
  display: flex;
  justify-content: center;
`;

export const ConfirmEmailText = styled.p`
  flex: 0 1 72%;
  font-size: 1.4rem;
  font-weight: 600;
  text-align: center;
`;

export const ConfirmEmailMail = styled.span`
  color: var(--cl-input-grey);
`;

export const ConfirmEmailRight = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 768px) {
    order: 1;
  }
`;

export const ConfirmEmailSvgWrap = styled.div`
  height: 40rem;

  @media only screen and (max-width: 964px) {
    height: 30rem;
  }

  @media only screen and (max-width: 768px) {
    height: 20rem;
  }

  & > svg {
    height: 100%;
    object-fit: cover;
  }
`;
