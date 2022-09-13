import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { getProductById, editCartProduct, deleteCartProduct } from "../../Api";
import {
  Text,
  ProductPreviewContainer,
  ProductPreviewImg,
  CartButton,
  Counter,
} from "./Cart.styled";

const ProductQuantityCounter = ({ dispatch, cartProduct: product }) => {
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
            onClick={() => dispatch({ payload: product.id, type: "decrement" })}
          >
            -
          </CartButton>
          <span> {product.quantity}</span>
          <CartButton
            onClick={() => dispatch({ payload: product.id, type: "increment" })}
          >
            +
          </CartButton>
        </Counter>
        <CartButton onClick={() => removeProduct()}>Remove</CartButton>
      </ProductPreviewContainer>
    </>
  );
};

export default ProductQuantityCounter;
