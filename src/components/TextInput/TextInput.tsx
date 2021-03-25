// import './TextInput.scss';
import React from 'react';

// styles
import {
  TextInputMain,
  TextInputLabel,
  TextInputElement,
  TextInputError,
} from './TextInput.styles';

type TextInputProps = {
  onChange: Function;
  name: string;
  value: string;
  label: string;
  type: string;
  id: string;
  required: boolean;
  errored: boolean;
  errorText: string;
  placeholder: string;
};

const TextInput = ({
  onChange,
  label,
  id,
  errored,
  errorText,
  ...otherProps
}: TextInputProps) => {
  return (
    <TextInputMain>
      <TextInputLabel>{label}</TextInputLabel>
      <TextInputElement id={id} onChange={(e) => onChange(e)} {...otherProps} />
      <TextInputError>{errored ? errorText : ''} &nbsp;</TextInputError>
    </TextInputMain>
  );
};

export default TextInput;
