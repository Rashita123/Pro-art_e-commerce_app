import "./HomePage.css";
import { Hero } from "./Hero";
import { Features } from "./Features";
import { Footer } from "./Footer";
import { Carousel } from "./Carousel";
export const HomePage = () => {
  return (
    <div className="home-page">
      <Hero />
      <Carousel />
      <Features />
      <Footer />
    </div>
  );
};
