import React, { createContext, useContext, useReducer } from "react";
import { membersReducer, membersInitialState, MembersState, MembersActions } from "./reducer";

const MembersStateContext = createContext<MembersState | undefined>(undefined);

export const useMembersState = () => useContext(MembersStateContext);
export const useMembersDispatch = () => useContext(MembersDispatchContext);

type MembersDispatch = React.Dispatch<MembersActions>;
const MembersDispatchContext = createContext<MembersDispatch | undefined>(undefined);

export const MembersProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(membersReducer, membersInitialState);

  // Next, I'll pass the `dispatch` object as value of this MembersDispatchContext.

  return (
    <MembersStateContext.Provider value={state}>
      <MembersDispatchContext.Provider value={dispatch}>
        {children}
      </MembersDispatchContext.Provider>
    </MembersStateContext.Provider>
  );
};