import styled from "styled-components";
import { Link } from "react-router-dom";

export const ShopMainContainer = styled.main`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #010606;
`;

export const ShopDashboardWrap = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 4rem;
  padding: 4rem;
  border-radius: 10px;
  background-color: #010606;
  margin-top: 80px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
    padding: 1rem 1rem;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 2rem 2rem;
  }
`;

export const ProductLink = styled(Link)`
  text-decoration: none;
`;
