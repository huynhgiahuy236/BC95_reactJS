import { useSelector } from "react-redux";
import { selectorIsLoggedIn } from "../stores/authSlice";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  // lay state isLoggin tu phia redux Store ve
  const isLoggedin = useSelector(selectorIsLoggedIn);
  if (!isLoggedin) {
    // neu chua dang nhap, chuyen huong ve trang login
    // replace: true de khi chuyen huong, trang login se thay the trang hien tai
    return <Navigate to="/login" replace />;
  }
  return children;
};
export default ProtectedRoute;
