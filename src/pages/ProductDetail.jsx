import React, { useEffect, useState } from "react";
import { data, Link, useParams, useSearchParams } from "react-router-dom";
import { PRODUCT_URL } from "../constants";
import axios from "axios";
const ProductDetail = () => {
  const { id } = useParams();
  const [isDetail, setIsDetail] = useState({});
  const detailsProductAPI = `${PRODUCT_URL}/${id}`;
  useEffect(() => {
    axios
      .get(detailsProductAPI)
      .then((res) => {
        setIsDetail(res.data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {});
  });
  return (
    <div>
      <main className="pt-20 pb-16">
        <div className="max-w-2xl mx-auto px-4 py-8">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden flex">
            {/* Left: Info */}
            <div className="flex-1 p-8 flex flex-col justify-between gap-6">
              <div>
                <span className="inline-block text-xs font-semibold uppercase tracking-widest text-blue-600 bg-blue-50 px-3 py-1 rounded-full mb-3">
                  {isDetail.name}
                </span>
                <h1 className="text-2xl font-bold text-gray-800 mb-2">
                  {isDetail.type}
                </h1>
                <p className="text-gray-500 text-sm leading-relaxed mb-0">
                  {isDetail.desc}
                </p>
              </div>

              <div>
                <p className="text-3xl font-bold text-blue-600 mb-5">
                  {isDetail.price}
                </p>

                {/* Nút thêm vào giỏ */}
                <button className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors">
                  Thêm vào giỏ
                </button>

                {/* Điều hướng */}
                <div className="flex gap-2 mt-3">
                  <button className="flex-1 py-2.5 text-sm text-gray-400 hover:text-gray-700 rounded-lg border border-gray-100 hover:border-gray-300 transition-colors">
                    ← Trước
                  </button>
                  <button className="flex-1 py-2.5 text-sm text-gray-400 hover:text-gray-700 rounded-lg border border-gray-100 hover:border-gray-300 transition-colors">
                    Tiếp →
                  </button>
                </div>
              </div>
            </div>

            {/* Right: Image */}
            <div className="w-56 bg-gray-50 flex items-center justify-center p-6 border-l border-gray-100">
              <img
                src={isDetail.img}
                alt={isDetail.name}
                className="w-full h-40 object-contain rounded-lg"
              />
            </div>
          </div>
          <button className="w-full py-2.5 bg-blue-600 text-white rounded-md hover:bg-blue-700 font-medium transition-colors">
            Thêm vào giỏ hàng
          </button>
          <Link
            to="/product"
            className="mt-6 inline-block text-sm text-blue-600 hover:underline"
          >
            ← Quay lại danh sách
          </Link>
        </div>
      </main>
    </div>
  );
};

export default ProductDetail;
