import styled from "styled-components";

export const Container = styled.section`
  background-color: ${({ background }) => textToColor[background]};
  display: flex;
  flex-direction: ${({ direction }) => direction};
  justify-content: center;
  align-items: center;
  height: 800px;
  position: relative;
  z-index: 1;

  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`;

const textToColor = {
  black: "#010606",
  white: "#fff",
  transparent: "#0c0c0c",
};
