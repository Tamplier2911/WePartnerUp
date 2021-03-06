import styled from '@emotion/styled';

const sharedButtonStyles = `
  width: 100%;
  padding: 10px 20px;
  color: var(--cl-white);
  background-color: var(--cl-primary);
  border: 2px solid transparent;

  &:hover {
    background-color: var(--cl-white);
    border: 2px solid var(--cl-primary);
  }
`;

const disabledButtonStyles = `
  background-color: var(--cl-disabled) !important;
  &:hover {
    border: 2px solid transparent !important;
    color: var(--cl-white) !important;
  }

  & > .btn__loading {
    background: red !important;

    transition: background-color 0.3s;

    background: linear-gradient(
      to right,
      var(--cl-white) 10%,
      rgba(150, 60, 60, 0) 42%
    ) !important;

    &::after {
      background-color: var(--cl-disabled) !important;
    }
  }

  &:hover .btn__loading {
    background-color: var(--cl-white) !important;
    background: linear-gradient(
      to right,
      var(--cl-white) 10%,
      rgba(150, 60, 60, 0) 42%
    ) !important;
  }

  &:hover .btn__loading::before {
    background-color: var(--cl-white) !important;
  }

  &:hover .btn__loading::after {
    background-color: var(--cl-disabled) !important;
  }
`;

const getButtonStyle = ({ kind }: ButtonComponentProps) => {
  if (kind === 'square') {
    return sharedButtonStyles + `border-radius: 4px;`;
  } else if (kind === 'underline') {
    return `background-color: transparent;
            color: var(--cl-input-grey);
            text-decoration: underline;
            border: none;`;
  } else {
    return sharedButtonStyles + `border-radius: 40px;`;
  }
};

const getDisabledStyle = ({ disabled }: ButtonComponentProps) => {
  if (disabled) return disabledButtonStyles;
};

export const ButtonWrapper = styled.div``;

type ButtonComponentProps = {
  kind: string;
  disabled: boolean;
};

export const ButtonComponent = styled.button<ButtonComponentProps>`
  ${getButtonStyle}
  ${getDisabledStyle}
  cursor: pointer;
  font-size: 1.8rem;
  white-space: nowrap;
  font-weight: 600;
  display: flex;
  justify-content: center;
  outline: none;
  transition: color 0.3s, background-color 0.4s, border 0.3s;

  &:hover {
    color: var(--cl-primary);
  }

  &:hover .btn__loading {
    background-color: var(--cl-primary);
    background: linear-gradient(
      to right,
      var(--cl-primary) 10%,
      rgba(150, 60, 60, 0) 42%
    );
  }

  &:hover .btn__loading::before {
    background-color: var(--cl-primary);
  }

  &:hover .btn__loading::after {
    background-color: var(--cl-white);
  }

  @keyframes spin {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
`;

export const ButtonLoader = styled.div`
  text-indent: -9999em;
  width: 2.1rem;
  height: 2.1rem;
  border-radius: 50%;
  background: var(--cl-white);

  transition: background-color 0.3s;

  background: linear-gradient(
    to right,
    var(--cl-white) 10%,
    rgba(150, 60, 60, 0) 42%
  );
  position: relative;
  animation: spin 1.4s infinite linear;
  transform: translateZ(0);

  &:before {
    background: var(--cl-white);
    transition: background-color 0.3s;
    width: 50%;
    height: 50%;
    border-radius: 100% 0 0 0;
    position: absolute;
    top: 0;
    left: 0;
    content: '';
  }

  &:after {
    background: var(--cl-disabled);
    transition: background-color 0.3s;
    width: 75%;
    height: 75%;
    border-radius: 50%;
    content: '';
    margin: auto;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }
`;
