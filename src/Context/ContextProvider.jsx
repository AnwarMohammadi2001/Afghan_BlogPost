// ContextProvider.js
import React, { createContext, useContext } from "react";
import { postItem } from "../data/Posts";

export const contextStore = createContext();

const ContextProvider = ({ children }) => {
  return (
    <contextStore.Provider value={postItem}>{children}</contextStore.Provider>
  );
};

export default ContextProvider;
