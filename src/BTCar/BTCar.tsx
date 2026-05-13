import React, { useState } from "react";

const BTCar = () => {
  const [imgCar, setImgCar] = useState("img/black-car.jpg");

  const handldChangeColor = (color: any) => {
    setImgCar(`img/${color}-car.jpg`);
  };
  return (
    <div className="mt-10 text-center text-3xl font-bold text-white">
      <h1 className="text-green-700">Bài Tập Car</h1>

      <div className="grid grid-cols-12 gap-10 m-5">
        <div className="col-span-4">
          <img src={imgCar} alt="" />
        </div>
        <div className="col-span-8">
          <div className="flex gap-5">
            <button
              className="py-2  px-5 rounded-lg bg-black/90 cursor-pointer text-sm"
              onClick={() => handldChangeColor("black")}
            >
              Đen Nhám
            </button>
            <button
              className="py-2 px-5 rounded-lg bg-gray-400 cursor-pointer text-sm"
              onClick={() => setImgCar("img/silver-car.jpg")}
            >
              Xam
            </button>
            <button
              className="py-2 px-5 rounded-lg bg-red-700/90 cursor-pointer text-sm"
              onClick={() => setImgCar("img/red-car.jpg")}
            >
              Do
            </button>
            <button
              className="py-2 px-5 rounded-lg bg-black cursor-pointer text-sm"
              onClick={() => setImgCar("img/steel-car.jpg")}
            >
              Đen Bong
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BTCar;
