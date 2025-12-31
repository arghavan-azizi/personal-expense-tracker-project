import { Navigate } from "react-router-dom";
import { current_user_key } from "../pages/storage";


function isLogged(){
  return localStorage.getItem(current_user_key) !== null;
}

function ProtectedRoute({ children }) {
  if (!isLogged()) {
    return <Navigate to="/singIn" />;
  }

  return children;
}

export default ProtectedRoute;
