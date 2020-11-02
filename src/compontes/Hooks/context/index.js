import React, { useState, useContext } from "react";
import Com from "./com";
import myContext from "./context";
// ⽗父组件
const ConTxtApp = () => {
  const [count, setCount] = useState(0);
  const userName = "我在测试，你信吗";
  return (
    <myContext.Provider value={{ count, setCount,userName }}>
      ⽗父组件： {count} <br />
      <Com />
    </myContext.Provider>
  );
};
export default ConTxtApp;
