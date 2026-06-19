import axiosInstance from "./axiosInstance.js"

export const movieApi = {
    // lay danh sach phim
    getMovieList: (maNhom = "GP01") => {
        return axiosInstance.get(`/QuanLyPhim/LayDanhSachPhim?maNhom=${maNhom}`)
    },
    // lay chi tiet film
    getMovieDetail: (maPhim) => {
        return axiosInstance.get(`/QuanLyPhim/LayDanhSachPhim?maPhim=${maPhim}`)
    },
    // lay danh sach bannner
    getBanners: () => {
        return axiosInstance.get(`/QuanLyPhim/LayDanhSachBanner`)
    }
}