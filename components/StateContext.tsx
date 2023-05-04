import { createContext, useContext } from "react";

export interface Message {
  id?: string;
  writer: string;
  message: string;
  createdAt?: string;
}

interface State {
  error: string | null,
  setError: Function
  messages?: Message[]
  setMessages?: Function
}

export const StateContext = createContext({} as State);

export const useStateContext = () => {
  return useContext(StateContext);
}