import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  // state chứa keyword tìm kiếm, loading, error
  const [inputValue, setInputValue] = useState("");
  // kiem tra xem user co dang nhap hay khong, neu dung 2s sau moi hien ket qua tim kiem
  let timeoutId = null;
  // hàm xử lý khi user gõ vào input
  const handleChange = (e) => {
    const value = e.target.value;
    setInputValue(value);

    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      // gui event filter len App de App xu ly tim kiem va cap nhat ket qua
      // onSearch(value.trim()) la event gui tu SearchBar len App, App se nhan duoc keyword tim kiem va cap nhat ket qua tim kiem
      onSearch(value.trim());
    }, 2000);
  };
  return (
    <div className="mb-6">
      <div className="relative">
        {/* Icon kính lúp */}
        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
          <i className="fa-solid fa-magnifying-glass" />
        </div>

        {/* Input — onChange gọi handleChange mỗi khi user gõ */}
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder="Tìm kiếm sản phẩm..."
          className="w-full pl-12 pr-12 py-3 rounded-2xl border-2 border-gray-200 bg-white
            text-gray-800 placeholder-gray-400 text-sm
            focus:outline-none focus:border-blue-400 transition-colors"
        />

        {/* Bên phải: spinner khi đang chờ, nút X khi có text */}
        <div className="absolute right-4 top-1/2 -translate-y-1/2"></div>
      </div>

      {/* Dòng trạng thái */}
      <div className="mt-2 h-4 px-1">
        <p className="text-xs text-blue-400">Đang tìm kiếm sau 2 giây...</p>
      </div>
    </div>
  );
};

export default SearchBar;
