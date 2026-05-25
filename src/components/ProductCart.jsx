import React from "react";

const ProductCart = ({ product, onOpenDetial }) => {
  return (
    <div
      className="rounded-2xl  overflow-hidden cursor-pointer transition-all duration-200 p-5"
      // Click → gọi onOpenDetail → App.setDetailProduct(product) → mở popup chi tiết
      // onOpenDetail gui tu con ProductCart len App, App se truyen onOpenDetail xuong tung ProductCartproduct, khi click vao product se goi onOpenDetail(product) len App, App se setDetailProduct(product) va mo popup chi tiet
     
    >
      {/* Ảnh sản phẩm */}

      <div className="bg-white rounded-2xl shadow-2xl w-full h-full overflow-hidden">
        <div className="relative w-full h-auto overflow-hidden">
          <img
            src={product.img}
            alt={product.name}
            className="w-full h-full object-cover rounded-lg"
          />
          {/* Badge số lượng — chỉ hiện khi cartQty > 0 */}

          <div className="absolute top-2 right-2 bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded-full">
            {product.cartQty} trong giỏ
            {/* cartQty nhận từ App — App.cart[id] tính ra và truyền xuống */}
          </div>
        </div>
        {/* Thông tin sản phẩm */}
        <div className="p-4">
          <span className="text-xs font-semibold uppercase tracking-wider text-blue-500 bg-blue-100 px-2 py-1 rounded-full">
            Smartphone
          </span>
          <h3 className="text-base font-bold text-gray-800 mt-2 mb-1">
            {product.name}
          </h3>
          <p className="text-lg font-extrabold text-blue-600">
            {product.price.toLocaleString("vi-VN")}₫
          </p>
          <p className="text-sm text-gray-400 mt-2" onClick={onOpenDetial}>Nhấn để xem chi tiết →</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCart;
