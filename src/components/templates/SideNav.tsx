import React, { useContext } from "react";
import styled from "styled-components";
import { PRIMARY } from "../../lib/colors";
import FileContext from "../../lib/contexts/FileContext";

const Container = styled.div`
  background-color: ${PRIMARY};
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
    background-color: rgba(1, 1, 1, 0.1);
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
