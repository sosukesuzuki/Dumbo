import React from "react";
import OpenFileButton from "./OpenFileButton";
import useFileContent from "../lib/useFileContent";

const Main: React.FC = () => {
  const fileContent = useFileContent();
  return (
    <>
      <OpenFileButton />
      <p>{fileContent}</p>
    </>
  );
};

export default Main;
