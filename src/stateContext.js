import { useReducer } from "react";
import { createContext, useContext } from "react";
import { ProductsDatabase } from "./ProductsPage";
import { reducer } from "./stateReducer";
export const ReducerContext = createContext();

export const ReducerProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    cartList: [],
    wishList: [],
    productsList: ProductsDatabase,
    sortBy: null,
    filterBy: {
      filterNewProducts: false
    }
  });

  return (
    <ReducerContext.Provider value={{ state, dispatch }}>
      {children}
    </ReducerContext.Provider>
  );
};

export const useMyReducer = () => {
  return useContext(ReducerContext);
};
