import { StrictMode } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ReducerProvider } from "./stateContext";
import { BrowserRouter } from "react-router-dom";
import { ThemeContextProvider } from "./AllContext/themeContext";
import { LanguageContextProvider } from "./AllContext/languageContext";
import { LoginContextProvider } from "./AllContext/LoginContext";
import { AddressContextProvider } from "./AllContext/AddressContext";
const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <BrowserRouter>
      <ThemeContextProvider>
        <LanguageContextProvider>
          <ReducerProvider>
            <LoginContextProvider>
              <AddressContextProvider>
                <App />
              </AddressContextProvider>
            </LoginContextProvider>
          </ReducerProvider>
        </LanguageContextProvider>
      </ThemeContextProvider>
    </BrowserRouter>
  </StrictMode>,
  rootElement
);
