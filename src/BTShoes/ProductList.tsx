import React from "react";
import ProductItems from "./ProductItems";

const ProductList = (props: any) => {
  const { data, onViewDetail } = props;
  return (
    <div className="grid max-w-10/12 mx-auto grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
      {data.map((item: any) => (
        <ProductItems shoes={item} key={item.id} onViewDetail={onViewDetail} />
      ))}
    </div>
  );
};

export default ProductList;
