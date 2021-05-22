import "./NoMatch.css";
import { Link } from "react-router-dom";
export const NoMatch = () => {
  return (
    <div className="no-page-div">
      <h1 className="oops-text">Oops!</h1>
      <p>We can't seem to find the page you are looking for</p>
      <span>Here are some helpful links instead:</span>
      <br />
      <Link to="/">
        <span className="Links-from-404">Home</span>
      </Link>
      <Link to="/products">
        <span className="Links-from-404">Products</span>
      </Link>
    </div>
  );
};
