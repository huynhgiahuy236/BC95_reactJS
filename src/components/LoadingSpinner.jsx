import React from "react";

const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center py-20">
      <div className="flex gap-2">
        <div className="w-3 h-12 bg-yellow-400 rounded animate-bounce"></div>
        <div
          className="w-3 h-12 bg-yellow-400 rounded animate-bounce"
          style={{ animationDelay: "0.15s" }}
        ></div>
        <div
          className="w-3 h-12 bg-yellow-400 rounded animate-bounce"
          style={{ animationDelay: "0.3s" }}
        ></div>
        <div
          className="w-3 h-12 bg-yellow-400 rounded animate-bounce"
          style={{ animationDelay: "0.45s" }}
        ></div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
