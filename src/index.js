import { StrictMode } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ReducerProvider } from "./stateContext";
import { BrowserRouter } from "react-router-dom";
import { ThemeContextProvider } from "./AllContext/themeContext";
import { LangContextProvider } from "./AllContext/languageContext";
import { LoginContextProvider } from "./AllContext/LoginContext";
import { AddressContextProvider } from "./AllContext/AddressContext";
const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <BrowserRouter>
      <ThemeContextProvider>
        <LangContextProvider>
          <ReducerProvider>
            <LoginContextProvider>
              <AddressContextProvider>
                <App />
              </AddressContextProvider>
            </LoginContextProvider>
          </ReducerProvider>
        </LangContextProvider>
      </ThemeContextProvider>
    </BrowserRouter>
  </StrictMode>,
  rootElement
);
