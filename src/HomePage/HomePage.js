import "./HomePage.css";
import { Hero } from "./Hero/Hero";
import { Features } from "./Features/Features";
import { Footer } from "./Footer/Footer";
export const HomePage = () => {
  return (
    <div className="home-page">
      <Hero />
      <Features />
      <Footer />
    </div>
  );
};
