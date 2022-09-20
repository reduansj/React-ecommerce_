import {
  CheckoutContainer,
  CheckoutMain,
  Container,
  H1,
} from "./CheckOut.styled";
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

import { CartContext } from "../cart/context/CartContext";
import { useContext } from "react";
import {
  ProductPreviewContainer,
  ProductPreviewImg,
  Text,
} from "../cart/Cart.styled";
import {
  FormWrap,
  Form,
  FormH1,
  FormLabel,
  FormInput,
  FormButton,
  InputsWrapper,
  InputContainer,
} from "../../components/form/Form.styled";

function CheckOut() {
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

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
  };

  return (
    <CheckoutMain>
      <CheckoutContainer>
        <GridWrapper>
          <GridTemplate>
            <Column1>
              <Container>
                <Container>
                  <H1>IN YOUR CART</H1>
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
                </Container>
                {cartItems?.map((product) => (
                  <ProductPreviewContainer key={product.title}>
                    <ProductPreviewImg src={product.url} alt={product.title} />
                    <Text>
                      <span>{product.title}</span>
                      <span>Qty:{product.quantity}</span>
                    </Text>
                  </ProductPreviewContainer>
                ))}
              </Container>
            </Column1>
            <Column2>
              <Container>
                <FormWrap>
                  <Form onSubmit={handleSubmit}>
                    <FormH1>CHECKOUT</FormH1>
                    <InputsWrapper>
                      <InputContainer>
                        <FormLabel htmlFor="for">First Name*</FormLabel>
                        <FormInput name="firstName" type="text" required />
                      </InputContainer>
                      <InputContainer>
                        <FormLabel htmlFor="for">Last Name*</FormLabel>
                        <FormInput name="lastName" type="text" required />
                      </InputContainer>
                    </InputsWrapper>
                    <FormLabel htmlFor="for">Address*</FormLabel>
                    <FormInput name="address" type="text" required />
                    <InputsWrapper>
                      <InputContainer>
                        <FormLabel htmlFor="for">City*</FormLabel>
                        <FormInput name="firstName" type="text" required />
                      </InputContainer>
                      <InputContainer>
                        <FormLabel htmlFor="for">State*</FormLabel>
                        <FormInput name="state" type="text" required />
                      </InputContainer>
                      <InputContainer>
                        <FormLabel htmlFor="for">Postal Code*</FormLabel>
                        <FormInput name="postalCode" type="number" required />
                      </InputContainer>
                    </InputsWrapper>
                    <InputsWrapper>
                      <InputContainer>
                        <FormLabel htmlFor="for">Email*</FormLabel>
                        <FormInput name="email" type="email" required />
                      </InputContainer>
                      <InputContainer>
                        <FormLabel htmlFor="for">Phone Number*</FormLabel>
                        <FormInput name="phoneNumber" type="tel" required />
                      </InputContainer>
                    </InputsWrapper>

                    <FormButton type="submit">Buy</FormButton>
                  </Form>
                </FormWrap>
              </Container>
            </Column2>
          </GridTemplate>
        </GridWrapper>
      </CheckoutContainer>
    </CheckoutMain>
  );
}

export default CheckOut;
