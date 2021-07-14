import "./AddAddressModel.css";
import { useState } from "react";
import { Button } from "forkui-lib";
import { IndianStates } from "./StateDatabases/IndianStates";
import { USStates } from "./StateDatabases/USStates";
import { AustralianStates } from "./StateDatabases/AustralianStates";
export const AddAddressModel = ({
  setShowAddAddressModel,
  addresses,
  setAddresses
}) => {
  const initialAddress = {
    country: "India",
    state: null,
    name: null,
    address: null,
    city: null,
    zip: null,
    mobileNumber: null
  };
  const [newAddress, setNewAddress] = useState(initialAddress);
  const updateState = (stateSelected) => {
    setNewAddress({ ...newAddress, state: stateSelected });
  };
  const submitNewAddress = () => {
    setAddresses([...addresses, newAddress]);
    setShowAddAddressModel(false);
  };
  return (
    <div className="address-management-model">
      <h3>Add New Address</h3>
      <input
        onChange={(e) => setNewAddress({ ...newAddress, name: e.target.value })}
        type="text"
        placeholder="Enter Name"
      />
      <br />
      <select
        onChange={(e) =>
          setNewAddress({ ...newAddress, country: e.target.value })
        }
      >
        <option value="India">India</option>
        <option value="Australia">Australia</option>
        <option value="US">US</option>
      </select>
      <br />

      <input
        onChange={(e) =>
          setNewAddress({ ...newAddress, address: e.target.value })
        }
        type="text"
        placeholder="Enter House No, Street, Colony"
      />
      <br />
      <input
        onChange={(e) => setNewAddress({ ...newAddress, city: e.target.value })}
        type="text"
        placeholder="Enter City"
      />
      <br />
      {newAddress.country === "India" && (
        <IndianStates updateState={updateState} />
      )}
      {newAddress.country === "Australia" && (
        <AustralianStates updateState={updateState} />
      )}
      {newAddress.country === "US" && <USStates updateState={updateState} />}
      <input
        onChange={(e) => setNewAddress({ ...newAddress, zip: e.target.value })}
        type="text"
        placeholder="Enter Zip Code"
      />
      <br />
      <input
        onChange={(e) =>
          setNewAddress({ ...newAddress, mobileNumber: e.target.value })
        }
        type="tel"
        pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
        placeholder="Enter Mobile Number"
      />
      <br />
      <div className="address-model-buttons">
        <Button
          onClickHandler={submitNewAddress}
          margin="0.5rem"
          text="Submit"
        />

        <Button
          margin="0.5rem"
          onClickHandler={() => setShowAddAddressModel(false)}
          text="Cancel"
          variant="secondaryToPrimary"
        />
      </div>
    </div>
  );
};
