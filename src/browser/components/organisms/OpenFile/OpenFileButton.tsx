import React, { useContext } from "react";
import styled from "styled-components";
import getMdFileFromDialog from "../../../../lib/electron/getMdFileFromDialog";
import FileContext from "../../../lib/contexts/FileContext";
import ThemeContext from "../../../lib/contexts/ThemeContext";

const PrimaryButton = styled.button<{ primary: string }>`
  cursor: pointer;
  background-color: ${({ primary }) => primary};
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px;
  font-weight: bold;
  outline: none;
`;

const OpenFileButton: React.FC = () => {
  const { setFilepath } = useContext(FileContext);
  const { theme } = useContext(ThemeContext);

  async function handleClick() {
    const filenames = await getMdFileFromDialog();
    if (filenames != null) {
      setFilepath(filenames[0]);
    }
  }

  return (
    <PrimaryButton onClick={handleClick} {...theme}>
      Choose Markdown File
    </PrimaryButton>
  );
};

export default OpenFileButton;
