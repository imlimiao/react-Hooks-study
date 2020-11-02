import React, { useState, useContext } from "react";
import myContext from "./context";
// ⼦子组件
const Com = () => {
  const { count, setCount, userName } = useContext(myContext);
  return (
    <div>
      {userName}
      ⼦子组件： {count} <br />
      <button onClick={() => setCount(count + 1)}> count + 1 </button>
    </div>
  );
};

export default Com;
