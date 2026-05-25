import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import ProductCart from "./components/ProductCart";
import Cart from "./components/Cart";
import ProductDetail from "./components/ProductDetail";
import axios, { Axios } from "axios";
// import data from "./data/phone.json";
const App = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const API_URl = "https://69cfbef7a4647a9fc675e9d2.mockapi.io/phone/phone";

  // state chứa keyword tìm kiếm, giỏ hàng, sản phẩm được chọn và trạng thái mở/đóng của giỏ hàng
  const [keyword, setKeyword] = useState("");
  // state chua cart, setCart la function de cap nhat cart, khoi tao cart la mot mang rong
  const [cart, setCart] = useState({});

  // state để quản lý trạng thái mở/đóng của giỏ hàng
  const [isCartOpen, setIsCartOpen] = useState(false);
  // state để quản lý trạng thái mở/đóng của chi tiết sản phẩm
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
  // state để lưu sản phẩm được chọn để hiển thị chi tiết
  const [selectedProduct, setSelectedProduct] = useState(null);
  // useEffect để call API lấy products
  // param 1: callback function chứa logic call API
  // param 2: dependency array
  // TH1: nếu để [] thì callback chỉ chạy 1 lần sau lần render đầu tiên
  // TH2: nếu để [keyword] thì callback sẽ chạy sau lần render đầu tiên và mỗi khi keyword đổi
  // th1 phù hợp để call API lấy products vì ta chỉ muốn call 1 lần sau khi component được mount, không cần call lại khi keyword đổi vì việc filter sản phẩm sẽ được thực hiện ở phần render dựa trên data đã có sẵn
  // useEffect(() => {
  //   // bật loading để hiển thị giao diện loading trong khi chờ API trả về
  //   setIsLoading(true);
  //   // call API sử dụng axios
  //   axios
  //     .get(API_URl)
  //     .then((response) => {
  //       // khi API trả về thành công thì set data = response.data (dữ liệu trả về từ API)
  //       setData(response.data);
  //       console.log("Data fetched successfully:", response.data);
  //     })
  //     .catch((error) => {
  //       // khi API trả về lỗi thì log lỗi ra console
  //       console.error("Error fetching data:", error);
  //     })
  //     .finally(() => {
  //       // khi API trả về thành công hay lỗi thì đều tắt loading
  //       setIsLoading(false);
  //     });
  // }, []);
  // th2 không phù hợp để call API lấy products vì mỗi khi keyword đổi thì callback sẽ chạy lại và gọi API, điều này không cần thiết vì việc filter sản phẩm sẽ được thực hiện ở phần render dựa trên data đã có sẵn, không cần phải gọi API lại mỗi khi keyword đổi
  useEffect(() => {
    axios.get(API_URl)
      .then((response) => { 
        setIsLoading(true);
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      })
      .finally(() => {
        setIsLoading(false);
      });
    if (keyword === "") {
      // nếu keyword rỗng thì gọi API lấy tất cả sản phẩm
       setData(data);
    } else {
      const urlApiWithKeyword = `${API_URl}?search=${keyword}`;
      axios.get(urlApiWithKeyword)
        .then((response) => {
          setData(response.data);
          console.log("Data fetched successfully with keyword:", response.data);
        })
        .catch((error) => {
          console.error("Error fetching data with keyword:", error);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, [keyword]);

  const handleOpenDetail = (product) => {
    // khi click vào 1 sản phẩm → gọi handleOpenDetail(product) → App.setSelectedProduct(product) → ProductDetail nhận product làm prop và hiển thị
    setSelectedProduct(product);
    setIsProductDetailOpen(true);
  };
  const handleSearch = (keyword) => {
    setKeyword(keyword);
  };
  const handleOpenCart = () => {
    // khi click vào nút thêm vào giỏ → gọi handleAddToCart(id) → App cập nhật cart (tăng số lượng của sản phẩm có id tương ứng lên 1) → cartQty của sản phẩm đó cập nhật → badge số lượng trên ProductCart và ProductDetail cập nhật
    setIsCartOpen(true);
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
  const handleAddToCart = (productId) => {
    // khi click vào nút thêm vào giỏ → gọi handleAddToCart(id) → App cập nhật cart (tăng số lượng của sản phẩm có id tương ứng lên 1) → cartQty của sản phẩm đó cập nhật → badge số lượng trên ProductCart và ProductDetail cập nhật
    // tim san pham trong cart xem co san pham co id trung voi productId hay khong
    const currentQty = cart[productId] || 0;
    // th1: neu san pham co trong cart roi thi tang cartQty len 1
    // th2: neu san pham chua co trong cart thi them san pham vao cart voi cartQty = 1
    // tham chieu - tham tri
    // neu key productId da co trong cart => cart[productId] = currentQty + 1
    // neu key productId chua co trong cart => cart[productId] = 1
    const newCart = {
      ...cart, // copy tat ca san pham trong cart
      [productId]: currentQty + 1, // cap nhat cartQty cua san pham co id trung voi productId len 1
    };
    setCart(newCart); // cap nhat cart = newCart
  };
  // tao bien totalQty de tinh tong so luong san pham trong cart
  // vi cart la mot object co dang { productId: cartQty, ... } nen de tinh tong so luong san pham trong cart thi ta can lay tat ca cartQty trong cart va cong lai
  // Object.values(cart) se tra ve mot mang chua tat ca cartQty trong cart, sau do su dung reduce de cong tat ca cartQty lai voi nhau
  // {key: value}
  // 1. lay value => object.values(cart) => [cartQty1, cartQty2, ...]
  // 2. lay key => object.keys(cart) => [productId1, productId2, ...]
  const totalQty = Object.values(cart).reduce((total, qty) => total + qty, 0);
  return (
    <div className="bg-gray-100 min-h-screen p-4">
      <div className=" max-w-5xl mx-auto">
        <Header totalQty={totalQty} onCartClick={handleOpenCart} />
        <SearchBar onSearch={(keyword) => handleSearch(keyword)} />
        <div className="grid grid-cols-3 gap-5 border border-gray-300 rounded-2xl">
          {data.map((product) => (
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
      <Cart
        cart={cart}
        setCart={setCart}
        data={data}
        isCartOpen={isCartOpen}
        setIsCartOpen={setIsCartOpen}
      />

      <ProductDetail
        product={selectedProduct}
        onAddToCart={handleAddToCart}
        closeDetail={() => {
          setSelectedProduct(null);
          setIsProductDetailOpen(false);
        }}
      />
    </div>
  );
};

export default App;
