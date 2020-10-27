import React from "react";
import { HashRouter, Route } from "react-router-dom";
import App from "../App";
import Layout from "../compontes/pages/index";

const BasicRoute = () => (
  <HashRouter>
    <Route exact path="/" component={App} />
    <Route exact path="/Layout" component={Layout} />
  </HashRouter>
);

export default BasicRoute;
