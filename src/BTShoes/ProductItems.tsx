import React from "react";

const ProductItems = (props: any) => {
  const { shoes, onViewDetail } = props;
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
      <button
        type="button"
        onClick={() => onViewDetail(shoes)}
        className="rounded-lg bg-blue-700 px-4 py-2 text-sm font-medium text-white hover:bg-blue-800"
      >
        Detail
      </button>
    </div>
  );
};

export default ProductItems;
