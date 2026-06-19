import { useQuery } from "@tanstack/react-query"
import { userApi } from "../API/userApi.js"

export const useProfile = (isLoggedIn) => {
    return useQuery({
        queryKey: ['profile'],
        queryFn: async () => {
            const res = await userApi.getProfile()
            return res.data.content
        },
        enabled: isLoggedIn, // chi goi Api khi nguoi dung dang nhap
        refetchOnMount: "always",
    })
}
export default useProfile