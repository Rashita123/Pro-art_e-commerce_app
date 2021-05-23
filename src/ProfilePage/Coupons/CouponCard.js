import { useState } from "react";
import "./Coupons.css";
export const CouponCard = ({ coupon }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="each-coupon-div">
      <div className="off-and-desciption">
        <div className="off-div">
          <span>{coupon.percentage}%</span>
          <span>off</span>
        </div>
        <div className="off-description-div">
          <span className="description-span">
            On a minimum purchase of Rs. {coupon.minPurchase}
          </span>
          <span className="description-span">Code: {coupon.code}</span>
        </div>
      </div>
      <div className="expiry-and-details">
        <div class="expiry">
          <span>
            Expiry: <strong>{coupon.expiry}</strong> | 11:30:00 P.M.
          </span>
          {showDetails && (
            <span className="coupon-details-style">{coupon.details}</span>
          )}
        </div>
        <div
          class="details"
          onClick={() => setShowDetails((showDetails) => !showDetails)}
        >
          {showDetails ? "Hide" : "Details"}
        </div>
      </div>
    </div>
  );
};
