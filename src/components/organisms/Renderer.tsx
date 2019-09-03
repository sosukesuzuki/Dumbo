import React from 'react';
import styled from 'styled-components';
import LoadingElephant from '../atoms/LoadingElephant';
import 'github-markdown-css';
import 'highlight.js/styles/github.css';
import { markdown } from '../../lib/processor';
import { useFileContent, useIsFileLoading } from '../../lib/hooks';

const Container = styled.div`
    padding: 20px;
    color: black;
    a {
        color: blue;
    }
`;

const Renderer: React.FC = () => {
    const fileContent = useFileContent();
    const isFileLoading = useIsFileLoading();

    if (isFileLoading) {
        return <LoadingElephant />;
    }

    return (
        <Container
            className="markdown-body"
            dangerouslySetInnerHTML={{
                __html: markdown.processSync(fileContent!).toString(),
            }}
        />
    );
};

export default Renderer;
