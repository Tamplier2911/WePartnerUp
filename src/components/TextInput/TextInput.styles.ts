import styled from '@emotion/styled';

export const TextInputMain = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TextInputLabel = styled.label`
  font-weight: 600;
  color: var(--cl-font-secondary);
`;

export const TextInputElement = styled.input`
  font-size: 1.6rem;
  font-weight: 400;
  font-family: var(--font-primary);
  color: var(--cl-primary);
  letter-spacing: 1px;

  padding: 1rem 2rem;
  border: none;
  outline: none;

  border: 1px solid var(--cl-grey);
  border-radius: 4px;

  &::placeholder {
    color: var(--cl-grey);
    opacity: 1;
  }
`;

export const TextInputError = styled.span`
  font-size: 1.4rem;
  color: var(--cl-error);
`;
