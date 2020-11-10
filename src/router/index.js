import React from "react";
import { HashRouter, Route } from "react-router-dom";
import RouteLoad from "./routeload.js";

const JzMoney = RouteLoad(() =>
  import(/* webpackChunkName: "JzMoney" */ "@/compontes/pages/Jzpage/index.js")
);

const reactContext = RouteLoad(() =>
  import(
    /* webpackChunkName: "reactContext" */
    "@/compontes/Hooks/context/index"
  )
);

const tsDemo = RouteLoad(() =>
  import(/* webpackChunkName: "tsDemo" */ "@/compontes/reactTs/index")
);

const useCallback = RouteLoad(() =>
  import(
    /* webpackChunkName: "useCallback" */ "@/compontes/reactTs/useCallback/App"
  )
);

const useMemo = RouteLoad(() =>
  import(/* webpackChunkName: "useMemo" */ "@/compontes/reactTs/useMemo/app")
);

const useRef = RouteLoad(() =>
  import(/* webpackChunkName: "useRef" */ "@/compontes/reactTs/useRef/App")
);

const useReducer = RouteLoad(() =>
  import(
    /* webpackChunkName: "useReducer" */ "@/compontes/reactTs/useReducer/App"
  )
);

const useComplex = RouteLoad(() =>
  import(
    /* webpackChunkName: "useComplex" */ "@/compontes/reactTs/useReducer/complex"
  )
);

const minx = RouteLoad(() =>
  import(
    /* webpackChunkName: "minxContxt" */ "@/compontes/reactTs/minxContxt/App"
  )
);

const BasicRoute = () => (
  <HashRouter>
    <Route exact path="/" component={JzMoney} />
    <Route exact path="/context" component={reactContext} />
    <Route exact path="/tsDemo/:slug" component={tsDemo} />
    <Route exact path="/useCallback" component={useCallback} />
    <Route exact path="/useMemo" component={useMemo} />
    <Route exact path="/useRef" component={useRef} />
    <Route exact path="/useReducer" component={useReducer} />
    <Route exact path="/useComplex" component={useComplex} />
    <Route exact path="/minx" component={minx} />
  </HashRouter>
);

export default BasicRoute;
