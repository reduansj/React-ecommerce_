import styled from "styled-components";
export const ProductCardContainer = styled.div`
  background-color: #f6f6f6;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  max-height: 500px;
  max-width: 500px;
  box-shadow: 0 1px 3px rgb(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;
export const ProductCardImg = styled.img`
  padding: 1rem 2rem;
  overflow: hidden;
  margin-bottom: 10px;
`;

export const ProductCardTitle = styled.h3`
  font-size: 2rem;
  color: #010606;
  text-align: center;
  margin: 0vw 1vw 0vw 1vw;
  width: fit-content;
`;

export const ProductCardPrice = styled.p`
  font-size: 1.5rem;
  text-align: center;
  color: #010606;
  margin-bottom: 5px;
`;
