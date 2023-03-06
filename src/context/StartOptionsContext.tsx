import { useState, createContext, ReactNode } from 'react';

type StartOptionsType = {
  startOptions: string[];
  setStartOptions: React.Dispatch<React.SetStateAction<string[]>>;
};

export const StartOptionsContext = createContext<StartOptionsType>({
  startOptions: [],
  setStartOptions: () => {},
});

export const StartOptionsProvider = ({ children }: { children: ReactNode }) => {
  const [startOptions, setStartOptions] = useState<string[]>([]);

  return (
    <StartOptionsContext.Provider value={{ startOptions, setStartOptions }}>
      {children}
    </StartOptionsContext.Provider>
  );
};
