import "./Addresses.css";
import { useAddressContext } from "../../AllContext";
import { AddAddressModel } from "../../Cart/Checkout/AddressManagement/AddAddressModel/AddAddressModel";
import { useState } from "react";
export const Addresses = () => {
  const { addresses, setAddresses } = useAddressContext();
  const [showAddAddressModel, setShowAddAddressModel] = useState(false);
  return (
    <div className="profile_addresses">
      {showAddAddressModel && (
        <AddAddressModel
          setShowAddAddressModel={setShowAddAddressModel}
          addresses={addresses}
          setAddresses={setAddresses}
        />
      )}
      <div onClick={() => setShowAddAddressModel(true)} className="add-new-div">
        <span>+ Add New Address</span>
      </div>
      <div className="profile_address-cards">
        {addresses.map((address) => (
          <div className="address-each-card">
            <p className="address-each-card__heading">{address.name}</p>
            <br />
            <span>{address.address}</span>
            <br />
            <span>
              {address.city}, {address.state}
            </span>
            <br />
            <span>{address.country}</span>
            <span>
              {address.zip}, {address.mob}
            </span>
            <br />
          </div>
        ))}
      </div>
    </div>
  );
};
