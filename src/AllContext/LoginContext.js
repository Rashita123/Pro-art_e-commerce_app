import { createContext, useContext, useEffect, useState } from "react";

const loginContext = createContext();

const currentUser = 
  {
    username: "rashitamehta",
    email: "rashita.neog@gmail.com",
  }
;

export const LoginContextProvider = ({ children }) => {

  const [user, setUser] = useState(currentUser);
  const [login, setLogin] = useState(false);
  useEffect(() => {
    const loginStatus = JSON.parse(localStorage?.getItem("ProArtLogin"));
    loginStatus?.login && setLogin(true);
  }, []);
  return (
    <loginContext.Provider value={{ login, setLogin, user, setUser }}>
      {children}
    </loginContext.Provider>
  );
};

export const useLoginContext = () => {
  return useContext(loginContext);
};
