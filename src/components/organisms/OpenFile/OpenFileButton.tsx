import React, { useContext } from 'react';
import styled from 'styled-components';
import { getMdFileFromDialog } from '../../../lib/electron';
import { FileContext } from '../../../lib/contexts';
import { gray } from '../../../lib/colors';

const PrimaryButton = styled.button`
    cursor: pointer;
    background-color: ${gray[2]};
    color: #fff;
    border: none;
    border-radius: 5px;
    padding: 20px;
    font-weight: bold;
    outline: none;
    &:hover {
      background-color: ${gray[3]};
    }
`;

const OpenFileButton: React.FC = () => {
    const { setFilepath } = useContext(FileContext);

    async function handleClick() {
        const filenames = await getMdFileFromDialog();
        if (filenames != null) {
            setFilepath(filenames[0]);
        }
    }

    return (
        <PrimaryButton onClick={handleClick}>
            Choose Markdown File
        </PrimaryButton>
    );
};

export default OpenFileButton;
