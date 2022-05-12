import "./AddressManagement.css";
import { AddAddressModel } from "./AddAddressModel/AddAddressModel";
import { AddressCard } from "./AddressCard/AddressCard";
import { Button } from "forkui-lib";
import { useState } from "react";
import { useLanguageContext, useAddressContext } from "../../../AllContext";
import { Link } from "react-router-dom";
export const AddressManagement = () => {
  const { language } = useLanguageContext();
  const { addresses, setAddresses } = useAddressContext();
  const [showAddAddressModel, setShowAddAddressModel] = useState(false);
  return (
    <div className="address-management-div">
      <h2>{language.selectDeliveryAddress}</h2>
      {addresses.map((address) => (
        <AddressCard {...address} />
      ))}
      <div className="address-buttons">
        <Link to="/card-details">
          <Button margin="0.5rem" text="Deliver Here" />
        </Link>
        <Button
          onClickHandler={() => setShowAddAddressModel(true)}
          margin="0.5rem"
          text="+ Add Address"
          variant="secondaryToPrimary"
        />
      </div>
      {showAddAddressModel && (
        <AddAddressModel
          setShowAddAddressModel={setShowAddAddressModel}
          addresses={addresses}
          setAddresses={setAddresses}
        />
      )}
    </div>
  );
};
