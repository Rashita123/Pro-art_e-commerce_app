import "./Hero.css";
import { Link } from "react-router-dom";
import { useLanguageContext } from "../../AllContext";
export const Hero = () => {
  const { language } = useLanguageContext();
  return (
    <div className="hero-div">
      <div className="title-and-quote">
        <h1>Paint the Canvas</h1>
        <p>
          <em>"This world is but a canvas to our imagination."</em>
        </p>
        <Link to="/products">
          <button className="home-page-shop-button">{language.shop}</button>
        </Link>
      </div>
    </div>
  );
};
