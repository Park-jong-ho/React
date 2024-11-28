import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App, { store } from "./App";
import { Provider } from "react-redux"

ReactDOM.createRoot(document.getElementById("root")).render(
<Provider store={store}>
  <App />
</Provider>);
