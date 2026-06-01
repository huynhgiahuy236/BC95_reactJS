import React, { use, useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

// lấy info user từ localStorage
// VÌ thời gian lưu user vào localStorage chậm hơn thời gian
// lấy user của Header nên sẽ có trường hợp user bị null khi lần đầu render Header
// giai phap 1: dung useContext để lưu user info, khi login xong sẽ cập nhật user info vào context, Header sẽ lấy user info từ context để hiển thị giao diện phù hợp
// giai phap 2: dung useState để lưu user info trong Header, khi login xong sẽ cập nhật user info vào state của Header, Header sẽ lấy user info từ state để hiển thị giao diện phù hợp
// giai phap 3: chuyen user => ham getUser() de moi lan render Header se goi ham getUser() de lay user info tu localStorage, khi login xong se cap nhat user info vao localStorage, Header se goi ham getUser() de lay user info tu localStorage de cap nhat giao dien
//C1: const user = JSON.parse(localStorage.getItem("user"));
// QUY TRÌNH RENDER user infor
// B1: react sẽ load tất cả component bao gồm là Header
// => load user infor từ localStorage (null)
// sau khi login thành công => lưu user vào localStorage
// chuyển sang trang / => gọi hàm getUser để lấy user infor mới nhất
// => cập nhật lại state userInfo => Header re-render => hiển thị tên user ở header
const getUser = () => JSON.parse(localStorage.getItem("user"));
const Header = () => {
  const [users, setUsers] = useState(getUser);
  const navigate = useNavigate();
  const handleLogout = () => {
    // xoa user info trong localStorage khi click logout
    localStorage.removeItem("user");
    // cap nhat state user thanh null de cap nhat giao dien
    setUsers(null);
    // redirect ve trang home sau khi logout, tuy vao nghiep vu projext ma co the redirect ve trang login, home, about, product, profile, contact, ...
    // window.location.href = "/"; // cach 1: dung window.location.href de redirect, cach nay se load lai toan bo trang web
    // cach 2: dung useNavigate hook cua react-router-dom de redirect, cach nay se khong load lai toan bo trang web, chi cap nhat giao dien
    // const navigate = useNavigate();
    // navigate("/"); // redirect ve trang home sau khi logout\\
    navigate("/"); // redirect ve trang home sau khi logout
  };
  return (
    <header className="bg-blue-900 text-white fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <a href="/" className="text-2xl font-bold">
              Tailwind{" "}
            </a>
          </div>
          {/* Navigation Menu */}
          <nav className="hidden md:flex space-x-10 text-lg">
            <NavLink to="/About" className="hover:text-gray-300 transition-all">
              About Us
            </NavLink>
            <NavLink
              to="/Product"
              className="hover:text-gray-300 transition-all"
            >
              Product
            </NavLink>
            <NavLink
              to="/Register"
              className="hover:text-gray-300 transition-all"
            >
              Register
            </NavLink>
            <NavLink
              to="/Profile"
              className="hover:text-gray-300 transition-all"
            >
              Profile
            </NavLink>
            <NavLink
              to="/Contact"
              className="hover:text-gray-300 transition-all"
            >
              Contact
            </NavLink>
            {/* #> Admin chỉ hiển thị khi user có role là admin */}
            {getUser() && getUser().role === "admin" && (
              <NavLink
                to="/Admin"
                className="hover:text-gray-300 transition-all"
              >
                {" "}
                Admin{" "}
              </NavLink>
            )}
          </nav>
          {/* Call-to-Action Button */}
          <div className="hidden md:block">
            {/* thay thế thẻ a => NavLink hoặc Link của react-router-dom 
                <NavLink
                // /about là endpoint được define trong App.jsx
                // react router dom sẽ tự động điều hướng đến endpoint đó khi click vào NavLink
            */}
            <NavLink
              to="/Contact"
              className="bg-yellow-500 hover:bg-yellow-400 text-black py-2 px-6 rounded-full text-lg transition-all"
            >
              Get in Touch
            </NavLink>
            {/* neu co user infor ==> hien ten user va nut logout */}
            {getUser() ? (
              <div className=" items-center gap-4 ml-4">
                <span className="text-white font-medium">
                  {getUser().name || "User"}
                </span>
                <button
                  className="bg-red-500 hover:bg-red-400 text-white py-1 px-4 rounded-full text-sm transition-all"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </div>
            ) : (
              <NavLink
                to="/Login"
                className="bg-yellow-500 hover:bg-yellow-400 text-black py-2 px-6 rounded-full text-lg transition-all"
              >
                Login
              </NavLink>
            )}
          </div>
          {/* Mobile Menu Button (for smaller screens) */}
          <div className="md:hidden flex items-center">
            <button id="menu-button" className="text-white focus:outline-none">
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
        {/* Mobile Navigation Menu */}
        <div id="mobile-menu" className="md:hidden mt-5 hidden space-y-4">
          <a
            href="/"
            className="block text-lg hover:text-gray-300 transition-all"
          >
            Home
          </a>
          <a
            href="#services"
            className="block text-lg hover:text-gray-300 transition-all"
          >
            Services
          </a>
          <a
            href="#about"
            className="block text-lg hover:text-gray-300 transition-all"
          >
            About Us
          </a>
          <a
            href="#contact"
            className="block text-lg hover:text-gray-300 transition-all"
          >
            Contact
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
