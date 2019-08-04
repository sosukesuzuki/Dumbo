import React, { useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import FileContext from "../lib/FileContext";
import Main from "./templates/Main";
import SideNav from "./templates/SideNav";

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

  const resetFilepath = useCallback(() => {
    setFilepath(null);
  }, [setFilepath]);

  return (
    <FileContext.Provider value={{ filepath, setFilepath, resetFilepath }}>
      <Container>
        <SideNav />
        <Main />
      </Container>
    </FileContext.Provider>
  );
};

export default App;