import { useSelector } from "react-redux"
import { selectorIsLoggedIn, selectorUser } from "../stores/authSlice"
import { Navigate } from "react-router-dom"
const ProtectedAdminRoute = ({ children }) => {
    // isLoggedIn: kiem tra xem nguoi dung da dang nhap chua
    // user: kiem tra role cua nguoi dung (admin hay user)
    const isLoggedIn = useSelector(selectorIsLoggedIn)
    const user = useSelector(selectorUser)
    // neu chua dang nhap, chuyen sang trang login
    if (!isLoggedIn) {
        return <Navigate to="/login" replace />
    }
    // neu khong phai la quan tri vien, chuyen huong ve trang home
    if (user?.maLoaiNguoiDung !== "QuanTri") {
        return <Navigate to="/" replace />
    }
    return children
}
export default ProtectedAdminRoute