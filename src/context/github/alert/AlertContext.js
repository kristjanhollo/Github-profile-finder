import { createContext, useReducer } from "react";
import alertReducer from './AlertReducer'

const AlertContext = createContext();

export const AlertProvider = ({children}) => {
  const initialState = null;

  const [state, distpatch] = useReducer(alertReducer, initialState);

  const setAlert = (msg, type) => {
    dispatchEvent({
      type: 'SET_ALERT',
      payload: {msg, type},
    })

    setTimeout(() => distpatch({ type: 'REMOVE_ALERT'}), 3000);
  }

  return <AlertContext.Provider value={{ alert: state, setAlert }}>
    {children}
  </AlertContext.Provider>
}

export default AlertContext;