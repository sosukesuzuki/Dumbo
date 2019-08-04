import React, { useState, useEffect } from "react";
import styled from "styled-components";
import "normalize.css";
import ReactDOM from "react-dom";
import FileContext from "./lib/FileContext";
import Main from "./components/Main";
import SideNav from "./components/SideNav";

const Container = styled.div`
  display: grid;
  grid-template-rows: 100vh;
  grid-template-columns: 100px 1fr;
`;

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
      <Container>
        <SideNav />
        <Main />
      </Container>
    </FileContext.Provider>
  );
};

ReactDOM.render(<App />, document.querySelector(".root"));
