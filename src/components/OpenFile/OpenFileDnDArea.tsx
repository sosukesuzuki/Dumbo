import React, { useContext } from "react";
import styled from "styled-components";
import FileContext from "../../lib/FileContext";
import { PRIMARY } from "../../lib/colors";

const Container = styled.div`
  width: 500px;
  height: 250px;
  border: 2px dashed ${PRIMARY};
  border-radius: 5px;
  margin: 20px auto;
  p {
    color: ${PRIMARY};
    font-weight: bold;
  }
  span {
    display: block;
    font-size: 120px;
    margin-top: 40px;
  }
`;

document.ondragover = document.ondrop = function(e) {
  e.preventDefault();
};

const OpenFileDnDArea: React.FC = () => {
  const { setFilepath } = useContext(FileContext);
  function handleDrop(e: React.DragEvent<HTMLDivElement>) {
    setFilepath(e.dataTransfer.files[0].path);
  }
  return (
    <Container onDrop={handleDrop}>
      <p>{"Drag & Drop markdown file"}</p>
      <span>📑</span>
    </Container>
  );
};

export default OpenFileDnDArea;
