import React from "react";
import Renderer from "./Renderer";
import OpenFileButton from "./OpenFileButton";
import OpenFileDnDArea from "./OpenFileDnDArea"

const Main: React.FC = () => {
  return (
    <>
      <OpenFileButton />
      <OpenFileDnDArea />
      <Renderer />
    </>
  );
};

export default Main;
