import "./CardDetails.css";
import { Button } from "forkui-lib";
import { useMyReducer } from "../../../stateContext";
import { useLanguageContext } from "../../../AllContext";
import { useEffect, useRef } from "react";
import { CalculateTotalPriceOfCart } from "../../../Logic";
export const CardDetails = () => {
  const cardRef = useRef(null);
  const { state } = useMyReducer();
  const { language } = useLanguageContext();
  useEffect(() => {
    cardRef.current.focus();
  }, []);
  return (
    <div className="card-details">
      <span className="payment-heading">{language.paymentDetails}</span>
      <form className="card-details-form">
        <input
          className="big-input"
          ref={cardRef}
          placeholder={language.cardHolderName}
        ></input>
        <br />
        <input className="big-input" placeholder={language.cardNumber}></input>
        <br />
        <input className="small-input" placeholder={language.date}></input>
        <input className="small-input" placeholder={language.CVV}></input>
        <br />
        <Button
          margin="2rem"
          text={`${language.pay} ₹${CalculateTotalPriceOfCart(state.cartList)}`}
        />
      </form>
    </div>
  );
};
