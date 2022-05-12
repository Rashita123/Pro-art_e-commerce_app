export const AustralianStates = ({ updateState }) => {
  return (
    <div>
      <select name="state" onChange={(e) => updateState(e.target.value)}>
        <option value="ACT">Australian Capital Territory</option>
        <option value="NSW">New South Wales</option>
        <option value="NT ">Northern Territory</option>
        <option value="QLD">Queensland</option>
        <option value="SA ">South Australia</option>
        <option value="TAS">Tasmania</option>
        <option value="VIC">Victoria</option>
        <option value="WA ">Western Australia</option>
      </select>
    </div>
  );
};
