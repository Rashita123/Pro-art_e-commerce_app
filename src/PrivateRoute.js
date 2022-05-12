import { useLoginContext } from "./AllContext";
import { Route, Navigate } from "react-router-dom";
export const PrivateRoute = ({ path, ...props }) => {
  const { login } = useLoginContext();
  return login ? (
    <Route path={path} {...props} />
  ) : (
    <Navigate state={{ from: path }} replace to="/login" />
  );
};
