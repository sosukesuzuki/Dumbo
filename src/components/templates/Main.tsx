import React, { useContext } from 'react';
import styled from 'styled-components';
import Renderer from '../organisms/Renderer';
import OpenFileBox from '../organisms/OpenFile/OpenFileBox';
import { FileContext } from '../../lib/contexts';
import { gray } from '../../lib/colors';

const Container = styled.div`
    overflow-y: scroll;
    background-color: ${gray[0]};
`;

const Main: React.FC = () => {
    const { filepath } = useContext(FileContext);
    return <Container>{!filepath ? <OpenFileBox /> : <Renderer />}</Container>;
};

export default Main;
