import React from "react";
import styled from "styled-components";
import OpenFileButton from "./OpenFileButton";
import OpenFileDnDArea from "./OpenFileDnDArea";
import { BORDER, BACKGROUND, GRAY } from "../../lib/colors";

const Container = styled.div`
  background-color: ${BACKGROUND};
  border: 2px solid ${BORDER};
  border-radius: 3px;
  padding: 20px;
  margin: 10px;
  text-align: center;
`;
const Heading = styled.p`
  margin: 0;
  font-weight: bold;
  font-size: 20px;
  color: ${GRAY};
`;

const OpenFileBox = () => {
  return (
    <Container>
      <Heading>Choose Your Markdown File</Heading>
      <OpenFileDnDArea />
      <OpenFileButton />
    </Container>
  );
};

export default OpenFileBox;
