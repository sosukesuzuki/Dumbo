import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: block;
  animation: spin 1.5s linear infinite;;
  @keyframes spin {
    0% {transform: rotate(0deg);}
    100% {transform: rotate(360deg);}
  }
  font-size: 200px;
  width: 200px;
  margin: auto;
`;

const LoadingElephant: React.FC = () => {
  return (
    <Container>🐘</Container>
  )
}

export default LoadingElephant;
