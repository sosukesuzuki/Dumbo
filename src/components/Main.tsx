import React from "react";
import Renderer from "./Renderer";
import OpenFileBox from "./OpenFile/OpenFileBox";

const Main: React.FC = () => {
  return (
    <div>
      <OpenFileBox />
      <Renderer />
    </div>
  );
};

export default Main;
