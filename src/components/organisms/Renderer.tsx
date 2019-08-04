import React from "react";
import styled from "styled-components";
import "github-markdown-css";
import "highlight.js/styles/github.css";
import markdownProcessor from "../../lib/markdownProcessor";
import useFileContent from "../../lib/hooks/useFileContent";

const Container = styled.div`
  padding: 20px;
`;

const Renderer: React.FC = () => {
  const fileContent = useFileContent();

  return (
    <Container
      className="markdown-body"
      dangerouslySetInnerHTML={{
        __html: markdownProcessor.processSync(fileContent!).toString()
      }}
    />
  );
};

export default Renderer;
