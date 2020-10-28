import React from "react";
import { HashRouter, Route } from "react-router-dom";
import JzMoney from "../compontes/pages/Jzpage/index.js";

const BasicRoute = () => (
  <HashRouter>
    <Route exact path="/" component={JzMoney} />
  </HashRouter>
);

export default BasicRoute;
