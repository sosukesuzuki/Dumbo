import React from "react";
import ReactDOM from "react-dom";
import App from "./browser/components/App";
import ConfigManager from "./browser/lib/ConfigManager";
import "normalize.css";

const configManager = new ConfigManager();
const { theme } = configManager;

ReactDOM.render(<App theme={theme} />, document.querySelector(".root"));
