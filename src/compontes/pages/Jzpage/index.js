import React, { useState, useEffect } from "react";
import { useParams, useLocation, useHistory } from "react-router-dom";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { setLog } from "../../../utils/utils";
import Toast from "../../toast/index";
import "./index.scss";

/**  短链接生成器
http://tool.chinaz.com/tools/dwz.aspx
*/
let debounceTime = null;
let last = null;
let timer = null;
let threshold = 2000;

const JzMoney = () => {
  const [copyText, setCopyText] = useState(
    `https://qjzapi.58.com/api/m/renwu/list`
  );
  const copyClick = (text, result) => {
    clearTimeout(debounceTime);
    debounceTime = setTimeout(() => {
      let now = +new Date();
      if (last && now < last + threshold) {
        clearTimeout(timer);
        timer = setTimeout(() => {
          last = now;
        }, 1000);
      } else {
        last = now;
        copyState(text, result);
      }
    }, 0);
  };


  const copyState = (text, result) => {
    console.log(text, result, "==="); //做防抖操作
    setLog("iosolinemoney", "jztask_iosonmoney_copylinkclick");
    if (result) {
      Toast("复制成功,去浏览器赚钱吧");
    } else {
      Toast("链接复制失败<br/>请重新再试");
    }
  };

  useEffect(() => {
    setLog("iosolinemoney", "jztask_iosonmoneyshow");
    setLog("iosolinemoney", "jztask_iosonmoney_copylinkshow");
  });

  return (
    <div className="m-main">
      <div className="m-head">
        <div className="m-icon"> </div> <p className="m-title"> 赚钱小贴士 </p>
        <p className="m-tip">iOS暂不支持领取任务， 您可以选择以下赚钱方式</p>
      </div>
      <div className="m-bxBg">
        <div className="m-box">
          <p className="m-box-title"> 在浏览器里， 做任务 </p>
          <p className="m-box-des">
            点击右侧按钮复制链接 <i> (https: //s.yam.com/APbVC)</i>
            去浏览器里做任务吧
          </p>
          <CopyToClipboard
            text={copyText}
            onCopy={(text, result) => copyClick(text, result)}
          >
            <div className="m-box-btn"> 复制链接 </div>
          </CopyToClipboard>
        </div>
      </div>
    </div>
  );
};
export default JzMoney;
