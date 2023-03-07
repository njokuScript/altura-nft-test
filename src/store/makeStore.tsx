import React, { ReactNode } from 'react';

export const makeStore = (
  initial_state: object,
  reducer: (state: any, action: any) => any
) => {
  const StoreCtx = React.createContext<any>(initial_state);
  const DispatchCtx = React.createContext<React.Dispatch<any>>(() => null);

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

  return { useDispatch, useStore, Provider, Consumer: StoreCtx.Consumer };
};
