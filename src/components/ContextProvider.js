import React, { useState } from "react";

export const UserContext = React.createContext();


const ContextProvider = ({ children }) => {
  const [data, setData] = useState([]);
  return (
    <UserContext.Provider value={{ data, setData }}>
      {children}
    </UserContext.Provider>
  );
};

export default ContextProvider;
