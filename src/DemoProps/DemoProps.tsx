import React from "react";

// props: 1 object chứa dữ liệu được truyền từ component cha xuống con

// giá trị của thuộc tính có thể: string, number, bigInt(2^32),  boolean, array, object, function, component
const DemoProps = (props: any) => {
  // destrunturing props object
  const { text, color, font, demoFnc } = props;
  return (
    <div>
      <h1 className={`text text-2xl ${color} ${font}`}>{text}</h1>
    </div>
  );
};

export default DemoProps;
