import React from "react";

interface InputProps {
  name: string;
  inputValue: string | number | undefined;
  children: React.ReactNode;
}

function Input({name, inputValue, children }: InputProps) {
  return (
    <div>
      <label htmlFor={name}>
        {children}
      </label>
      <input type="text" readOnly value={inputValue ? inputValue : 'Não informado.'} name={name} />
    </div>
  );
}

export default Input;
