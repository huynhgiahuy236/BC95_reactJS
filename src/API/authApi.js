import { data } from "react-router-dom";
import axiosInstance from "./axiosInstance";

export const authApi = {
    // data:{tai khoan, pass{string}}
    login: (data) => {
        return axiosInstance.post("/QuanLyNguoiDung/DangNhap", data, {
            headers: {
                "Content-Type": "application/json-patch+json"
            }
        })
    }
}