import { useState } from "react";

export const useInput = <T extends Object>(form: T) => {

  const [state, setState] = useState(form);

  const onChange = (value: string, name: keyof T) => {
    setState({
      ...state,
      [name]: value,
    });
  };

  return {
    ...state,
    form: state,
    onChange,
  };
};
