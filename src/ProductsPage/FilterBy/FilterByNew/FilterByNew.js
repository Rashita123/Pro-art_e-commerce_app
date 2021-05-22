import "./FilterByNew.css";
import { useMyReducer } from ".././.././../stateContext";
export const FilterByNew = () => {
  const { state, dispatch } = useMyReducer();
  return (
    <fieldset>
      <legend>Filter By</legend>
      <label>
        <input
          type="checkbox"
          checked={state.filterBy.filterNewProducts}
          onChange={() =>
            dispatch({ type: "filter", payload: "filter-new-products" })
          }
        />
        Only New Products
      </label>
    </fieldset>
  );
};
