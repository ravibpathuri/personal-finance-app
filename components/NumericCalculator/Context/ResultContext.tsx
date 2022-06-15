import { createContext, useState } from "react";
import { ResultState } from "../types";

interface ResultProviderprops {
  children?: React.ReactNode;
}

export const ResultContext = createContext<ResultState>({
  result: "",
  setResult: () => 0,
});

export const ResultProvider: React.FC<ResultProviderprops> = ({ children }) => {
  const [result, setResult] = useState<string>("  ");

  return (
    <ResultContext.Provider value={{ result, setResult }}>
      {children}
    </ResultContext.Provider>
  );
};
