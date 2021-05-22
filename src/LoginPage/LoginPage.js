import "./LoginPage.css";
import { Button } from "forkui-lib";
import { useLangContext } from "../AllContext/languageContext";
import { useState, useRef, useEffect } from "react";
import { useLoginContext } from "../AllContext/LoginContext";
import { useLocation, useNavigate, Link } from "react-router-dom";
export const LoginPage = () => {
  const { login, setLogin } = useLoginContext();
  const { language } = useLangContext();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const { state } = useLocation();
  const navigate = useNavigate();
  const emailInput = useRef(null);
  const [showWrongPassword, setShowWrongPassword] = useState(false);
  const user = {
    username: "rashitamehta",
    email: "rashita.neog@gmail.com",
    password: "Rashita@neog"
  };
  
  const submitHandler = () => {
    if (!login) {
      if (email === user.email && password === user.password) {
        setLogin(true);
        localStorage?.setItem("ProArtLogin", JSON.stringify({ login: true }));
        setShowWrongPassword(false);
        setEmail("");
        setPassword("");
        navigate(state?.from ? state.from : "/");
      } else {
        setShowWrongPassword(true);
      }
    } else {
      if (email === user.email && password === user.password) {
        setLogin(false);
        localStorage.removeItem("ProArtLogin");
        setShowWrongPassword(false);
        setEmail("");
        setPassword("");
        navigate(state?.from ? state.from : "/");
      } else {
        setShowWrongPassword(true);
      }
    }
  };
  useEffect(() => {
    emailInput.current.focus();
  }, []);
  return (
    <div className="login-page">
      <div className="login-top-div">
        <h3>{login ? language.logout : language.login}</h3>
        <input
          ref={emailInput}
          value={email}
          onChange={(e) => {
            setShowWrongPassword(false);
            setEmail(e.target.value);
          }}
          className="big-input"
          placeholder={language.eMail}
          type="email"
          required
        ></input>

        <input
          value={password}
          onChange={(e) => {
            setShowWrongPassword(false);
            setPassword(e.target.value);
          }}
          className="big-input"
          placeholder={language.password}
          type="password"
          required
        ></input>
        {!login && (
          <div className="login-form-remember-me">
            <input type="checkbox" />
            <label>Remember Me</label>
          </div>
        )}
        {showWrongPassword && (
          <p style={{ color: "red" }}>Incorrect Password</p>
        )}
        <Button
          margin="1rem"
          isDisabled={showWrongPassword}
          onClickHandler={submitHandler}
          text={language.submit}
        />
      </div>
      {!login && (
        <div className="sign-up-from-login">
          <span>Not a member?</span>
          <Link to="/sign-up">Sign Up Now</Link>
        </div>
      )}

      {login && (
        <div className="sign-up-from-login">
          <Link to="/sign-up">Create a new Account</Link>
        </div>
      )}
    </div>
  );
};
