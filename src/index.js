import { StrictMode } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ReducerProvider } from "./stateContext";
import { BrowserRouter } from "react-router-dom";
import {
  AddressContextProvider,
  LoginContextProvider,
  LanguageContextProvider,
  ThemeContextProvider
} from "./AllContext";
import { ScrollToTop } from "./ScrollToTop";
const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <BrowserRouter>
      <ThemeContextProvider>
        <LanguageContextProvider>
          <ReducerProvider>
            <LoginContextProvider>
              <AddressContextProvider>
                <ScrollToTop />
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
