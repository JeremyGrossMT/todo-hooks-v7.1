import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

const initialState = {
  tasks: [
    {
      id: 1,
      title: "Feed the cat to the dog",
      priority: 2,
      today: true,
      isComplete: false,
    },
    {
      id: 2,
      title: "Give the fish a bath",
      priority: 1,
      today: false,
      isComplete: false,
    },
    {
      id: 3,
      title: "Watch a snells for a race",
      priority: 3,
      today: true,
      isComplete: true,
    },
  ],
};

export const GlobalContext = createContext(initialState);

export const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <GlobalContext.Provider
      value={{
        tasks: state.tasks,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
