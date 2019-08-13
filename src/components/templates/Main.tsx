import React, { useContext } from "react";
import styled from "styled-components";
import Renderer from "../organisms/Renderer";
import OpenFileBox from "../organisms/OpenFile/OpenFileBox";
import { FileContext, ThemeContext } from "../../lib/contexts";

const Container = styled.div<{ background: string }>`
  overflow-y: scroll;
  background-color: ${({ background }) => background};
`;

const Main: React.FC = () => {
  const { filepath } = useContext(FileContext);
  const { theme } = useContext(ThemeContext);
  return (
    <Container {...theme}>
      {!filepath ? <OpenFileBox /> : <Renderer />}
    </Container>
  );
};

export default Main;
