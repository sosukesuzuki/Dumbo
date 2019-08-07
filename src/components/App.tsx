import React, { useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import FileContext from "../lib/contexts/FileContext";
import ThemeContext from "../lib/contexts/ThemeContext";
import Main from "./templates/Main";
import SideNav from "./templates/SideNav";
import { Colors } from "src/lib/themes";

const Container = styled.div`
  display: grid;
  grid-template-rows: 100vh;
  grid-template-columns: 100px 1fr;
`;

type Props = {
  theme: Colors;
};

const App: React.FC<Props> = ({ theme }) => {
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
    <ThemeContext.Provider value={{ theme }}>
      <FileContext.Provider value={{ filepath, setFilepath, resetFilepath }}>
        <Container>
          <SideNav />
          <Main />
        </Container>
      </FileContext.Provider>
    </ThemeContext.Provider>
  );
};

export default App;
