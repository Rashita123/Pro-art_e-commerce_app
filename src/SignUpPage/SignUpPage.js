import "./SignUpPage.css";
import { useRef, useEffect, useState } from "react";
import { useLanguageContext } from "../AllContext/languageContext";
import { useLoginContext } from "../AllContext/LoginContext";
import { Button } from "forkui-lib";
import { Link, useNavigate } from "react-router-dom";

export const SignUpPage = () => {
  const usernameRef = useRef(null);
  useEffect(() => {
    usernameRef.current.focus();
  }, []);
  const navigate = useNavigate();
  const { language } = useLanguageContext();
  const { login, setLogin, users, setUsers } = useLoginContext();
  const initialUserDetails = { username: "", email: "", password: "" };
  const [newUserDetails, setNewUserDetails] = useState(initialUserDetails);
  const [valid, setValid] = useState(true);
  const resetInputFields = () => {
    setNewUserDetails(initialUserDetails);
  };
  const submitNewUser = (newUserDetails) => {
    const userAlreadyInDB = users.find(
      (user) => user.email === newUserDetails.email
    );
    if (userAlreadyInDB) {
      setValid(false);
    } else {
      setUsers([...users, newUserDetails]);
      setNewUserDetails(initialUserDetails);
      setLogin(true);
      navigate("/");
    }
  };
  return (
    <div className="sign-up-page">
      <div className="sign-up-top-div">
        <h3>Create a new Account</h3>
        <input
          ref={usernameRef}
          value={newUserDetails.username}
          onChange={(e) => {
            setNewUserDetails({ ...newUserDetails, username: e.target.value });
          }}
          className="big-input"
          type="text"
          required
          placeholder="Username"
        />

        <input
          value={newUserDetails.email}
          onChange={(e) => {
            setValid(true);
            setNewUserDetails({ ...newUserDetails, email: e.target.value });
          }}
          className="big-input"
          placeholder={language.eMail}
          type="email"
          required
        />

        <input
          value={newUserDetails.password}
          onChange={(e) => {
            setNewUserDetails({ ...newUserDetails, password: e.target.value });
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
            onClickHandler={() => submitNewUser(newUserDetails)}
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
