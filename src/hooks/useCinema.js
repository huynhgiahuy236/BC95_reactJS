import { useQuery } from "@tanstack/react-query"
import cinemaApi from "../API/cinemaApi"

export const useHeThongRap = () => {
    return useQuery({
        queryKey: ["heThongRap"],
        queryFn: async () => {
            const res = await cinemaApi.getHeThongRap()
            return res.data.content
        }
    })
}
export const useCumRapTheoHeThong = (maHeThongRap) => {
    return useQuery({
        queryKey: ["cumRapHeThong", maHeThongRap],
        queryFn: async () => {
            const res = await cinemaApi.getCumRapHeThong(maHeThongRap)
            return res.data.content
        },
        // chi goi Api khi maHeThongRap hop he
        enabled: maHeThongRap !== undefined && maHeThongRap !== null && maHeThongRap !== ""
    })
}