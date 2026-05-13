import React, { useState } from "react";
import ProductList from "./ProductList";
import dataShoes from "./data.json";
import ProductDetailModal from "./ProductDetailModal";

const BTShoes = () => {
  const [selectedShoe, setSelectedShoe] = useState<any>(null);

  return (
    <div>
      <h1 className="text-2xl text-center text-blue-700 font-light">
        BT Shoes
      </h1>
      <ProductList data={dataShoes} onViewDetail={setSelectedShoe} />
      <ProductDetailModal
        product={selectedShoe}
        onClose={() => setSelectedShoe(null)}
      />
    </div>
  );
};

export default BTShoes;
