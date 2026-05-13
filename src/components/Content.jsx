import React, { useState } from "react";

const Content = () => {
  const [wearGlasses, setWearGlasses] = useState(1);
  const car_color = [
    {
      car: "https://i1-vnexpress.vnecdn.net/2025/12/08/Porsche-911-2025-1-jpeg-1765179614.jpg?w=2400&h=0&q=100&dpr=1&fit=crop&s=Om08jo0xJcmvqFWDmPHsow&t=image",
      color: "Xanh",
    },
    {
      car: "https://porsche-vietnam.vn/wp-content/uploads/2018/10/CY24J5ROX0008_low-headbanner-1600x615.jpg",
      color: "Đỏ",
    },
    {
      car: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Porsche/911/11757/1762933836560/front-left-side-47.jpg",
      color: "Đen",
    },
  ];
  return (
    <>
      <div className=" w-[40%] mx-auto bg-blue-200 grid gap-5 justify-center p-10 mt-10 rounded-3xl">
        <div>
          {wearGlasses !== false && (
            <img
              src={car_color[wearGlasses].car}
              alt="kinh loi"
              className="h-80 w-120"
            />
          )}
        </div>
        <div className="flex gap-5 justify-center">
          <select
            name=""
            id=""
            className="w-20 py-2 px-4 border-2 border-blue-800 outline-0 text-white bg-blue-800 rounded-lg"
            onChange={(e) => setWearGlasses(e.target.value)}
          >
            {car_color.map((item, index) => (
              <option key={item.color} value={index}>
                {item.color}
              </option>
            ))}
          </select>
        </div>
        <button
          className="bg-blue-500 rounded-lg py-2 px-8 mx-auto cursor-pointer"
          onClick={() => setWearGlasses(0)}
        >
          Reset
        </button>
      </div>
    </>
  );
};

export default Content;
