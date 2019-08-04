import React, { useContext } from "react";
import FileContext from "../lib/FileContext";

document.ondragover = document.ondrop = function (e) {
  e.preventDefault()
}

const OpenFileDnDArea: React.FC = () => {
  const { setFilepath } = useContext(FileContext)
  function handleDrop(e: React.DragEvent<HTMLDivElement>) {
    setFilepath(e.dataTransfer.files[0].path);
  }
  return (
    <div style={{
      border: "1px solid black",
      width: "300px",
      height: "300px"
    }}
    onDrop={handleDrop}>
      <p>{"Please drag & drop your markdown file"}</p>
    </div>
  )
};

export default OpenFileDnDArea;
