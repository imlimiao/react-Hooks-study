import React, { useState, useEffect } from "react";

import TypeNum from "./typeNum";



const TsIndex: React.FC<any> = (props: any) => {
  const BookNum = {
    pageNum: 10,
    pageName: "测试Ts",
    pageSize: 20,
    pageData: [1, 2, 3, 4, 5],
  };



  return (
    <div>
      <TypeNum BookNum={BookNum}></TypeNum>

    </div>
  );
};

export default TsIndex;
