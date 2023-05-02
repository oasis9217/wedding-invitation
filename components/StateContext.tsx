import { createContext, useContext } from "react";

interface State {
  error: string | null,
  setError: Function
}

export const StateContext = createContext({} as State);

export const useStateContext = () => {
  return useContext(StateContext);
}