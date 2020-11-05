import React, { useState, useEffect, FunctionComponent } from "react";
import { useParams, useLocation, useHistory } from "react-router-dom";

const TypeNum: FunctionComponent<any> = (props: any) => {
  const location = useLocation();
  const history = useHistory();
  let params = useParams();

  useEffect(() => {
    console.log(location, "location");
  });

  interface BookNum {
    pageName: string;
    pageNum?: Number;
    pageSize?: Number;
    pageData: Array<Number>;
  }

  const jumpUrl = (str: string) => {
    const slug: any = params;
    console.log(str, props, slug.slug);
    //history.push("/");
    // getLocation(str);
  };

  const getPage = (BookNumObj: BookNum, props: any) => {
    let propsParent = props;
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

  return <div>{getPage(props.BookNum, props)}</div>;
};

export default TypeNum;
