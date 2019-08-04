import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import FileContext from "./lib/FileContext";
import Main from "./components/Main";

const App: React.FC = () => {
  const [filepath, setFilepath] = useState<string | null>(null);

  useEffect(() => {
    if (filepath == null) {
      document.title = "Dumbo";
    } else {
      document.title = filepath;
    }
  }, [filepath]);

  return (
    <FileContext.Provider value={{ filepath, setFilepath }}>
      <Main />
    </FileContext.Provider>
  );
};

ReactDOM.render(<App />, document.querySelector(".root"));
