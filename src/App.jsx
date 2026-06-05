import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import MainLayout from "./layouts/MainLayout";
import Register from "./pages/Register";
import Product from "./pages/Product";
import About from "./pages/About";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import AdminLayout from "./layouts/AdminLayout";
import ProtectedRoute from "./layouts/ProtectedRouter";
import GuestRouter from "./layouts/GuestRoute";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
// LUU Y
// app nay chi define cac router
// VD: /home, /about, /contact, /products, /services, /blog, /login, /register, /profile, /settings, /dashboard, /admin, /user/:id, /search?q=keyword
// trang home ma co Header, Footer dung chung => layout
// vd: mainlayout.jsx => Header, Footer, Outlet
// https: 3000/home => mainlayout + home
// https: 3000/about => mainlayout + about
// https: 3000/contact => mainlayout + contact
// BrowserRouter: dung de bao ve cac router, chi co BrowserRouter moi co the truy cap duoc cac router ben trong
// Routes: dung de chua cac Route, chi co Routes moi co the chua duoc cac Route ben trong
// Route: dung de define 1 router, co 2 thuoc tinh la path va element, path la duong dan cua router, element la component se duoc render khi truy cap vao router do
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* trong nay se define cac router, vd: /home, /about, /contact, /products, /services, /blog, /login, /register, /profile, /settings, /dashboard, /admin, /user/:id, /search?q=keyword */}

          {/* <Route path="/product" element={<Product />} /> */}
          {/* lý thuyết 1: nested routes */}
          <Route path="/" element={<MainLayout />}>
            {/* them route check nua de chan user khong vao duoc page login va register neu da login roi */}
            {/* GuestRouter */}
            <Route path="/" element={<Home />}></Route>
            <Route
              path="/login"
              element={
                <GuestRouter>
                  <Login />
                </GuestRouter>
              }
            ></Route>
            {/* define param:*/}
            {/* dấu : -> xác định param */}
            {/* sau dấu : là tên của param, đặt tên nào cũng được */}
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/register" element={<Register />} />
            <Route path="about" element={<About />} />
            <Route path="product" element={<Product />} />
            <Route path="profile" element={<Profile />} />

            {/* enpoint /admin se duoc bao ve bang protectedRoute, chi co user co role la admin moi co the truy cap duoc */}
            <Route
              path="/admin"
              element={
                <ProtectedRoute requiresRole="admin">
                  <AdminLayout />
                </ProtectedRoute>
              }
            />
          </Route>
          {/* /* nếu không khớp bất kì enpoint nào sẽ đi vào page not found, luôn đứng ở cuối cùng */}
          <Route path="/*" element={<NotFound />} />
          {/* lý thuyết 2: protected routes */}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
