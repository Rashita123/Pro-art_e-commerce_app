import "./AddressCard.css";
import { Button } from "forkui-lib";
export const AddressCard = ({
  id,
  name,
  address,
  city,
  state,
  country,
  zip,
  mobileNumber
}) => {
  return (
    <div className="address-card">
      <input type="radio" name="address" value={name} checked />
      <label for={name}>
        <>
          <span className="address-card-name">{name}</span>
          <span className="address-card-mob">{mobileNumber}</span>
          <p>
            {address}, {city}, {state}, {country}
          </p>
          <h4>{zip}</h4>
          <div className="address-card-buttons">
            <Button
              margin="0.5rem"
              text="Edit"
              size="xs"
              variant="secondaryToPrimary"
            />
            <Button
              margin="0.5rem"
              text="Remove"
              size="xs"
              colorScheme="red"
              variant="secondaryToPrimary"
            />
          </div>
        </>
      </label>
      <br />
    </div>
  );
};
