import React from "react";
import { HashRouter, Route } from "react-router-dom";
import JzMoney from "../compontes/pages/Jzpage/index.js";
import reactContext from "../compontes/Hooks/context/index";

const BasicRoute = () => (
  <HashRouter>
    <Route exact path="/" component={JzMoney} />
    <Route exact path="/context" component={reactContext} />
  </HashRouter>
);

export default BasicRoute;
