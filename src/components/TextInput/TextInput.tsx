import './TextInput.scss';

import React from 'react';

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
    <div className="text-input">
      <label className="text-input__label">{label}</label>
      <input
        id={id}
        className="text-input__element"
        onChange={(e) => onChange(e)}
        {...otherProps}
      ></input>
      <span className="text-input__error">
        {errored ? errorText : ''} &nbsp;
      </span>
    </div>
  );
};

export default TextInput;
