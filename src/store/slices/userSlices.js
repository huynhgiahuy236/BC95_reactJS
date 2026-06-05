// slice của user
// 1. state: lưu thông tin user (id, name, email, role,...)
// 2. reducers: là nơi nhận action từ các component hoặc page
// => cập nhật lại state của user
// 3. selectors: là nơi định nghĩa các hàm để lấy dữ liệu từ state của user

import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    currentUser: JSON.parse(localStorage.getItem('user')) || null
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        // action 1: login
        // param 1: state hiện tại của user
        // param 2: action được gửi từ component hoặc page (thường có payload)
        login: (state, action) => {
            state.currentUser = action.payload
            // lưu thông tin user vào localStorage
            localStorage.setItem('user', JSON.stringify(action.payload))
        },
        // action 2: logout
        logout: (state, action) => {
            state.currentUser = null
            // xoa thong tin user khoi localStorage
            localStorage.removeItem('user')
        }
    }
})
// export cac action de componet hoac page co the dispatch
export const {
    login,
    logout
} = userSlice.actions

// define selector de lay thong tin user tu state
export const selectCurrentUser = (state) => state.user.currentUser

// export reducer de configureStore co the nhan dien duoc
export default userSlice.reducer