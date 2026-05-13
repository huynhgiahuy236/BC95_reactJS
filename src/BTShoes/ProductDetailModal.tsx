import React from "react";

const ProductDetailModal = (props: any) => {
  const { product, onClose } = props;

  if (!product) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="relative w-full max-w-2xl rounded-lg bg-white shadow-lg">
        <div className="flex items-center justify-between border-b border-gray-200 p-4">
          <h3 className="text-xl font-semibold text-gray-900">
            {product.name}
          </h3>
          <button
            type="button"
            onClick={onClose}
            className="inline-flex h-8 w-8 items-center justify-center rounded-lg text-gray-400 hover:bg-gray-200 hover:text-gray-900"
          >
            x
          </button>
        </div>

        <div className="grid gap-5 p-5 md:grid-cols-2">
          <img
            src={product.image}
            alt={product.name}
            className="w-full rounded-lg border border-gray-200"
          />
          <div className="space-y-3">
            <p className="text-lg font-semibold text-green-600">
              Price: ${product.price}
            </p>
            <p className="text-sm text-gray-700">{product.description}</p>
            <p className="text-sm text-gray-500">
              Quantity: {product.quantity}
            </p>
          </div>
        </div>

        <div className="flex justify-end border-t border-gray-200 p-4">
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailModal;
