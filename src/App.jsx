import React, { useState } from "react";
import BTCar from "./BTCar/BTCar";
import DemoProps from "./DemoProps/DemoProps";
import BTShoes from "./BTShoes/BTShoes";

function TodoApp() {
  // Hàm này giả lập một tác vụ nặng (tạo 1000 dữ liệu mẫu)
  const createHeavyInitialTodos = () => {
    console.log("--- ĐANG TẠO 1000 TODO (Chỉ chạy 1 lần) ---");
    const initialTodos = [];
    for (let i = 0; i < 1000; i++) {
      initialTodos.push({ id: i, text: `Công việc thứ ${i + 1}` });
    }
    return initialTodos;
  };

  // Sử dụng function trong useState (Lazy Initialization)
  const [todos, setTodos] = useState(() => createHeavyInitialTodos());
  const [text, setText] = useState("");

  return (
    <>
      {/* <div style={{ padding: "20px" }}>
        <h3>Số lượng công việc: {todos.length}</h3>
        <input
          type="text"
          value={text}
          placeholder="Nhập thử gì đó..."
          onChange={(e) => setText(e.target.value)}
        />
        <p>
          Bạn đang gõ: <b>{text}</b>
        </p>

        <hr />
        <p>
          <i>
            Mở <b>Console</b> lên, bạn sẽ thấy dòng "ĐANG TẠO..." chỉ xuất hiện
            1 lần duy nhất lúc load trang. Dù bạn gõ phím liên tục (khiến
            component re-render), hàm tạo 1000 todo cũng không bị chạy lại.
          </i>
        </p>

        <div
          style={{
            height: "200px",
            overflow: "auto",
            border: "1px solid #ccc",
          }}
        >
          {todos.slice(0, 10).map((todo) => (
            <div key={todo.id}>{todo.text}</div>
          ))}
          <p>...</p>
        </div>
      </div>

      <BTCar />

      <DemoProps
        text="huy"
        color="text-red-200"
        font="font-bold"
        number={10}
        // value co the la number, string, funtion...
        propertyName={"value"}
      />

      <DemoProps text="kien" color="text-blue-400" font="font-medium" />

      <DemoProps
        demoFnc={() => {
          const text = document.querySelector(".text");
          text.classNameList.remove("text-2xl");
          text.classNameList.add("text-sm");
        }}
      /> */}
      <BTShoes />
    </>
  );
}

export default TodoApp;
