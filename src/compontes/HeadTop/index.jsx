import React, { useState } from "react";
import "./index.scss";
import Game from "./Game";
function InitTime() {
  return <li>{new Date().toLocaleTimeString()}</li>;
}

export default class headTop extends React.Component {
  constructor() {
    super();
    //策略配置
    this.state = {
      time: new Date().toLocaleTimeString(),
    };
  }

  initData = (params) => {
    const item = [1, 2, 3, 4];
    console.log(item.join(","), params);
  };

  initTimeCom = () => {
    console.log("initTimeCom==render");
    return <li>{new Date().toLocaleTimeString()}</li>;
  };

  render() {
    return (
      <div className="shopping-list" onClick={this.initData.bind(this, "你好")}>
        <h1>Shopping List for {this.props.name}</h1>
        <h2>It is {this.initTimeCom()} </h2>
        {/* {Example()} */}
        {/** <Game>画画的baby---</Game>*/}
        <ul>
          <li>Instagram</li>
          <li>WhatsApp</li>
          <li>Oculus</li>
        </ul>
      </div>
    );
  }
}
