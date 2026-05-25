import React from "react";

const Cart = ({ isCartOpen, setIsCartOpen, cart, setCart, data }) => {
  if (!isCartOpen) return null;

  const cartItems = Object.entries(cart)
    .map(([id, qty]) => {
      const product = data.find((p) => String(p.id) === String(id));

      if (!product) return null;

      return {
        ...product,
        cartQty: qty,
      };
    })
    .filter(Boolean);

  const increase = (id) => {
    setCart((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1,
    }));
  };

  const decrease = (id) => {
    setCart((prev) => {
      const newCart = { ...prev };

      if (newCart[id] <= 1) {
        delete newCart[id];
      } else {
        newCart[id] -= 1;
      }

      return newCart;
    });
  };

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.cartQty,
    0,
  );

  return (
    <div
      className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-6"
      onClick={() => setIsCartOpen(false)}
    >
      <div
        className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-extrabold text-gray-800">Giỏ hàng</h2>

          <button
            onClick={() => setIsCartOpen(false)}
            className="text-gray-400 hover:text-black text-xl"
          >
            ✕
          </button>
        </div>

        <ul className="space-y-3 mb-4 max-h-[400px] overflow-auto">
          {cartItems.length === 0 ? (
            <div className="text-center text-gray-400 py-10">
              Giỏ hàng trống
            </div>
          ) : (
            cartItems.map((item) => (
              <li key={item.id} className="flex items-center gap-3 text-sm">
                <span className="flex-1 truncate font-medium">{item.name}</span>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => decrease(item.id)}
                    className="w-7 h-7 rounded-full bg-gray-100 hover:bg-red-100 hover:text-red-500"
                  >
                    −
                  </button>

                  <span className="w-5 text-center font-bold">
                    {item.cartQty}
                  </span>

                  <button
                    onClick={() => increase(item.id)}
                    className="w-7 h-7 rounded-full bg-gray-100 hover:bg-blue-100 hover:text-blue-500"
                  >
                    +
                  </button>
                </div>

                <span className="text-blue-600 font-bold w-24 text-right">
                  {(item.price * item.cartQty).toLocaleString("vi-VN")}₫
                </span>
              </li>
            ))
          )}
        </ul>

        <div className="border-t pt-4 flex justify-between font-extrabold">
          <span>Tổng</span>
          <span className="text-blue-600 text-lg">
            {totalPrice.toLocaleString("vi-VN")}₫
          </span>
        </div>
      </div>
    </div>
  );
};

export default Cart;
