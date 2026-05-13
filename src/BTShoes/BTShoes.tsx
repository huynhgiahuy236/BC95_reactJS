import React, { useState } from "react";
import ProductList from "./ProductList";
import dataShoes from "./data.json";
import ProductDetail from "./ProductDetail";
const BTShoes = () => {
  const [proDetail, setProDetail] = useState(
    {
    id: 1,
    name: "Adidas Prophere",
    alias: "adidas-prophere",
    price: 350,
    description:
      "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
    shortDescription:
      "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
    quantity: 995,
    image: "https://shop.cyberlearn.vn/images/adidas-prophere.png",
  }
);
const handleProDetail = (newProduct:any) => {
  setProDetail(newProduct)
}
  return (
    <div>
      <h1 className="text-2xl text-center text-blue-700 font-light">
        BT Shoes
      </h1>
      <ProductDetail product ={proDetail}/>
      <ProductList data={dataShoes} handleProDetail={handleProDetail}/>
    </div>
  );
};

export default BTShoes;
