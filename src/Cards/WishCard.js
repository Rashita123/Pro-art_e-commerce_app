import "./ProductCard.css";
import { useMyReducer } from "../stateContext";
import { BsTrashFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useLanguageContext } from "../AllContext";
import { GetPercentageOff } from "../Logic";
export const WishCard = (item) => {
  const {
    id,
    imageSrc,
    productName,
    description,
    price,
    originalPrice,
    newFlag,
    quantity
  } = item;
  const { dispatch } = useMyReducer();
  const { language } = useLanguageContext();
  const moveToCartFromWishList = (id) => {
    dispatch({
      type: "add-new-cart-item",
      payload: { item: item, id: id, quantity: 1 }
    });
    dispatch({ type: "remove-from-wishlist", payload: { id: id } });
  };
  return (
    <div className="card">
      <div className="product-details">
        <Link to={`/products/${id}`}>
          <img className="product-image" alt="product" src={imageSrc} />
          {newFlag && <div className="float-new">{language.new}</div>}
        </Link>
        <div className="product-name-and-desc">
          <Link to={`/products/${id}`}>
            <h3 className="product-name-style">{productName}</h3>

            <div className="price-details">
              <strong>Rs. {price}</strong>
              <strike className="price-strike-style">
                Rs. {originalPrice}
              </strike>
              <span className="red-text">
                {GetPercentageOff(originalPrice, price)}% {language.off}
              </span>
            </div>
          </Link>
        </div>
        <div className="product-buttons wishlist-remove-flex">
          <button
            onClick={() => {
              moveToCartFromWishList(id);
            }}
          >
            {language.moveToCart}
          </button>
          <div
            onClick={() =>
              dispatch({ type: "remove-from-wishlist", payload: { id: id } })
            }
            className="top-right-icon"
          >
            <BsTrashFill color="inherit" size={25} />
          </div>
        </div>
      </div>
    </div>
  );
};
