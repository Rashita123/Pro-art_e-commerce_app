import "./OrderDetails.css";
import { calculateLengthOfCart } from "../../Logic/CalcLengthOfCart";
import { useMyReducer } from "../../stateContext";
import { useLangContext } from "../../AllContext/languageContext";
import { CalcOriginalPriceOfCart } from "../../Logic/CalcTotalPriceOfCart";
import { CalcTotalPriceOfCart } from "../../Logic/CalcTotalPriceOfCart";
import { Link } from "react-router-dom";
export const OrderDetails = () => {
  const { state } = useMyReducer();
  const { language } = useLangContext();
  return (
    <div className="order_details-div">
      <div
        id="order_details"
        className="order_details__row order_details__title-row"
      >
        <p>
          {language.priceDetails} ({calculateLengthOfCart(state.cartList)}{" "}
          {language.item})
        </p>
      </div>

      <div className="order_details__row">
        <span>{language.totalMRP}</span>
        <span>₹{CalcTotalPriceOfCart(state.cartList)}</span>
      </div>

      <div className="order_details__row">
        <span>{language.discountOnMRP}</span>
        <span>
          -₹
          {CalcOriginalPriceOfCart(state.cartList) -
            CalcTotalPriceOfCart(state.cartList)}
        </span>
      </div>

      <div className="order_details__row">
        <span>{language.couponDiscount}</span>
        <span>{language.applyCoupon}</span>
      </div>

      <div className="order_details__row">
        <span>{language.convenienceFee}</span>
        <span>₹0</span>
      </div>

      <div className="order_details__row order_details__total-div">
        <span>{language.totalAmount}</span>
        <span>₹{CalcTotalPriceOfCart(state.cartList)}</span>
      </div>
      <Link to="/address-management">
        <button className="cart__order-button button-in-desktop-view">
          {language.placeOrder}
        </button>
      </Link>
    </div>
  );
};
