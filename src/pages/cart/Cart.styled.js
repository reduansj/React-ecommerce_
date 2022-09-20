import styled from "styled-components";

export const CartMain = styled.main`
  min-height: 692px;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  z-index: 0;
  overflow: hidden;
  display: flex;
  justify-content: center;
  background: #da22ff;
  background: -webkit-linear-gradient(to bottom, #da22ff, #9733ee);
  background: linear-gradient(to bottom, #da22ff, #9733ee);
`;

export const Container = styled.div`
  background: #010101;
  max-width: 750px;
  height: auto;
  width: 100%;
  z-index: 1;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  padding: 32px;
  margin-top: 80px;
  margin-bottom: 40px;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);
  @media screen and (max-width: 400px) {
    padding: 32px 32px;
  }
`;

export const CartH1 = styled.h1`
  text-align: center;
  color: #fff;
  margin-bottom: 1rem;
`;
export const ProductPreviewContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #f6f6f6;
  font-size: 20px;
  font-weight: bold;
  max-width: 500px;
  max-height: 100px;
  margin-bottom: 1rem;
  border-radius: 4px;
  overflow: hidden;
  padding: 2rem;
  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
  }
`;

export const ProductPreviewImg = styled.img`
  height: 120px;
  width: 150px;
  padding: 1rem 2rem;
  overflow: hidden;
`;

export const CartButton = styled.button`
  background-color: ${({ background }) => textToColor[background]};
  width: ${({ width }) => width};
  padding: 5px;
  margin: 2px;
  border: none;
  border-radius: 4px;
  color: #fff;
  font-size: 12px;
  cursor: pointer;
`;

export const SummaryElement = styled.div`
  color: white;
  width: 300px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const Text = styled.span`
  display: flex;
  flex-direction: column;
  max-width: 80px;
  text-align: center;
  font-size: 15px;
`;

export const Counter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const textToColor = {
  black: "#010606",
  red: "#b71c1c",
  purple: "#9254ff",
  transparent: "#0c0c0c",
};
