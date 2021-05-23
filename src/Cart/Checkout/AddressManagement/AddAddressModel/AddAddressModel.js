import "./AddAddressModel.css";
import { useState } from "react";
import { Button } from "forkui-lib";
import { IndianStates } from "./StateDatabases/IndianStates";
import { USStates } from "./StateDatabases/USStates";
import { AustralianStates } from "./StateDatabases/AustralianStates";
import { Link } from "react-router-dom";
export const AddAddressModel = ({
  setShowAddAddressModel,
  addresses,
  setAddresses
}) => {
  const [country, setCountry] = useState("India");
  const [state, setState] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [zip, setZip] = useState(0);
  const [mob, setMob] = useState(0);
  const updateState = (stateSelected) => {
    setState(stateSelected);
  };
  const submitNewAddress = () => {
    setAddresses([
      ...addresses,
      {
        id: addresses.length + 1,
        country,
        state,
        name,
        address,
        city,
        zip,
        mob
      }
    ]);
  };
  return (
    <div className="address-management-model">
      <h3>Add New Address</h3>
      <input
        onChange={(e) => setName(e.target.value)}
        type="text"
        placeholder="Enter Name"
      />
      <br />
      <select onChange={(e) => setCountry(e.target.value)}>
        <option value="India">India</option>
        <option value="Australia">Australia</option>
        <option value="US">US</option>
      </select>
      <br />

      <input
        onChange={(e) => setAddress(e.target.value)}
        type="text"
        placeholder="Enter House No, Street, Colony"
      />
      <br />
      <input
        onChange={(e) => setCity(e.target.value)}
        type="text"
        placeholder="Enter City"
      />
      <br />
      {country === "India" && <IndianStates updateState={updateState} />}
      {country === "Australia" && (
        <AustralianStates updateState={updateState} />
      )}
      {country === "US" && <USStates updateState={updateState} />}
      <input
        onChange={(e) => setZip(e.target.value)}
        type="text"
        placeholder="Enter Zip Code"
      />
      <br />
      <input
        onChange={(e) => setMob(e.target.value)}
        type="tel"
        pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
        placeholder="Enter Mobile Number"
      />
      <br />
      <div className="address-model-buttons">
        <Button
          onClickHandler={() => {
            submitNewAddress();
            setShowAddAddressModel(false);
          }}
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
