import React from "react";
import ReactDOM from "react-dom";
import Toast from "./toast";
import "./index.scss";

function toast(text) {
  const div = document.createElement("div");
  document.body.appendChild(div);
  ReactDOM.render(<Toast text={text} />, div);
  setTimeout(() => {
    ReactDOM.unmountComponentAtNode(div);
    document.body.removeChild(div);
  }, 2000);
}

export default toast;
