import React, { useContext } from "react";
import styled from "styled-components";
import Renderer from "./Renderer";
import OpenFileBox from "./OpenFile/OpenFileBox";
import FileContext from "../lib/FileContext";

const Container = styled.div`
  overflow-y: scroll;
`;

const Main: React.FC = () => {
  const { filepath } = useContext(FileContext);
  return (
    <Container>
      { !filepath ? <OpenFileBox /> : <Renderer /> }
    </Container>
  );
};

export default Main;
