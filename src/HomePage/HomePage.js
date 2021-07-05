import "./HomePage.css";
import { Hero } from "./Hero/Hero";
import { Features } from "./Features/Features";
import { Footer } from "./Footer/Footer";
import { Carousel } from "./Carousel/Carousel";
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
