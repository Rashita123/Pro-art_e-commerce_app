import { useState, useRef } from "react";
import "./Coupons.css";
export const CouponCard = ({ coupon }) => {
  const [showDetails, setShowDetails] = useState(false);
  const couponRef = useRef(null);
  const copy = () => {
    couponRef.current.select();
    document.execCommand("copy");
  };
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
          <span className="description-span">
            Code: <input ref={couponRef} value={coupon.code} />
            <button className="copy-button" onClick={copy}>
              {" "}
              Copy
            </button>
          </span>
        </div>
      </div>
      <div className="expiry-and-details">
        <div class="expiry">
          <span>
            Expiry: <strong>{coupon.expiry}</strong> | 11:30:00 P.M.
          </span>
          {showDetails && (
            <span className="coupon-details-style">
              "Rs. {coupon.offAmount} off on minimum purchase of Rs. 1200"
            </span>
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
