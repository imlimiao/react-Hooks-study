import React, { useState, useEffect, ReactElement } from "react";
import { useParams, useLocation, useHistory } from "react-router-dom";

function Temp(): ReactElement {
  const history = useHistory();
  let slug = useParams();
  let location = useLocation();
  return (
    <div>
      <button
        onClick={() => {
          //GotoIndex();
          console.log(history, slug, location);
        }}
      >
        我在干什么
      </button>
    </div>
  );
}

const TypeNum: React.FC<any> = (props: any) => {
  interface BookNum {
    pageName: string;
    pageNum?: Number;
    pageSize?: Number;
    pageData: Array<Number>;
  }

  const getPage = (BookNumObj: BookNum) => {
    const jumpUrl = (str: string) => {
      console.log(str);
    };

    return (
      <div>
        <ul className="pageTab">
          <li>我的名字是{BookNumObj.pageName}</li>
          <li> 我一共有{BookNumObj.pageNum}页</li>
          <li> 我一页数据有{BookNumObj.pageSize}条</li>
          {BookNumObj.pageData.map((item: Number, index: number) => {
            return <li key={index}>{item}</li>;
          })}
        </ul>
        <button
          onClick={() => {
            jumpUrl("你信不信我错了很大");
          }}
        >
          跳转路由
        </button>
      </div>
    );
  };

  return (
    <div>
      {getPage(props.BookNum)}
      <Temp></Temp>
    </div>
  );
};

export default TypeNum;
