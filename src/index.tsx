import React, { useState } from "react";
import ReactDOM from "react-dom";
import FileContext from "./lib/FileContext";
import Main from "./components/Main";

const App: React.FC = () => {
  const [filepath, setFilepath] = useState<string | null>(null);
  return (
    <FileContext.Provider value={{ filepath, setFilepath }}>
      <Main />
    </FileContext.Provider>
  );
};

ReactDOM.render(<App />, document.querySelector(".root"));
