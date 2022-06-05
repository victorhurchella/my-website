import React from "react";
import { HashRouter, Route, Routes as ReactRoutes } from "react-router-dom";
import Home from "../pages/Home";

function Routes() {
  return (
    <HashRouter>
      <ReactRoutes>
        <Route path="/" element={<Home />} />
      </ReactRoutes>
    </HashRouter>
  );
}

export default Routes;
