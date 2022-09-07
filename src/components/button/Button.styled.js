import styled from "styled-components";
import { Link } from "react-router-dom";

export const Button = styled(Link)`
  border-radius: 50px;
  background-color: ${({ primary }) => (primary ? "#9254ff" : "#fff")};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "14px 48px" : "12px 30px")};
  color: ${({ dark }) => (dark ? "#010606" : "#fff")};
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  font-weight: bold;
  text-decoration: none;
  outline: none;
  border: none;
  margin: 0.5rem;
  cursor: pointer;
  display: flex;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background-color: ${({ primary }) => (primary ? "#9254ff" : "#010606")};
  }
`;

const textToColor = {
  black: "#010606",
  white: "#fff",
  transparent: "#0c0c0c",
};
