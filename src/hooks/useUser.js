import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
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


export const useUser = () => {
    return useQuery({
        queryKey: ['user'],
        queryFn: async () => {
            const res = await userApi.getUserList()
            return res.data.content
        }
    })
}


export const useAddUser = () => {
    // dung queryClient de tuong tac voi cache cua tanstack query
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: (userData) => userApi.addUser(userData),
        onSuccess: () => {
            // sau khi them user thanh cong se thong bao cho tanstackqQuerry biet la cai list data trong cache da cu va can goi lai Api de lay du lieu moi
            queryClient.invalidateQueries({ queryKey: ['user'] })
        }
    })
}
