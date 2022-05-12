import "./OrderDetails.css";
import { useState } from "react";
import { CouponsDB } from "../../CouponsDB";
import { FaTimes } from "react-icons/fa";
import { CalculateLengthOfCart } from "../../Logic";
import { useMyReducer } from "../../stateContext";
import { useLanguageContext } from "../../AllContext";
import { CalculateOriginalPriceOfCart } from "../../Logic";
import { CalculateTotalPriceOfCart } from "../../Logic";
import { ApplyCouponModel } from "./ApplyCouponModel/ApplyCouponModel";
import { Link } from "react-router-dom";
export const OrderDetails = () => {
  const { state } = useMyReducer();
  const { language } = useLanguageContext();
  const [showCouponModel, setShowCouponModel] = useState(false);
  const [couponDiscount, setCouponDiscount] = useState(0);
  const applyCoupon = (offAmount) => {
    setCouponDiscount(offAmount);
    setShowCouponModel(false);
  };
  return (
    <div className="order_details-div">
      <div
        id="order_details"
        className="order_details__row order_details__title-row"
      >
        <p>
          {language.priceDetails} ({CalculateLengthOfCart(state.cartList)}{" "}
          {language.item})
        </p>
      </div>

      <div className="order_details__row">
        <span>{language.totalMRP}</span>
        <span>₹{CalculateOriginalPriceOfCart(state.cartList)}</span>
      </div>

      <div className="order_details__row">
        <span>{language.discountOnMRP}</span>
        <span>
          -₹
          {CalculateOriginalPriceOfCart(state.cartList) -
            CalculateTotalPriceOfCart(state.cartList)}
        </span>
      </div>

      <div className="order_details__row">
        <span>{language.couponDiscount}</span>
        <span>
          {couponDiscount === 0 ? (
            <span
              className="make-cursor-pointer"
              onClick={() => setShowCouponModel(true)}
            >
              {language.applyCoupon}
            </span>
          ) : (
            <span>
              <span>-₹{couponDiscount}</span>
              <span
                className="make-cursor-pointer"
                onClick={() => setCouponDiscount(0)}
              >
                <FaTimes />
              </span>
            </span>
          )}
        </span>
      </div>

      {showCouponModel && (
        <ApplyCouponModel
          setShowCouponModel={setShowCouponModel}
          applyCoupon={applyCoupon}
        />
      )}

      <div className="order_details__row">
        <span>{language.convenienceFee}</span>
        <span>₹0</span>
      </div>

      <div className="order_details__row order_details__total-div">
        <span>{language.totalAmount}</span>
        <span>
          ₹{CalculateTotalPriceOfCart(state.cartList) - couponDiscount}
        </span>
      </div>
      <Link to="/address-management">
        <button className="cart__order-button button-in-desktop-view">
          {language.placeOrder}
        </button>
      </Link>
    </div>
  );
};
