import React from "react";
import "github-markdown-css";
import "highlight.js/styles/github.css";
import markdownProcessor from "../lib/markdownProcessor";
import useFileContent from "../lib/useFileContent";

const Renderer: React.FC = () => {
  const fileContent = useFileContent();

  if (!fileContent) {
    return null;
  }

  return (
    <div
      className="markdown-body"
      dangerouslySetInnerHTML={{
        __html: markdownProcessor.processSync(fileContent).toString()
      }}
    />
  );
};

export default Renderer;
