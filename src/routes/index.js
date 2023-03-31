import React from "react";
import ReactDOM from "react-dom/client";
import {
  Route,
  Routes,
  Link,
} from "react-router-dom";

import Home from "../views/Home";

export default function RoutesApp() {

  return (
    <Routes>
      <Route path="/"  element={<Home/>} />
    </Routes>
  )
}