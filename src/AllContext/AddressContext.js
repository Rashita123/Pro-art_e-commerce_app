import { useState, createContext, useContext } from "react";
import { AddressesDB } from "../Cart/Checkout/AddressManagement/AddressesDB";
const addressContext = createContext();

export const AddressContextProvider = ({ children }) => {
  const [addresses, setAddresses] = useState(null);
  return (
    <addressContext.Provider value={{ addresses, setAddresses }}>
      {children}
    </addressContext.Provider>
  );
};

export const useAddressContext = () => {
  return useContext(addressContext);
};
