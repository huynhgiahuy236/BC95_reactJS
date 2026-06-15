import { stores } from "../store";
// auth midd.. nhan action login logout
// luu, xoa thong tin user o local...
export const authMiddleware = (stores) => (next) => (action) => {
    // B1 kiem tra neu action la login hoac logout
    const { type, payload } = action
    switch (type) {
        case "auth/login":
            localStorage.getItem("user", JSON.stringify(payload))
            break
        case "auth/logout":
            localStorage.removeItem("user", JSON.stringify(payload))
            break
        default:
            break
    }
    next(action)
}