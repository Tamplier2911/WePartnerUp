import styled from '@emotion/styled';

export const ErrorBoundaryMain = styled.section`
  display: flex;
  background-color: var(--cl-bg);
  min-height: calc(100vh - 8rem);
  width: 100vw;

  & > div {
    flex: 1;
  }
`;

export const ErrorBoundaryContainer = styled.div`
  max-width: 1170px;
  margin: 0 auto;
  padding: 0 2rem;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ErrorBoundaryText = styled.p`
  font-size: 2rem;
  color: var(--cl-input-grey);
`;
