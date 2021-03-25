import styled from '@emotion/styled';

export const HomePageMain = styled.section`
  display: flex;
  background-color: var(--cl-bg);
  min-height: calc(100vh - 8rem);
  width: 100vw;

  & > div {
    flex: 1;
  }
`;

export const HomePageContainer = styled.div`
  max-width: 1170px;
  margin: 0 auto;
  padding: 0 2rem;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HomePageContent = styled.div`
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
