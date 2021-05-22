import { useContext, createContext, useState } from "react";

import { languageStrings } from "../languageDatabase";
const LangContext = createContext();

export const LangContextProvider = ({ children }) => {
  const [language, setLanguage] = useState(languageStrings.English);
  const setLanguageString = (lang) => {
    setLanguage(languageStrings[lang]);
  };
  return (
    <LangContext.Provider value={{ language, setLanguageString }}>
      {children}
    </LangContext.Provider>
  );
};

export const useLangContext = () => {
  return useContext(LangContext);
};
