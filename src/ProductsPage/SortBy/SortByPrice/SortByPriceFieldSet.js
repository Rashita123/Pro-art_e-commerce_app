import { useMyReducer } from "../../../stateContext";
import { Button } from "forkui-lib";
export const SortByPriceFieldSet = () => {
  const { state, dispatch } = useMyReducer();
  return (
    <fieldset>
      <legend>Sort By Price</legend>
      <label>
        <input
          type="radio"
          checked={state.sortBy && state.sortBy === "price-low-to-high"}
          onChange={() =>
            dispatch({ type: "Sort", payload: "price-low-to-high" })
          }
        />
        Low To High
      </label>
      <label>
        <input
          type="radio"
          checked={state.sortBy && state.sortBy === "price-high-to-low"}
          onChange={() =>
            dispatch({ type: "Sort", payload: "price-high-to-low" })
          }
        />
        High To Low
      </label>
      <Button
        onClickHandler={() => dispatch({ type: "Sort", payload: null })}
        text="Reset"
        variant="secondaryToPrimary"
        size="sm"
        marginLeft="0.5rem"
      />
    </fieldset>
  );
};
