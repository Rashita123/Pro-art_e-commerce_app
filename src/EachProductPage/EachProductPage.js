import "./EachProductPage.css";
import { useParams } from "react-router-dom";
import { ProductsDatabase } from "../ProductsPage";
import { useMyReducer } from "../stateContext";
import { Badge, Button } from "forkui-lib";
import { useState } from "react";
import { NoMatch } from "../NoMatch404";
import { Link } from "react-router-dom";
import { useLanguageContext } from "../AllContext";
export const EachProductPage = () => {
  const { language } = useLanguageContext();
  const [quantity, setQuantity] = useState(1);
  const setProductQuantity = (e) => {
    const value = e.target.value;
    setQuantity(parseInt(value, 10));
  };
  const { dispatch } = useMyReducer();
  const { id } = useParams();
  const item = ProductsDatabase.find((item) => item.id === Number(id));
  if (!item) {
    return <NoMatch />;
  }
  return (
    <div className="one-product-page">
      <div className="image-div">
        <img className="each-product-image" src={item.imageSrc} alt="product" />
      </div>
      <div className="price-details-div">
        <div>
          <span className="product-name">{item.productName}</span>
          <br />
          <Badge
            colorScheme="purple"
            size="md"
            text={`${language.save} ₹${item.originalPrice - item.price}`}
          />
          <br />
          <br />
          <Link to={`/seller/${item.seller.shopId}`}>
            <span className="seller-details">{item.seller.shopName}</span>
          </Link>
          <hr />
          <div className="price-div tag-div">
            <span className="price tag-heading">{language.price}: </span>
            <div className="make-flex-div">
              <div>
                <span className="price__new-price">{`₹${item.price}`}</span>
                <span className="price__old-price">{`₹${item.originalPrice}`}</span>
              </div>
              <div>
                <span className="price__tax-info">{language.taxIncluded}</span>
              </div>
            </div>
          </div>
          <div className="quantity-div tag-div">
            <span className="quantity tag-heading">{language.quantity}: </span>
            <input
              onChange={(e) => setProductQuantity(e)}
              className="quantity-input"
              type="number"
              defaultValue="1"
              step="1"
              min="1"
              max="20"
            />
          </div>
          <button
            onClick={() =>
              dispatch({
                type: "add-new-cart-item",
                payload: { item: item, id: item.id, quantity: quantity }
              })
            }
          >
            {language.addToCart}
          </button>
          <Link to="/cart">
            <button
              onClick={() =>
                dispatch({
                  type: "buy-now-handler",
                  payload: { item: item, id: item.id, quantity: quantity }
                })
              }
            >
              {language.buyNow}
            </button>
          </Link>
        </div>
      </div>
      <hr />
      <div className="description-div">
        <span className="tag-heading">{language.description}</span>
        <p>{item.description}</p>
      </div>
    </div>
  );
};
