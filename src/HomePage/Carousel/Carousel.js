import "./Carousel.css";
import { useState } from "react";
import { ProductsDatabase } from "../../ProductsPage";
import { BiChevronLeft } from "react-icons/bi";
import { BiChevronRight } from "react-icons/bi";
export const Carousel = () => {
  const images = ProductsDatabase.map((product) => product.seller.logoImage);
  const sellerLogos = new Set(images);
  const sellerLogoArray = Array.from(sellerLogos);
  const [indexToShow, setIndex] = useState(0);
  const noOfLogosShown = parseInt(((4 * window.innerWidth) / 5 - 32) / 70 - 1);
  return (
    <div className="brands-section">
      <h2>Featured Brands</h2>
      <div className="carousel">
        {indexToShow !== 0 && (
          <button
            onClick={() => setIndex((index) => index - 1)}
            className="carousel__button carousel__button--left"
          >
            <BiChevronLeft size={40} />
          </button>
        )}
        <div className="carousel__slides-div">
          <ul className="carousel__slides">
            {sellerLogoArray.map((logo, index) => {
              if (index > indexToShow)
                return (
                  <li className="carousel__slide">
                    {" "}
                    <img src={logo} alt="logo" />
                  </li>
                );
            })}
          </ul>
        </div>
        {indexToShow !== sellerLogoArray.length - 2 && (
          <button
            onClick={() => setIndex((index) => index + 1)}
            className="carousel__button carousel__button--right"
          >
            <BiChevronRight size={40} />
          </button>
        )}
      </div>
    </div>
  );
};
