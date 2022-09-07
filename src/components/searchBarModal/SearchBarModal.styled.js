import styled from "styled-components";
export const SearchBar = styled.input`
  font-size: 18px;
  padding: 10px;
  margin: 10px;
  background: "#fff";
  border: none;
  border-radius: 50px;
  ::placeholder {
    color: "black";
  }
`;

export const ProductPreviewContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #f6f6f6;
  font-size: 20px;
  font-weight: bold;
  width: 500px;
  height: 150px;
  margin-bottom: 2px;
  border-radius: 20px;
  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
  }
`;

export const ProductPreviewImg = styled.img`
  height: 150px;
  width: 150px;
  margin: 2rem;
  padding: 1rem 2rem;
  overflow: hidden;
`;
