import { createContext, useContext } from "react";
import { Message } from '@/pages'

interface State {
  messages: Message[] | any,
  error: string | null,
  setMessages: Function
  setError: Function
}

export const StateContext = createContext({} as State);

export const useStateContext = () => {
  return useContext(StateContext);
}