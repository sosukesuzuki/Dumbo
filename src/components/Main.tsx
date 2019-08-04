import React from "react";
import Renderer from "./Renderer";
import OpenFileButton from "./OpenFileButton";

const Main: React.FC = () => {
  return (
    <>
      <OpenFileButton />
      <Renderer />
    </>
  );
};

export default Main;
