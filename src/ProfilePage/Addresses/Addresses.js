import "./Addresses.css";
import axios from "axios";
import { useAddressContext } from "../../AllContext";
import { AddAddressModel } from "../../Cart/Checkout/AddressManagement/AddAddressModel/AddAddressModel";
import { useState, useEffect } from "react";
export const Addresses = () => {
  const { addresses, setAddresses } = useAddressContext();
  const [showAddAddressModel, setShowAddAddressModel] = useState(false);
  useEffect(() => {
    axios.get("https://proArt-BE.rashita.repl.co/address").then((response) => {
      if (response.status === 201) {
        setAddresses(response.data.addresses);
      }
    });
  }, []);
  return (
    <div className="profile_addresses">
      {showAddAddressModel && (
        <AddAddressModel
          setShowAddAddressModel={setShowAddAddressModel}
          addresses={addresses}
          setAddresses={setAddresses}
        />
      )}
      {addresses ? (
        <>
          <div
            onClick={() => setShowAddAddressModel(true)}
            className="add-new-div"
          >
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
                  {address.zip}, {address.mobileNumber}
                </span>
                <br />
              </div>
            ))}
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};
