import React, { useState } from "react";

import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../../Api";
import { getProductsById } from "../../utils";

import {
  ProductImg,
  ProductImgWrap,
  ProductContainer,
  ProductMain,
  ProductDetailsWrap,
} from "./Product.styled";

import { useParams } from "react-router-dom";
import { Button } from "@chakra-ui/react";

import { useAddProductsToCart } from "../../customHooks";

function Product() {
  const { id } = useParams();

  const { isLoading, isError, data, error } = useQuery(
    ["products"],
    getProducts
  );
  const product = !isLoading && getProductsById(data, id);

  const addProduct = useAddProductsToCart();

  if (isLoading) {
    return (
      <ProductMain>
        <h1>{isLoading}</h1>
      </ProductMain>
    );
  }

  if (isError) {
    return (
      <ProductMain>
        <span>Error: {error.message}</span>;
      </ProductMain>
    );
  }

  return (
    <ProductMain>
      <ProductContainer>
        <ProductImgWrap>
          <ProductImg src={product.url} alt={product.title} />
        </ProductImgWrap>
        <ProductDetailsWrap>
          <Button onClick={() => addProduct(product)}></Button>
        </ProductDetailsWrap>
      </ProductContainer>
    </ProductMain>
  );
}

export default Product;
