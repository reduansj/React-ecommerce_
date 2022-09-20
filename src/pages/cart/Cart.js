import { useContext } from "react";
import { Link } from "react-router-dom";

import { CartMain, CartH1, Container, CartButton } from "./Cart.styled";

import CartProductContainer from "./CartProductContainer";
import {
  Column1,
  Column2,
  GridTemplate,
  GridWrapper,
} from "../../components/grid/Grid.styled";
import {
  Table,
  TableContainer,
  Td,
  Tfoot,
  Th,
  Tr,
  Tbody,
} from "@chakra-ui/react";
import { CartContext } from "./context/CartContext";

const Cart = () => {
  const {
    cartItems,
    dispatch,
    totalPrice,
    subTotal,
    shipmentPrice,
    cartIsError,
    cartIsLoading,
    cartError,
  } = useContext(CartContext);

  if (cartIsLoading) {
    return (
      <CartMain>
        <GridWrapper>
          <GridTemplate>
            <Column1>
              <Container>
                <CartH1> {cartIsLoading} </CartH1>;
              </Container>
            </Column1>
          </GridTemplate>
        </GridWrapper>
      </CartMain>
    );
  }

  if (cartIsError) {
    return (
      <CartMain>
        <GridWrapper>
          <GridTemplate>
            <Column1>
              <Container>
                <CartH1>Error: {cartError.message} </CartH1>;
              </Container>
            </Column1>
          </GridTemplate>
        </GridWrapper>
      </CartMain>
    );
  }

  if (cartItems?.length === 0) {
    return (
      <CartMain>
        <GridWrapper>
          <GridTemplate>
            <Column1>
              <Container>
                <CartH1>CART IS EMPTY </CartH1>;
                <Link to="/category/products">
                  <CartButton width={"300px"} background={"red"}>
                    START SHOPPING
                  </CartButton>
                </Link>
              </Container>
            </Column1>
          </GridTemplate>
        </GridWrapper>
      </CartMain>
    );
  }

  return (
    <CartMain>
      <GridWrapper>
        <GridTemplate>
          <Column1>
            <Container>
              <CartH1>CART</CartH1>
              {cartItems?.map((cartProduct) => (
                <CartProductContainer
                  key={cartProduct.id}
                  cartProduct={cartProduct}
                  dispatch={dispatch}
                />
              ))}
            </Container>
          </Column1>
          <Column2>
            <Container>
              <CartH1>Summary</CartH1>
              <TableContainer style={{ color: "white" }}>
                <Table size="sm">
                  <Tbody>
                    <Tr>
                      <Td>Subtotal</Td>
                      <Td isNumeric>${totalPrice?.toFixed(2)}</Td>
                    </Tr>
                    <Tr>
                      <Td>Shipment</Td>

                      <Td isNumeric>${shipmentPrice}</Td>
                    </Tr>
                  </Tbody>
                  <Tfoot>
                    <Tr>
                      <Th>TOTAL </Th>
                      <Th isNumeric>${subTotal}</Th>
                    </Tr>
                  </Tfoot>
                </Table>
              </TableContainer>
              <Link to="/checkout">
                <CartButton width={"400px"} background={"red"}>
                  Checkout
                </CartButton>
              </Link>
            </Container>
          </Column2>
        </GridTemplate>
      </GridWrapper>
    </CartMain>
  );
};

export default Cart;
