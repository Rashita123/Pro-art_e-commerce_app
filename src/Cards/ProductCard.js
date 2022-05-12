import "./ProductCard.css";
import { useState } from "react";
import { Link } from "react-router-dom";

import { useMyReducer } from "../stateContext";
import { useLanguageContext } from "../AllContext/languageContext";
import { GetPercentageOff } from "../Logic";

import { AiOutlineHeart } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";

export const ProductCard = (item) => {
  const {
    id,
    imageSrc,
    productName,
    description,
    price,
    originalPrice,
    newFlag
  } = item;
  const [wished, setWished] = useState(false);
  const { dispatch } = useMyReducer();
  const { language } = useLanguageContext();

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
            <br />
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

        <div className="product-buttons">
          <button
            onClick={() =>
              dispatch({
                type: "add-new-cart-item",
                payload: { item: item, id: id, quantity: 1 }
              })
            }
          >
            {language.addToCart}
          </button>
          <span className="top-right-icon">
            {wished ? (
              <div
                onClick={() => {
                  dispatch({
                    type: "remove-from-wishlist",
                    payload: { id: id }
                  });
                  setWished(!wished);
                }}
              >
                <AiFillHeart color="#ff3e6c" size={25} />
              </div>
            ) : (
              <div
                onClick={() => {
                  dispatch({
                    type: "update-wishlist",
                    payload: { item: item, id: id }
                  });
                  setWished(!wished);
                }}
              >
                <AiOutlineHeart size={25} color="#374151" />
              </div>
            )}
          </span>
        </div>
      </div>
    </div>
  );
};
