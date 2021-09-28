import React, { createContext, useReducer } from 'react';
import { Actions, ContextParams, FullContext } from './interfaces';

export default ({ reducer, actions, initialState }: ContextParams) => {
  const Context = createContext<any>(initialState);

  const Provider = ({ children }: { children: React.ReactNode }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const boundActions: { [key: string]: () => void } = {};
    for (let key in actions) {
      boundActions[key] = actions[key](dispatch);
    }

    return (
      <Context.Provider value={{ state, ...boundActions }}>
        {children}
      </Context.Provider>
    );
  };

  return { Context, Provider };
};
