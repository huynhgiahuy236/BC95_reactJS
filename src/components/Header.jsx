import React from 'react'

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-blue-400 text-white py-8 px-6 rounded-2xl mb-8 shadow-lg">
      <div className="flex items-center justify-between">

        {/* Bên trái: tiêu đề và mô tả */}
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight">TEST</h1>
          <p className="text-blue-100 mt-1 text-sm">BC95</p>
        </div>

        {/* Bên phải: nút giỏ hàng — click → gọi onCartClick lên App */}
        <button
          
          // onCartClick được nhận từ App qua props
          // Khi click → App.setIsCartOpen(true) → CartPopup hiện lên
          // Đây là LIFTING STATE UP: con kích hoạt, cha quyết định mở popup
          className="relative p-2 rounded-xl hover:bg-white/20 transition-colors"
        >
          <i className="fa-solid fa-cart-shopping text-2xl" />

          {/* Badge số lượng — chỉ hiện khi có sản phẩm trong giỏ */}
          1
        </button>

      </div>
    </header>
  )
}

export default Header