import { createContext, useContext, useEffect, useState } from "react";

const loginContext = createContext();

const intialUsers = [
  {
    username: "rashitamehta",
    email: "rashita.neog@gmail.com",
    password: "Rashita@neog"
  }
];

export const LoginContextProvider = ({ children }) => {
  const [users, setUsers] = useState(intialUsers);
  const [login, setLogin] = useState(false);
  useEffect(() => {
    const loginStatus = JSON.parse(localStorage?.getItem("ProArtLogin"));
    loginStatus?.login && setLogin(true);
  }, []);
  return (
    <loginContext.Provider value={{ login, setLogin, users, setUsers }}>
      {children}
    </loginContext.Provider>
  );
};

export const useLoginContext = () => {
  return useContext(loginContext);
};
