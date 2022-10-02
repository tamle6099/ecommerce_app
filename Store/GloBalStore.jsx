import React, { createContext, useReducer } from "react";
import reducers from "./Reduces";
export const DataContext = createContext();
export default function GloBalStore({ children }) {
  const initialState = { notify: {}, auth: {} };
  const [state, dispatch] = useReducer(reducers, initialState);
  return (
    <DataContext.Provider value={[state, dispatch]}>
      {children}
    </DataContext.Provider>
  );
}
