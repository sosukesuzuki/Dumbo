import React from 'react';
import styled from 'styled-components';
import OpenFileButton from './OpenFileButton';
import OpenFileDnDArea from './OpenFileDnDArea';

const Container = styled.div`
    margin: 10px;
    text-align: center;
`;

const OpenFileBox = () => {
    return (
        <Container>
            <OpenFileDnDArea />
            <OpenFileButton />
        </Container>
    );
};

export default OpenFileBox;
