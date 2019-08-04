import React, { useContext } from "react";
import getMdFileFromDialog from "../../lib/getMdFileFromDialog";
import FileContext from "../../lib/FileContext";

const OpenFileButton: React.FC = () => {
  const { setFilepath } = useContext(FileContext);

  async function handleClick() {
    const filenames = await getMdFileFromDialog();
    if (filenames != null) {
      setFilepath(filenames[0]);
    }
  }

  return <button onClick={handleClick}>Choose Markdown File</button>;
};

export default OpenFileButton;
