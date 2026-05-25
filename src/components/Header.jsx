import React from 'react'

const Header = ({ totalQty, onCartClick }) => {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-blue-400 text-white py-8 px-6 rounded-2xl mb-8 shadow-lg">
      <div className="flex items-center justify-between">

        {/* Bên trái: tiêu đề và mô tả */}
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight">TEST</h1>
          <p className="text-blue-100 mt-1 text-sm">BC95</p>
        </div>

        {/* Bên phải: nút giỏ hàng — click → gọi onCartClick lên App */}
        <button onClick={onCartClick}
          
          // onCartClick được nhận từ App qua props
          // Khi click → App.setIsCartOpen(true) → CartPopup hiện lên
          // Đây là LIFTING STATE UP: con kích hoạt, cha quyết định mở popup
          className="relative p-2 rounded-xl hover:bg-white/20 transition-colors"
        >
          <i className="fa-solid fa-cart-shopping text-2xl" />

          {/* Badge số lượng — chỉ hiện khi có sản phẩm trong giỏ */}
          {totalQty > 0 && (
            <span className="absolute -top-2 -right-1 bg-red-500 text-white text-xs font-bold rounded-full h-6 w-6 flex items-center justify-center">
              {totalQty}
            </span>
          )}
        </button>

      </div>
    </header>
  )
}

export default Header