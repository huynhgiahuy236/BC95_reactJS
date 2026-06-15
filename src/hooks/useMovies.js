import { useQuery } from "@tanstack/react-query"
import { movieApi } from "../API/movieApi"

// custom hook de lay danh sach phim
export const useMovieList = (maNhom = "GP01") => {
    return useQuery({
        // queryKey: dinh danh duy nhat de luu trong cache
        queryKey: ["moviesList", maNhom],
        // queryFn: ham thuc hien goi Api de lay du lieu
        queryFn: async () => {
            const res = await movieApi.getMovieList(maNhom)
            return res.data.content
        },
    })
}

export const useMovieDetail = (maPhim) => {
    return useQuery(({
        queryKey: ["moviesDetail", maPhim],
        queryFn: async () => {
            const res = await movieApi.getMovieDetail(maPhim)
            return res.data.content
        },
        enabled: maPhim !== undefined && maPhim !== null && maPhim !== ""
        // chi chay queryFn khi maPhim co ga tri
    }))
}