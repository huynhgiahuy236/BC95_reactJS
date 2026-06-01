// giả lập tình huống: lưu user info vào localStorage
// có value => hiển thị admin route
// không có value => ẩn admin route, nếu user cố tình truy cập vào /admin
// => redirect về trang login
import { Navigate } from "react-router-dom";

const protectedRoute = ({ children,requiresRole }) => {
  // requiresRole được truyền từ App.jsx, là tham số để kiểm tra role của user, nếu user có role phù hợp thì cho phép truy cập, ngược lại thì redirect về trang login hoặc trang home
  // children là component mà mình muốn bảo vệ, ví dụ AdminLayout,
  // la tham so bat buoc phai co khi su dung protectedRoute
  // khong duoc doi ten children thanh ten khac, vi no la props mac dinh cua react
  const user = JSON.parse(localStorage.getItem("user"));
  // nếu user tồn tại và có role là admin thì cho phép truy cập

  // nếu user không tồn tại hoặc không có role là admin thì redirect về trang login
  if (!user) {
    return <Navigate to="/login"  />;
  }
  // kiem tra role cua user
  if(requiresRole && user.role !== requiresRole){
    return <Navigate to="/login"  />;
  }
  return children;
};
export default protectedRoute;