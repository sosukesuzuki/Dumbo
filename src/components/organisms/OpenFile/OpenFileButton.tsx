import React, { useContext } from "react";
import styled from "styled-components";
import { getMdFileFromDialog } from "../../../lib/electron";
import { FileContext } from "../../../lib/contexts";

const PrimaryButton = styled.button`
  cursor: pointer;
  background-color: blue;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px;
  font-weight: bold;
  outline: none;
`;

const OpenFileButton: React.FC = () => {
  const { setFilepath } = useContext(FileContext);

  async function handleClick() {
    const filenames = await getMdFileFromDialog();
    if (filenames != null) {
      setFilepath(filenames[0]);
    }
  }

  return (
    <PrimaryButton onClick={handleClick}>
      Choose Markdown File
    </PrimaryButton>
  );
};

export default OpenFileButton;
