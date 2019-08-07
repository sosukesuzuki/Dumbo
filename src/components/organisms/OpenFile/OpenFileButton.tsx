import React, { useContext } from "react";
import styled from "styled-components";
import getMdFileFromDialog from "../../../lib/electron/getMdFileFromDialog";
import FileContext from "../../../lib/contexts/FileContext";
import { PRIMARY, STRONG } from "../../../lib/colors";

const PrimaryButton = styled.button`
  cursor: pointer;
  background-color: ${PRIMARY};
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px;
  font-weight: bold;
  outline: none;
  &:hover {
    background-color: ${STRONG};
  }
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
    <PrimaryButton onClick={handleClick}>Choose Markdown File</PrimaryButton>
  );
};

export default OpenFileButton;
