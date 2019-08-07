import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import ConfigManager from "./lib/ConfigManager";
import "normalize.css";

const configManager = new ConfigManager();
const { config } = configManager;

ReactDOM.render(<App config={config} />, document.querySelector(".root"));
