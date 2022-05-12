import "./ProductsPage.css";
import { ProductCard } from "../Cards";
import { useMyReducer } from "../stateContext";
import { SortByPriceFieldSet } from "./SortBy";
import { FilterByNew } from "./FilterBy";
export const ProductsPage = () => {
  const { state, dispatch } = useMyReducer();

  const getSortedData = (sortBy, data) => {
    if (sortBy === "price-low-to-high") {
      return data.sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-high-to-low") {
      return data.sort((a, b) => b.price - a.price);
    } else return data;
  };
  const getFilteredData = (filterBy, data) => {
    let newData = [...data];
    if (filterBy.filterNewProducts === true) {
      newData = data.filter((product) => {
        return product.newFlag === true;
      });
    }
    return newData;
  };
  return (
    <div className="products-page">
      <div className="apply-filter-div">
        <SortByPriceFieldSet />
        <FilterByNew />
      </div>
      <div className="products-listing">
        {getSortedData(
          state.sortBy,
          getFilteredData(state.filterBy, state.productsList)
        ).map((item) => (
          <span key={item.id}>
            <ProductCard {...item} />
          </span>
        ))}
      </div>
    </div>
  );
};
