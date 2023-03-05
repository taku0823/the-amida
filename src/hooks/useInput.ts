import { useState } from 'react';

const useInput = (initialState: string | number) => {
  const [input, setInput] = useState<string | number>(initialState);

  const handlInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  const clearInput = () => {
    setInput('');
  };

  return { input, handlInput, clearInput };
};

export default useInput;
