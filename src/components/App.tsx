import React, { useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import FileContext from "../lib/contexts/FileContext";
import ConfigContext from "../lib/contexts/ConfigContext";
import Main from "./templates/Main";
import SideNav from "./templates/SideNav";
import { Configuration } from "src/lib/ConfigManager";

const Container = styled.div`
  display: grid;
  grid-template-rows: 100vh;
  grid-template-columns: 100px 1fr;
`;

type Props = {
  config: Configuration;
};

const App: React.FC<Props> = ({ config }) => {
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
    <ConfigContext.Provider value={{ config }}>
      <FileContext.Provider value={{ filepath, setFilepath, resetFilepath }}>
        <Container>
          <SideNav />
          <Main />
        </Container>
      </FileContext.Provider>
    </ConfigContext.Provider>
  );
};

export default App;
