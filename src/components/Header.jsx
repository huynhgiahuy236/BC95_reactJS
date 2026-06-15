import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout, selectorIsLoggedIn, selectorUser } from "../stores/authSlice";

const Header = () => {
  const isLoggedIn = useSelector(selectorIsLoggedIn);
  const user = useSelector(selectorUser);
  const dispatch = useDispatch();
  const hanldeLogout = () => {
    dispatch(logout());
  };
  return (
    <div>
      <header className="bg-gray-900 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link
            to="/"
            className="text-2xl font-bold text-yellow-400 tracking-wide"
          >
            🎬 MovieApp
          </Link>
          <nav className="flex items-center gap-6">
            {isLoggedIn ? (
              <div>
                <span className="text-sm text-gray-300">
                  Xin chào,{" "}
                  <span className="text-yellow-400 font-medium">
                    {user?.name}
                  </span>
                </span>
                <button
                  onClick={hanldeLogout}
                  className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg text-sm font-medium transition-colors text-white"
                >
                  Đăng xuất
                </button>
              </div>
            ) : (
              <Link
                to="/login"
                className="hover:text-yellow-400 transition-colors text-white"
              >
                Dang Nhap
              </Link>
            )}
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;
