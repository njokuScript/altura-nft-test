import React, { ReactNode } from 'react';
import { IAction, INFTState } from './types';

export const makeStore = (
  initial_state: INFTState,
  reducer: (state: INFTState, action: IAction) => any
) => {
  const StoreCtx = React.createContext<INFTState>(initial_state);
  const DispatchCtx = React.createContext<React.Dispatch<any>>(() => {});

  const Provider = ({ children }: { children: ReactNode }) => {
    const [store, dispatch] = React.useReducer(reducer, initial_state);

    return (
      <DispatchCtx.Provider value={dispatch}>
        <StoreCtx.Provider value={store}>{children}</StoreCtx.Provider>
      </DispatchCtx.Provider>
    );
  };

  const useStore = () => React.useContext(StoreCtx);
  const useDispatch = () => React.useContext(DispatchCtx);

  if (!useStore || !useDispatch) {
    throw new Error('can not call context outside the provider');
  }

  return { useDispatch, useStore, Provider, Consumer: StoreCtx.Consumer };
};
