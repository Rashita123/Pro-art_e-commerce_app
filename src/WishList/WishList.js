import "./WishList.css";
import { WishCard } from "../Cards";
import { useMyReducer } from "../stateContext";
export const WishList = () => {
  const { state } = useMyReducer();
  return (
    <div className="wishlist-page">
      <h2>WishList</h2>
      <div className="wishlist-listing">
        {state.wishList.length !== 0 ? (
          state.wishList.map((item) => <WishCard {...item} />)
        ) : (
          <h3 className="wishlist-center-text">
            <em>Wish something First ;)</em>
          </h3>
        )}
      </div>
    </div>
  );
};
