const userMiddleware = (store) => (next) => (action) => {
    // B1: kiem tra action dang duoc dispatch
    // middleware nay chi nhan duoc action user/login va user/logout
    switch (action.type) {
        case 'user/login':
            // luu thong tin user vao localStorage
            localStorage.setItem('user', JSON.stringify(action.payload))
            break
        case 'user/logout':
            // xoa user khoi localStorage
            localStorage.removeItem('user')
            break
        default:
            // cac action khac khong lam gi ca
            break

    }
    //B2: gui action den middleware tiep theo hoac reducer
    next(action)
}
export default userMiddleware