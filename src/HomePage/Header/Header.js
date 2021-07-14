import "./Header.css";
import {
  useLanguageContext,
  useThemeContext,
  useLoginContext
} from "../../AllContext";
import { useState } from "react";
import { HiOutlineTranslate } from "react-icons/hi";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { BiShoppingBag } from "react-icons/bi";
import { useMyReducer } from "../../stateContext";
import { Avatar } from "forkui-lib";
import { CalculateLengthOfCart } from "../../Logic";
import { SetLanguageModel } from "./SetLanguageModel/SetLanguageModel";
import { Button } from "forkui-lib";
import { AiFillFire } from "react-icons/ai";
export const Header = () => {
  const { login, setLogin } = useLoginContext();
  const [showLangModel, setShowLangModel] = useState(false);
  const { language, setLanguage } = useLanguageContext();
  const { theme, setTheme } = useThemeContext();
  const [displaySidebar, setDisplaySidebar] = useState(false);
  const { state } = useMyReducer();
  const toggleMode = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };
  return (
    <div className="header">
      <div
        className="sidebar"
        style={{ display: displaySidebar ? "block" : "none" }}
      >
        <div className="sidebar__profile">
          <span
            className="sidebar__profile__cancel"
            onClick={() => setDisplaySidebar(false)}
          >
            <FaTimes size={20} color="white" />
          </span>
          <span className="sidebar__profile__avatar">
            <Link to="/profile">
              <Avatar size="lg" src="https://bit.ly/3cQDipG" />
            </Link>
          </span>
          <span className="sidebar__profile__profile-name">Rashita</span>
        </div>
        <div className="sidebar__nav-links">
          <span
            onClick={() => {
              setDisplaySidebar(false);
            }}
          >
            <Link to="/">{language.home}</Link>
          </span>
          <span
            onClick={() => {
              setDisplaySidebar(false);
            }}
          >
            <Link to="/products">{language.products}</Link>
          </span>
          <span
            onClick={() => {
              setDisplaySidebar(false);
            }}
          >
            <Link to="/cart">{language.cart}</Link>
          </span>
          <span
            onClick={() => {
              setDisplaySidebar(false);
            }}
          >
            <Link to="/wishlist">{language.wishlist}</Link>
          </span>
        </div>
      </div>
      <div className="bars-brand">
        <span
          className="sidebar__bars"
          onClick={() => setDisplaySidebar(!displaySidebar)}
        >
          {<FaBars size={25} color="#374151" />}
        </span>
        <span className="heading-icon-text">
          <span className="proart-icon">
            <AiFillFire size={25} color="#20a546" />
          </span>
          <Link to="/">{language.proArt}</Link>
        </span>
      </div>
      <div className="nav-icons">
        <span>{<AiOutlineSearch size={25} color="#374151" />}</span>
        <span className="nav-icon">
          {state.wishList.length !== 0 && (
            <span className="nav-icons__badge">{state.wishList.length}</span>
          )}
          {
            <Link to="/wishlist">
              <AiOutlineHeart size={25} color="#374151" />
            </Link>
          }
        </span>
        <span className="nav-icon">
          {CalculateLengthOfCart(state.cartList) !== 0 && (
            <span className="nav-icons__badge">
              {CalculateLengthOfCart(state.cartList)}
            </span>
          )}
          {
            <Link to="/cart">
              <BiShoppingBag size={25} color="#374151" />
            </Link>
          }
        </span>
        <span>
          <div onClick={toggleMode} className={`toggle toggle-${theme}`}>
            <div className={`circle circle-${theme}`}></div>
          </div>
        </span>
        <span onClick={() => setShowLangModel(true)}>
          <HiOutlineTranslate size={25} color="#374151" />
        </span>
        {!login && (
          <Link to="login">
            <Button text={language.login} width="auto" maxHeight="40px" />
          </Link>
        )}
        {login && (
          <Link to="/profile">
            <Avatar />
          </Link>
        )}
      </div>
      {showLangModel && (
        <SetLanguageModel setShowLangModel={setShowLangModel} />
      )}
    </div>
  );
};
