// import './Button.scss';
import React from 'react';

// styles
import { ButtonComponent, ButtonLoader, ButtonWrapper } from './Button.styles';

type CardProps = {
  value: string;
  type: 'button' | 'submit' | 'reset' | undefined;
  kind: string;
  action: Function | undefined;
  loading: boolean;
  disabled: boolean;
};

const Button = ({
  value,
  type,
  kind,
  action,
  loading,
  disabled,
}: CardProps) => {
  return (
    <ButtonWrapper>
      <ButtonComponent
        kind={kind}
        type={type}
        disabled={disabled}
        onClick={action ? (e) => action(e) : () => {}}
      >
        {loading ? <ButtonLoader /> : value}
      </ButtonComponent>
    </ButtonWrapper>
  );
};

export default Button;
