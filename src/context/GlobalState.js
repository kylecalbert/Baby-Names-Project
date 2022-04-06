import React, { createContext, useState } from "react";

export const GlobalContext = createContext();

///for other components to have access to global state
export const GlobalProvider = ({ children }) => {
  const [search, setSearch] = useState("");
  const [shortList, setShortList] = useState([]);

  return (
    <GlobalContext.Provider
      value={{
        search,
        setSearch,
        shortList,
        setShortList,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
