import { useMutation, useQueryClient } from "@tanstack/react-query";

import { deleteCartProduct } from "../../Api/cart";
import {
  Text,
  ProductPreviewContainer,
  ProductPreviewImg,
  CartButton,
  Counter,
} from "./Cart.styled";

const CartProductContainer = ({ dispatch, cartProduct: product }) => {
  const queryClient = useQueryClient();

  const removeCartProduct = useMutation(deleteCartProduct, {
    onSuccess: () => queryClient.invalidateQueries(["cart"]),
  });

  const removeProduct = () => {
    removeCartProduct.mutate(product.id);
  };

  return (
    <>
      <ProductPreviewContainer>
        <ProductPreviewImg src={product.url} alt={product.title} />
        <Text>
          <span>{product.title}</span>
          <span>{product.price} $</span>
        </Text>
        <Counter>
          <CartButton
            background={"black"}
            onClick={() => dispatch({ payload: product.id, type: "decrement" })}
          >
            -
          </CartButton>
          <span> {product.quantity}</span>
          <CartButton
            background={"black"}
            onClick={() => dispatch({ payload: product.id, type: "increment" })}
          >
            +
          </CartButton>
        </Counter>
        <CartButton background={"red"} onClick={() => removeProduct()}>
          Remove
        </CartButton>
      </ProductPreviewContainer>
    </>
  );
};

export default CartProductContainer;
