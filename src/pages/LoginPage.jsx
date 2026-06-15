import { useFormik } from "formik";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { authApi } from "../API/authApi";
import { useDispatch } from "react-redux";
import { login } from "../stores/authSlice";
const loginSchema = Yup.object().shape({
  taiKhoan: Yup.string().required("tai khoan ko duoc de trong"),
  matkhau: Yup.string().required("Mat khau khong duoc de trong"),
});

const LoginPage = () => {
  // define state
  const dispatch = useDispatch();
  const [apiError, setApiError] = useState("");
  // dispatch
  const navigate = useNavigate();
  // ham xu li submit form
  const formik = useFormik({
    // gia tri ban dau cua form
    initialValues: {
      taiKhoan: "",
      matkhau: "",
    },
    // valdidation Schema de validation form
    validationSchema: loginSchema,
    // ham xu li submit form
    onSubmit: async (values) => {
      setApiError(""); // reset loi cu truoc khi goi Api
      try {
        const res = await authApi.login(values);
        // dispatch
        dispatch(login(res.data.content));
        navigate("/"); // dieu huong ve trang chu
      } catch (error) {
        console.log(error, "edu");
        setApiError(error.res?.data?.message);
      }
    },
  });
  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link href="/" className="text-3xl font-bold text-yellow-400">
            🎬 MovieApp
          </Link>
          <p className="text-gray-400 mt-2">Đăng nhập để tiếp tục</p>
        </div>
        {/* Form Card */}
        <div className="bg-gray-800 rounded-2xl shadow-2xl p-8">
          <h2 className="text-white text-2xl font-bold mb-6">Đăng nhập</h2>
          <form onSubmit={formik.handleSubmit}>
            {apiError && (
              <p class="text-red-400 text-sm mt-1">dadasas{apiError}</p>
            )}
            {/* tai khoan Field */}
            <div className="mb-5">
              <label className="block text-gray-300 text-sm font-medium mb-2">
                Nhập tài khoản
              </label>
              {/* State: normal */}
              <input
                type="text"
                {...formik.getFieldProps("taiKhoan")}
                placeholder="user123"
                className="w-full bg-gray-700 text-white placeholder-gray-400 border border-gray-600 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-yellow-400 transition-all"
              />
              {/* State: error — thêm border-red-500, bỏ border-gray-600 */}
              {/* <input className="w-full bg-gray-700 text-white placeholder-gray-400 border border-red-500 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-yellow-400" /> */}
              {/* Error message — hiện khi có lỗi */}
              {formik.touched.taiKhoan && formik.errors.taiKhoan && (
                <p className="text-red-400 text-sm mt-1">
                  {formik.errors.taiKhoan}
                </p>
              )}
            </div>
            {/* Password Field */}
            <div className="mb-6">
              <label className="block text-gray-300 text-sm font-medium mb-2">
                Mật khẩu
              </label>
              <input
                type="password"
                {...formik.getFieldProps("matkhau")}
                placeholder="••••••••"
                className="w-full bg-gray-700 text-white placeholder-gray-400 border border-gray-600 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-yellow-400 transition-all"
              />
              {formik.touched.matkhau && formik.errors.matkhau && (
                <p className="text-red-400 text-sm mt-1">
                  {formik.errors.matkhau}
                </p>
              )}
            </div>
            {/* Submit Button: State normal */}
            <button
              type="submit"
              className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-3 rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              Đăng nhập
            </button>
            {/* Submit Button: State loading */}
            {/*
    <button disabled class="w-full bg-yellow-700 text-gray-900 font-bold py-3 rounded-lg flex items-center justify-center gap-2">
      <div class="w-4 h-4 border-2 border-gray-900 border-t-transparent rounded-full animate-spin"></div>
      Đang đăng nhập...
    </button>
    */}
          </form>
          <p className="text-center text-gray-400 text-sm mt-6">
            Chưa có tài khoản?
            <Link href="/" className="text-yellow-400 hover:underline">
              Khám phá phim ngay
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
