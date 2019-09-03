import React, { useContext } from 'react';
import styled from 'styled-components';
import { gray } from "../../lib/colors";
import { FileContext } from '../../lib/contexts';

const Container = styled.div`
    background-color: ${gray[2]};
    display: flex;
    flex-flow: column;
    align-items: center;
`;
const EmojiButton = styled.button`
    border: none;
    background-color: transparent;
    cursor: pointer;
    outline: none;
    font-size: 50px;
    margin: 10px;
    border-radius: 50%;
    width: 60px;
    height: 60px;
    &:hover {
        background-color: ${gray[3]};
    }
`;

const SideNav: React.FC = () => {
    const { resetFilepath } = useContext(FileContext);

    return (
        <Container>
            <EmojiButton
                onClick={() => {
                    resetFilepath();
                }}
            >
                🐘
            </EmojiButton>
        </Container>
    );
};

export default SideNav;
