import React from "react";
import { HashRouter, Route } from "react-router-dom";
import RouteLoad from "./routeload.js";

const JzMoney = RouteLoad(() =>
  import(/* webpackChunkName: "JzMoney" */ "@/compontes/pages/Jzpage/index.js")
);

const reactContext = RouteLoad(() =>
  import(
    /* webpackChunkName: "reactContext" */ "@/compontes/Hooks/context/index"
  )
);

const tsDemo = RouteLoad(() =>
  import(/* webpackChunkName: "tsDemo" */ "@/compontes/reactTs/index")
);

const BasicRoute = () => (
  <HashRouter>
    <Route exact path="/" component={JzMoney} />
    <Route exact path="/context" component={reactContext} />
    <Route exact path="/tsDemo/:slug" component={tsDemo} />
  </HashRouter>
);

export default BasicRoute;
