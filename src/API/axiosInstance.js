//  axios instance công dụng sau:
// 1. Tự động thêm baseURL vào tất cả request để rút ngắn URL API
// 2. Tự động thêm header Authorization hoặc các infor khác nếu token tồn tại trong localStorage
// 3. Xử lý lỗi chung (nếu cần) để tránh lặp code ở từng API call
import axios from "axios";

// tao install voi cau hinh mac dinh
const axiosInstance = axios.create({
    baseURL: "https://movienew.cybersoft.edu.vn/API",
    // them headers chung
    headers: {
        TokenCybersoft: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA5NSIsIkhldEhhblN0cmluZyI6IjA2LzEyLzIwMjYiLCJIZXRIYW5UaW1lIjoiMTc5NjUxNTIwMDAwMCIsIm5iZiI6MTc2ODQ5NjQwMCwiZXhwIjoxNzk2NjYyODAwfQ.GBx8YXuQEqPaUXMDOr0_pUGzusJf-6qUINIgi5L8LPw"
    }
})

// tao interceptor de tu dong tao
axiosInstance.interceptors.request.use((config) => {
    // B1 : lay token localStorage
    const user = localStorage.getItem("user")
    // B2 : neu token ton tai, them vao header Authorization
    if (user) {
        // parse user de lay accessToken
        const { accessToken } = JSON.parse(user)
        config.headers.Authorization = `Bearer ${accessToken}`
    }
    // B3 : tra ve config da chinh sua de request gui ve API
    return config
})
export default axiosInstance;