import { useContext, createContext, useState } from "react";

import { languageStrings } from "../languageDatabase";
const LanguageContext = createContext();

export const LanguageContextProvider = ({ children }) => {
  const [language, setLanguage] = useState(languageStrings.English);
  const setLanguageString = (lang) => {
    setLanguage(languageStrings[lang]);
  };
  return (
    <LanguageContext.Provider value={{ language, setLanguageString }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguageContext = () => {
  return useContext(LanguageContext);
};
