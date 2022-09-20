import styled from "styled-components";

export const CheckoutMain = styled.main`
  min-height: 692px;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  z-index: 0;
  background: #da22ff;
  background: -webkit-linear-gradient(to bottom, #da22ff, #9733ee);
  background: linear-gradient(to bottom, #da22ff, #9733ee);
`;
export const CheckoutContainer = styled.div`
  padding: 100px;
`;

export const H1 = styled.h1`
  text-align: center;
  color: #fff;
  margin-bottom: 1rem;
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
