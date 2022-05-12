import "./Coupons.css";
import { CouponsDB } from "../../CouponsDB";
import { CouponCard } from "./CouponCard";
export const Coupons = () => {
  return (
    <div className="profile__coupons-div">
      {CouponsDB.map((coupon) => (
        <CouponCard coupon={coupon} />
      ))}
    </div>
  );
};
