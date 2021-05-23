import "./SignUpPage.css";
import { useRef, useEffect, useState } from "react";
import { useLangContext } from "../AllContext/languageContext";
import { useLoginContext } from "../AllContext/LoginContext";
import { Button } from "forkui-lib";
import { Link, useNavigate } from "react-router-dom";

export const SignUpPage = () => {
  const usernameRef = useRef(null);
  useEffect(() => {
    usernameRef.current.focus();
  }, []);
  const navigate = useNavigate();
  const { language } = useLangContext();
  const { login, setLogin, users, setUsers } = useLoginContext();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [valid, setValid] = useState(true);
  const resetInputFields = () => {
    setUsername("");
    setEmail("");
    setPassword("");
  };
  const submitNewUser = (username, email, password) => {
    const userAlreadyInDB = users.find((user) => user.email === email);
    if (userAlreadyInDB) {
      setValid(false);
    } else {
      setUsers([...users, { username, email, password }]);
      setUsername("");
      setEmail("");
      setPassword("");
      setLogin(true);
      navigate("/");
    }
  };
  return (
    <div className="sign-up-page">
      <div className="sign-up-top-div">
        <h3>Create A new Account</h3>
        <input
          ref={usernameRef}
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          className="big-input"
          type="text"
          required
          placeholder="Username"
        />

        <input
          value={email}
          onChange={(e) => {
            setValid(true);
            setEmail(e.target.value);
          }}
          className="big-input"
          placeholder={language.eMail}
          type="email"
          required
        />

        <input
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          className="big-input"
          placeholder={language.password}
          type="password"
          required
        ></input>
        {!valid && <p className="red-text">E-mail already in use</p>}
        <div className="sign-up-buttons">
          <Button
            margin="1rem"
            text={language.submit}
            onClickHandler={() => submitNewUser(username, email, password)}
          />
          <Button
            margin="1rem"
            text="Reset"
            variant="secondaryToPrimary"
            onClickHandler={resetInputFields}
          />
        </div>
      </div>
      {!login && (
        <div className="login-from-sign-up">
          <span>Already a user?</span>
          <Link to="/login">Login</Link>
        </div>
      )}
    </div>
  );
};
