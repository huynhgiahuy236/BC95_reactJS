import React from "react";

const ProductDetail = (props: any) => {
  const { product } = props;
  return (
    <div className="border border-black/10 p-4 my-5 rounded-md">
      <h2>Product Detail</h2>
      <img src={product.image} alt={product.name} className="w-10 h-10"/>
      <h2>{product.name}</h2>

      <p>{product.price}</p>

      <p>{product.shortDescription}</p>

      <p>{product.quantity}</p>
    </div>
  );
};

export default ProductDetail;
