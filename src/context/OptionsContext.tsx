import { useState, createContext, ReactNode } from 'react';

// start options
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

// goal options
type GoalOptionsType = {
  goalOptions: string[];
  setGoalOptions: React.Dispatch<React.SetStateAction<string[]>>;
};

export const GoalOptionsContext = createContext<GoalOptionsType>({
  goalOptions: [],
  setGoalOptions: () => {},
});

export const GoalOptionsProvider = ({ children }: { children: ReactNode }) => {
  const [goalOptions, setGoalOptions] = useState<string[]>([]);

  return (
    <GoalOptionsContext.Provider value={{ goalOptions, setGoalOptions }}>
      {children}
    </GoalOptionsContext.Provider>
  );
};
