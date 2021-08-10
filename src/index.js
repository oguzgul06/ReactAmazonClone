import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { StateProvider } from "./components/StateProvider";
import Reducer, { initialState } from "./Reducer";

ReactDOM.render(
  <React.StrictMode>
    <StateProvider initalState={initialState} reducer={Reducer}>
      <App />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
