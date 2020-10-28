import React, { useState, useEffect } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import "./index.scss";
const JzMoney = () => {
  const [copyText, setCopyText] = useState(`https://qjzapi.58.com/api/m/renwu/list`);
  const copyClick = () => {
    //setLog(iospopCopyClick);
    //Toast("复制成功,去浏览器赚钱吧");
    console.log("复制成功,去浏览器赚钱吧");
  };
  return (
    <div className="m-main">
      <div className="m-head">
        <div className="m-icon"> </div> <p className="m-title"> 赚钱小贴士 </p>
        <p className="m-tip"> iOS暂不支持领取任务， 您可以选择以下赚钱方式 </p>
      </div>
      <div className="m-box">
        <p className="m-box-title"> 在浏览器里， 做任务 </p>
        <p className="m-box-des">
          在手机浏览器里可以做任务， 赚取现金。 复制链接， 去浏览器赚钱吧。
        </p>
        <CopyToClipboard
          text={copyText}
          onCopy={() => {
            copyText === "" ? console.log("链接复制失败<br/>请重新再试") : copyClick();
          }}
        >
          <div className="m-box-btn"> 复制链接 </div>
        </CopyToClipboard>
      </div>
    </div>
  );
};
export default JzMoney;
