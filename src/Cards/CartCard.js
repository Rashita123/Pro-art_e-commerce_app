import "./ProductCard.css";
import { useMyReducer } from "../stateContext";
import { BsTrashFill } from "react-icons/bs";
import { BsPlus } from "react-icons/bs";
import { FiMinus } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useLangContext } from "../AllContext/languageContext";
export const CartCard = (item) => {
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
  const { language } = useLangContext();
  return (
    <div className="card">
      <div className="product-details">
        <Link to={`/products/${id}`}>
          <img className="product-image" alt="product" src={imageSrc} />
          {newFlag && <div className="float-new">{language.new}</div>}
        </Link>
        <div className="product-name-and-desc">
          <Link to={`/products/${id}`}>
            <h3 style={{ margin: 0 }}>{productName}</h3>

            <div className="price-details">
              <strong>Rs. {price}</strong>
              <strike style={{ marginLeft: "0.5rem" }}>
                Rs. {originalPrice}
              </strike>
              <span className="red-text">
                ({(originalPrice - price) / 100}% off)
              </span>
            </div>
          </Link>
        </div>
        <div className="product-buttons">
          <button
            onClick={() =>
              dispatch({ type: "increment-cart-count", payload: { id: id } })
            }
          >
            <BsPlus />
          </button>
          <span>{quantity}</span>
          <button
            onClick={() =>
              dispatch({ type: "decrement-cart-count", payload: { id: id } })
            }
          >
            {quantity === 1 ? <BsTrashFill size={13} /> : <FiMinus />}
          </button>
        </div>
        <button
          onClick={() => {
            dispatch({
              type: "update-wishlist",
              payload: { item: item, id: id }
            });
            dispatch({ type: "remove-from-cart", payload: { id: id } });
          }}
        >
          {language.moveToWishlist}
        </button>
        <div
          onClick={() =>
            dispatch({ type: "remove-from-cart", payload: { id: id } })
          }
          className="top-right-icon"
        >
          <BsTrashFill color="inherit" size={25} />
        </div>
      </div>
    </div>
  );
};
