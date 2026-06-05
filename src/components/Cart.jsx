import React from "react";

const Cart = () => {
  return (
    <div>
      {/* Mô phỏng trang nền phía sau drawer */}
      <div className="p-8 text-gray-400 text-sm">
        ← Trang Products (nền phía sau drawer)
      </div>
      {/* Overlay — click để đóng (bg-black/40 z-40) */}
      <div className="fixed inset-0 bg-black/40 z-40" />
      {/* ==========================================
    CART DRAWER
    Tương đương: src/components/CartDrawer.jsx
    fixed top-0 right-0 h-full w-80
  =========================================== */}
      <div className="fixed top-0 right-0 h-full w-80 bg-white shadow-xl z-50 flex flex-col">
        {/* Header drawer
   h2: "Giỏ hàng ({items.length})"
   × button: onClick={onClose} */}
        <div className="flex items-center justify-between px-4 py-4 border-b">
          <h2 className="font-bold text-gray-800">Giỏ hàng (2)</h2>
          <button className="text-gray-400 hover:text-gray-600 text-2xl leading-none">
            ×
          </button>
        </div>
        {/* Danh sách sản phẩm (flex-1 overflow-y-auto p-4)
   items.map(item => <li>) */}
        <div className="flex-1 overflow-y-auto p-4">
          <ul className="space-y-4">
            {/* Item 1: Áo thun trắng × 2 */}
            <li className="flex items-center gap-3">
              {/* Tên + giá đơn vị */}
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-800 truncate">
                  Áo thun trắng
                </p>
                <p className="text-xs text-gray-400">150.000đ</p>
              </div>
              {/* Nút tăng / giảm qty
         w-6 h-6 rounded (không phải rounded-full)
         dispatch(decreaseQty) / dispatch(addToCart) */}
              <div className="flex items-center gap-1">
                <button className="w-6 h-6 rounded border border-gray-300 text-gray-600 hover:bg-gray-100 text-sm flex items-center justify-center">
                  −
                </button>
                <span className="w-6 text-center text-sm font-medium">2</span>
                <button className="w-6 h-6 rounded border border-gray-300 text-gray-600 hover:bg-gray-100 text-sm flex items-center justify-center">
                  +
                </button>
              </div>
              {/* Nút xóa — dispatch(removeFromCart(item.id)) */}
              <button className="text-red-400 hover:text-red-600 text-lg leading-none">
                ×
              </button>
            </li>
            {/* Item 2: Giày sneaker × 1 */}
            <li className="flex items-center gap-3">
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-800 truncate">
                  Giày sneaker
                </p>
                <p className="text-xs text-gray-400">800.000đ</p>
              </div>
              <div className="flex items-center gap-1">
                <button className="w-6 h-6 rounded border border-gray-300 text-gray-600 hover:bg-gray-100 text-sm flex items-center justify-center">
                  −
                </button>
                <span className="w-6 text-center text-sm font-medium">1</span>
                <button className="w-6 h-6 rounded border border-gray-300 text-gray-600 hover:bg-gray-100 text-sm flex items-center justify-center">
                  +
                </button>
              </div>
              <button className="text-red-400 hover:text-red-600 text-lg leading-none">
                ×
              </button>
            </li>
          </ul>
          {/* Empty state — hiện khi items.length === 0
<div class="text-center py-16 text-gray-400">
  <p class="text-4xl mb-3">🛒</p>
  <p class="text-sm">Giỏ hàng đang trống</p>
</div>
*/}
        </div>
        {/* Footer — chỉ hiện khi items.length > 0
   border-t p-4 space-y-3 */}
        <div className="border-t p-4 space-y-3">
          {/* Tổng cộng — selectCartTotalPrice */}
          <div className="flex justify-between text-sm font-semibold text-gray-800">
            <span>Tổng cộng</span>
            <span className="text-blue-600">1.100.000đ</span>
          </div>
          {/* Nút Thanh toán — bg-blue-600 (không phải green) */}
          <a
            href="#"
            className="block w-full py-2.5 bg-blue-600 text-white text-sm font-semibold text-center rounded-md hover:bg-blue-700 transition-colors"
          >
            Thanh toán
          </a>
        </div>
      </div>
    </div>
  );
};

export default Cart;
