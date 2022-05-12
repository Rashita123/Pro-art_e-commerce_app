import "./ApplyCouponModel.css";
import { CouponsDB } from "../../../CouponsDB";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
export const ApplyCouponModel = ({ setShowCouponModel, applyCoupon }) => {
  const [couponEntered, setCouponEntered] = useState("");
  const changeDiscount = () => {
    if (couponEntered === "") {
      setShowCouponModel(false);
      return;
    }
    const couponSelected = CouponsDB.find(
      (coupon) => coupon.code === couponEntered
    );
    applyCoupon(couponSelected.offAmount);
  };
  return (
    <div className="coupon-model">
      <div className="coupon-model-div">
        <div className="coupon-model-heading">
          <span>Apply Coupon</span>
          <span
            className="cross-icon"
            onClick={() => setShowCouponModel(false)}
          >
            <FaTimes size={20} />
          </span>
        </div>
        <div className="coupon-input">
          <input
            id="couponApplied"
            placeholder="Enter Coupon Code"
            onChange={(e) => setCouponEntered(e.target.value)}
          />
        </div>
        <div className="coupons-available">
          <Link to="/coupons">
            <div>Check Available</div>
          </Link>
          <span onClick={changeDiscount}>Apply</span>
        </div>
      </div>
    </div>
  );
};
