import React, { useState } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import ProductCart from "./components/ProductCart";
import Cart from "./components/Cart";
import ProductDetail from "./components/ProductDetail";
import data from "./data/phone.json";
const App = () => {
  // state chứa keyword tìm kiếm, giỏ hàng, sản phẩm được chọn và trạng thái mở/đóng của giỏ hàng
  const [keyword, setKeyword] = useState("");
  // state chua cart, setCart la function de cap nhat cart, khoi tao cart la mot mang rong
  const [cart, setCart] = useState([]);
  // state để quản lý trạng thái mở/đóng của giỏ hàng
  const [isCartOpen, setIsCartOpen] = useState(false);
  // state để quản lý trạng thái mở/đóng của chi tiết sản phẩm
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
  const handleOpenDetail = (product) => {
    // khi click vào 1 sản phẩm → gọi handleOpenDetail(product) → App.setSelectedProduct(product) → ProductDetail nhận product làm prop và hiển thị
    setSelectedProduct(product);
    setIsProductDetailOpen(true);
  };
  const handleSearch = (keyword) => {
    setKeyword(keyword);
  };
  const filterProduct =
    keyword === ""
      ? data
      : data.filter((product) => {
          // chuan hoa keyword va ten san pham de tim kiem khong phan biet chu hoa chu thuong
          const lowerKeyword = keyword.toLowerCase();
          const lowerName = product.name.toLowerCase();
          // kiem tra xem ten san pham co chua keyword hay khong
          return lowerName.includes(lowerKeyword);
        });

  // state để lưu sản phẩm được chọn để hiển thị chi tiết
  const [selectedProduct, setSelectedProduct] = useState(null);
  return (
    <div className="bg-gray-100 min-h-screen p-4">
      <div className=" max-w-5xl mx-auto">
        <Header />
        <SearchBar onSearch={(keyword) => handleSearch(keyword)} />
        <div className="grid grid-cols-3 gap-5 border border-gray-300 rounded-2xl">
          {filterProduct.map((product) => (
            <ProductCart
              key={product.id}
              product={product}
              // vì event onOpenDetail có tham số product nên
              // không thể viết onOpenDetail={handleOpenDetail} mà phải viết
              // () => handleOpenDetail(product)
              onOpenDetial={() => handleOpenDetail(product)}
            />
          ))}
        </div>
      </div>

      {/* popup */}
      <Cart />

      <ProductDetail
        product={selectedProduct}
        closeDetail={() => {
          setSelectedProduct(null);
          setIsProductDetailOpen(false);
        }}
      />
    </div>
  );
};

export default App;
