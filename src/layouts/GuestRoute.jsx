import { Navigate } from "react-router-dom";

const GuestRouter = ({ children }) => {
  const user = JSON.parse(localStorage.getItem("user"));
  if (user) {
    return <Navigate to="/" />;
  }
  // neu user khong ton tai thi cho phep truy cap vao trang login va register
  return children;
};
export default GuestRouter;
