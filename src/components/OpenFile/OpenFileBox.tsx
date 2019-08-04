import React from "react";
import OpenFileButton from "./OpenFileButton";
import OpenFileDnDArea from "./OpenFileDnDArea";

const OpenFileBox = () => {
  return (
    <div style={{
      border: "1px solid black"
    }}>
      <p>Choose File</p>
      <OpenFileDnDArea />
      <OpenFileButton />
    </div>
  );
}

export default OpenFileBox;
