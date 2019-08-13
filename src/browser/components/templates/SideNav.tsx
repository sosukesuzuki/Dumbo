import React, { useContext } from "react";
import styled from "styled-components";
import { FileContext, ThemeContext } from "../../lib/contexts";

const Container = styled.div<{ primary: string }>`
  background-color: ${({ primary }) => primary};
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
  const { theme } = useContext(ThemeContext);

  return (
    <Container primary={theme.primary}>
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
