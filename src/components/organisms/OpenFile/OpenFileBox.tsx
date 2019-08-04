import React from "react";
import styled from "styled-components";
import OpenFileButton from "./OpenFileButton";
import OpenFileDnDArea from "./OpenFileDnDArea";
import { BORDER, BACKGROUND } from "../../../lib/colors";

const Container = styled.div`
  background-color: ${BACKGROUND};
  border: 2px solid ${BORDER};
  border-radius: 3px;
  padding: 20px;
  margin: 10px;
  text-align: center;
`;

const OpenFileBox = () => {
  return (
    <Container>
      <OpenFileDnDArea />
      <OpenFileButton />
    </Container>
  );
};

export default OpenFileBox;
