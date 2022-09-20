import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { addProductToCart } from "../../Api/cart";
import { getProductById } from "../../Api/products";

import { useParams } from "react-router-dom";

import {
  ProductImg,
  ProductImgWrap,
  ProductContainer,
  ProductMain,
  ProductDetailsWrap,
  H1,
  Text,
  Btn,
  FlexContainer,
} from "./Product.styled";

import {
  Column1,
  Column2,
  GridTemplate,
  GridWrapper,
} from "../../components/grid/Grid.styled";

import { FormLabel, FormSelector } from "../../components/form/Form.styled";

import { useState } from "react";
import { useToast, Box } from "@chakra-ui/react";
import {
  addProductToFavorites,
  getFavorites,
  deleteFromFavorites,
} from "../../Api/favorites";

function Product() {
  const { id } = useParams();

  const [size, setSize] = useState();
  const [favList, setFavList] = useState([]);

  //Toast notifications
  const toast = useToast();
  const showToast = (text, color) => {
    toast({
      position: "bottom-left",
      render: () => (
        <Box color="white" p={3} bg={colorToHex[color]}>
          {text}
        </Box>
      ),
    });

    const colorToHex = {
      green: "#9254ff",
      red: "#FF0000",
    };
  };

  const queryClient = useQueryClient();

  const { isLoading, isError, data, error } = useQuery(["product", id], () =>
    getProductById(id)
  );

  const {
    isLoading: favIsLoading,
    isError: favIsError,
    data: favData,
    error: favError,
  } = useQuery(["favorites"], getFavorites, { onSuccess: setFavList });

  const addToCart = useMutation(addProductToCart);

  const removeFav = useMutation(deleteFromFavorites);
  const addToFav = useMutation(addProductToFavorites);

  //declare current product data
  const product = !isLoading && !isError && data;

  //Check if product is in favorites
  const productInFavorites = favList.find(
    (productInFavorites) => productInFavorites.id === product.id
  );

  const handelAddToCart = () => {
    if (size) {
      addToCart.mutate(
        {
          id: product.id,
          quantity: 1,
          size: size,
        },
        {
          onSuccess: () => {
            queryClient.invalidateQueries(["cart"]);
            showToast("Added to cart", "green");
          },
        }
      );
    } else {
      showToast("Select size", "red");
    }
  };

  const handleAddToFav = () => {
    addToFav.mutate(
      { id: product.id },
      {
        onSuccess: () => {
          queryClient.invalidateQueries(["favorites"]);
          showToast("Added to Favorites", "green");
        },
      }
    );
  };

  const handleRemoveFromFav = () => {
    removeFav.mutate(product.id, {
      onSuccess: () => {
        queryClient.invalidateQueries(["favorites"]);
        showToast("Removed from favorites", "red");
      },
    });
  };

  if (isLoading || favIsLoading) {
    return (
      <ProductMain>
        <H1>{isLoading}</H1>
      </ProductMain>
    );
  }

  if (isError || favIsError) {
    return (
      <ProductMain>
        <H1>Error: {error.message}</H1>;
      </ProductMain>
    );
  }

  return (
    <ProductMain>
      <ProductContainer>
        <GridWrapper>
          <GridTemplate>
            <Column1>
              <ProductImgWrap>
                <ProductImg src={product.url} alt={product.title} />
              </ProductImgWrap>
            </Column1>
            <Column2>
              <ProductDetailsWrap>
                <H1>{product.title}</H1>

                <Text>${product.price}</Text>
                <form
                  onChange={(event) => {
                    event.preventDefault();
                    event.target.value === "Size"
                      ? setSize()
                      : setSize(event.target.value);
                  }}
                >
                  <FlexContainer>
                    <FormLabel htmlFor="for">Select your size</FormLabel>
                    <FormSelector name="size">
                      <option defaultValue={"Size"}>Size</option>
                      {product?.sizes.map((size) => (
                        <option key={size} value={size}>
                          {size}
                        </option>
                      ))}
                    </FormSelector>
                  </FlexContainer>
                </form>
                <Btn
                  background={"purple"}
                  hoverBackground={"white"}
                  onClick={handelAddToCart}
                >
                  ADD TO CART
                </Btn>
                {productInFavorites ? (
                  <Btn
                    background={"red"}
                    hoverBackground={"white"}
                    onClick={handleRemoveFromFav}
                  >
                    REMOVE FROM FAVORITES
                  </Btn>
                ) : (
                  <Btn
                    background={"white"}
                    hoverBackground={"purple"}
                    onClick={handleAddToFav}
                  >
                    ADD TO FAVORITES
                  </Btn>
                )}
                <Text>{product.description}</Text>
              </ProductDetailsWrap>
            </Column2>
          </GridTemplate>
        </GridWrapper>
      </ProductContainer>
    </ProductMain>
  );
}

export default Product;
