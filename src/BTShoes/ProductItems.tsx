import React from "react";
import ProductDetail from "./ProductDetail";

const ProductItems = (props: any) => {
  const { shoes,handleProDetail } = props;

  return (
    <div className="grid justify-center space-y-3 m-2 border p-4 border-gray-200 rounded-lg ">
      <img
        src={shoes.image}
        alt={shoes.name}
        className="border border-gray-50 rounded-lg"
      />
      <h1 className="text-sm">Name: {shoes.name}</h1>
      <p className="text-green-400">Giá: {shoes.price}</p>
      <p className="text-sm text-gray-300 italic">
        <b className="text-black">Desc:</b> {shoes.shortDescription}
      </p>

      <button onClick={() =>{handleProDetail(shoes)}}
        className="px-4 py-2 rounded-lg text-white bg-blue-700 cursor-pointer"
      >
        Detail
      </button>
    </div>
  );
};

export default ProductItems;
