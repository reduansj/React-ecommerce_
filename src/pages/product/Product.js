import { useQuery, useMutation } from "@tanstack/react-query";
import { addProductToCart, getProductById } from "../../Api";

import { useParams } from "react-router-dom";

import {
  ProductImg,
  ProductImgWrap,
  ProductContainer,
  ProductMain,
  ProductDetailsWrap,
} from "./Product.styled";
import { Button } from "@chakra-ui/react";
import { useState } from "react";

function Product() {
  const { id } = useParams();
  const size = "M";
  const [product, setProduct] = useState([]);
  const { isLoading, isError, data, error } = useQuery(
    ["product", id],
    () => getProductById(id),
    { onSuccess: setProduct }
  );

  const mutation = useMutation(addProductToCart);

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
          <Button
            onClick={() =>
              mutation.mutate({
                id: product.id,
                quantity: 1,
                size: "M",
              })
            }
          ></Button>
        </ProductDetailsWrap>
      </ProductContainer>
    </ProductMain>
  );
}

export default Product;
