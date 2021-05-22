import "./Features.css";
export const Features = () => {
  return (
    <div className="features-div">
      <div className="features container">
        <div className="features__delivery feature">
          <span className="heading">Fast & Free Delivery</span>
          <span className="content">
            ProArt ensures you get your art masterpieces in time and lets you
            fall in love with the artist's art in a few days!{" "}
          </span>
        </div>
        <div className="features__payments feature">
          <span className="heading">Safe & Secure Payments</span>
          <span className="content">
            ProArt ensures that every payment made through the platform is 100%
            safe and far from any fraudal practices. ProArt is built on Trust
            and Art!
          </span>
        </div>
        <div className="features__moneyback feature">
          <span className="heading">100% Money Back Guarantee</span>
          <span className="content">
            If you recieve an unexpected or damaged art piece, ProArt assured
            complete money back. No questions asked and money will be returned
            in the next 2-3 business days.
          </span>
        </div>
      </div>
    </div>
  );
};
