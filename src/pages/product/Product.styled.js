import styled from "styled-components";

export const ProductMain = styled.main`
  padding: 2rem;
  background: #010606;
`;

export const ProductContainer = styled.section`
  margin-top: 80px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const ProductImgWrap = styled.div`
  max-width: 555px;
  height: 50%;
  margin: 2rem;
`;
export const ProductImg = styled.img`
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;
  cursor: pointer;
`;

export const ProductDetailsWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: #fff;
`;

export const H1 = styled.h1`
  text-align: center;
  color: #fff;
  font-size: 2rem;
  margin-bottom: 1rem;
`;

export const Text = styled.p`
  color: #fff;
  font-size: 1rem;
  margin-bottom: 1rem;
`;

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
`;
export const Btn = styled.button`
  border-radius: 50px;
  width: 100%;
  background: ${({ background }) => textToColor[background]};
  white-space: nowrap;
  padding: 10px 27px;
  color: #010606;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  margin-bottom: 1rem;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ hoverBackground }) => textToColor[hoverBackground]};
    color: #010606;
  }
`;

const textToColor = {
  purple: "#9254ff",
  white: "#fff",
  red: "#FF0000",
};
