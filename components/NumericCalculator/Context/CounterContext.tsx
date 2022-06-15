import { useState, createContext } from "react";
import { CounterState } from "../types";

interface CounterProviderprops {
  children?: React.ReactNode;
}

export const CounterContext = createContext<CounterState>({
  counter: 0,
  setCounter: () => "",
});

export const CounterProvider: React.FC<CounterProviderprops> = ({
  children,
}) => {
  const [counter, setCounter] = useState<number>(0);

  return (
    <CounterContext.Provider value={{ counter, setCounter }}>
      {children}
    </CounterContext.Provider>
  );
};
