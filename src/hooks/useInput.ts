import { useState } from 'react';

const useInput = (initialState: string) => {
  const [input, setInput] = useState<string>(initialState);

  const handlInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  const clearInput = () => {
    setInput('');
  };

  return { input, handlInput, clearInput };
};

export default useInput;
