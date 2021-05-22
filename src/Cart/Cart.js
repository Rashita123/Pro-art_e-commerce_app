import "./Cart.css";
import { Link } from "react-router-dom";
import { useMyReducer } from "../stateContext";
import { useLangContext } from "../AllContext/languageContext";
import { CartCard } from "../Cards/CartCard";
import { CalcTotalPriceOfCart } from "../Logic/CalcTotalPriceOfCart";
import { calculateLengthOfCart } from "../Logic/CalcLengthOfCart";
import { OrderDetails } from "./OrderDetails/OrderDetails";
import { AiOutlineHeart } from "react-icons/ai";
import { FaChevronRight } from "react-icons/fa";
export const Cart = () => {
  const { language } = useLangContext();
  const { state } = useMyReducer();
  return (
    <div className="cart-page">
      <h2>
        {language.cart} ({calculateLengthOfCart(state.cartList)})
      </h2>
      <br />
      <div className="left-cart">
        <div className="cart-listing">
          {state.cartList.map(
            (item) =>
              item.quantity !== 0 && (
                <span key={item.id}>
                  <CartCard {...item} />
                </span>
              )
          )}
        </div>
      </div>
      <div className="right-cart">
        <div className="right-cart__add-from-wishlist-link">
          <Link to="/wishlist">
            <div className="cart__add-from-wishlist">
              <AiOutlineHeart size={25} />
              <span>{language.addMoreFromWishlist}</span>
              <FaChevronRight size={25} />
            </div>
          </Link>
        </div>

        <div className="cart-page__total">
          <div className="cart__price-details-link">
            <span>₹{CalcTotalPriceOfCart(state.cartList)}</span>
            <a href="#order_details">{language.viewDetails}</a>
          </div>

          <Link to="/address-management">
            <button className="cart__order-button">
              {language.placeOrder}
            </button>
          </Link>
        </div>

        {calculateLengthOfCart(state.cartList) !== 0 && <OrderDetails />}
      </div>
    </div>
  );
};
