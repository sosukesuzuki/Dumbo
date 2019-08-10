import React, { useContext } from "react";
import styled from "styled-components";
import LoadingElephant from "../atoms/LoadingElephant";
import "github-markdown-css";
import "highlight.js/styles/github.css";
import markdownProcessor from "../../lib/markdownProcessor";
import useFileContent from "../../lib/hooks/useFileContent";
import useIsFileLoading from "../../lib/hooks/useIsFileLoading";
import ThemeContext from "../../lib/contexts/ThemeContext";

const Container = styled.div<{ body: string; primary: string }>`
  padding: 20px;
  color: ${({ body }) => body};
  a {
    color: ${({ primary }) => primary};
  }
`;

const Renderer: React.FC = () => {
  const fileContent = useFileContent();
  const { theme } = useContext(ThemeContext);
  const isFileLoading = useIsFileLoading();

  if (isFileLoading) {
    return <LoadingElephant />;
  }

  return (
    <Container
      {...theme}
      className="markdown-body"
      dangerouslySetInnerHTML={{
        __html: markdownProcessor.processSync(fileContent!).toString()
      }}
    />
  );
};

export default Renderer;
