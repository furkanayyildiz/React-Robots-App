import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import CardList from "./CardList";
import Card from "./Card";
import { robots } from "./robots";
import reportWebVitals from "./reportWebVitals";
import "tachyons";

ReactDOM.render(
  <div>
    <CardList robots={robots} />
  </div>,
  document.getElementById("root")
);

reportWebVitals();
