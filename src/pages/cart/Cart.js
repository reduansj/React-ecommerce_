import { useQuery } from "@tanstack/react-query";
import { useReducer } from "react";
import { getCart } from "../../Api";
import {
  CartMain,
  CartContent,
  CartH1,
  CartWrap,
  CartSection,
  Text,
} from "./Cart.styled";
import ProductQuantityCounter from "./ProductQuantityCounter";

const Cart = () => {
  function reducer(state, action) {
    const { payload: id } = action;
    switch (action.type) {
      case "increment":
        return state.map((product) => {
          if (product.id === id) {
            return {
              ...product,
              quantity: product.quantity + 1,
            };
          }
          return product;
        });
      case "decrement":
        const decrementedProduct = state.find((product) => product.id === id);
        if (decrementedProduct.quantity === 1) {
          return state;
        }
        return state.map((product) => {
          if (product.id === id) {
            return {
              ...product,
              quantity: product.quantity - 1,
            };
          }
          return product;
        });
      case "initialize":
        return action.payload;

      default:
        return state;
    }
  }

  const { isLoading, isError, data, error } = useQuery(["cart"], getCart, {
    onSuccess: (data) => dispatch({ type: "initialize", payload: data }),
  });

  const [cartItems, dispatch] = useReducer(reducer, data);

  console.log(cartItems);

  const totalPrice = cartItems?.reduce((total, cartProduct) => {
    return (total = total + cartProduct.price * cartProduct.quantity);
  }, 0);

  // console.log(totalPrice?.toFixed(2));

  if (isLoading) {
    return (
      <CartMain>
        <CartWrap>
          <CartContent>
            <CartSection>
              <h1>{isLoading}</h1>
            </CartSection>
          </CartContent>
        </CartWrap>
      </CartMain>
    );
  }

  if (isError) {
    return (
      <CartMain>
        <CartWrap>
          <CartContent>
            <CartSection>
              <span>Error: {error.message}</span>;
            </CartSection>
          </CartContent>
        </CartWrap>
      </CartMain>
    );
  }

  return (
    <CartMain>
      <CartWrap>
        <CartContent>
          <CartSection marginTop={"80px"}>
            <CartH1>Sign in to your account</CartH1>
            {cartItems?.map((cartProduct) => (
              <ProductQuantityCounter
                key={cartProduct.id}
                cartProduct={cartProduct}
                dispatch={dispatch}
              />
            ))}
          </CartSection>
          <CartSection marginTop={"5px"} marginBottom={"80px"}>
            <Text>Merchandise Subtotal: 159.59</Text>
          </CartSection>
        </CartContent>
      </CartWrap>
    </CartMain>
  );
};

export default Cart;
