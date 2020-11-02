import React from "react";
const ToastBox = (props) => {
  const { text } = props;
  return <div className="toast" dangerouslySetInnerHTML={{ __html: text }}></div>;
};

export default ToastBox;
