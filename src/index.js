import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
// Soft UI Context Provider
import 'antd/dist/antd.css'

import { MaterialUIControllerProvider } from "./context";
import './App.css'
ReactDOM.render(
  <BrowserRouter>
    <MaterialUIControllerProvider>
    <App />
    </MaterialUIControllerProvider>     
  </BrowserRouter>,
  document.getElementById("root")
);
