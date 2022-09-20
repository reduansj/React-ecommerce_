import {
  FavoritesDashboardWrap,
  FavoritesMainContainer,
  H1,
  ProductLink,
} from "./Favorites.styled";
import { Outlet } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import { getProducts } from "../../Api/products";
import { getFavoriteProducts } from "../../utils/products";
import { getFavorites } from "../../Api/favorites";
import ProductCard from "../shop/productCard";

function Favorites() {
  const { isLoading, isError, data, error } = useQuery(
    ["products"],
    getProducts
  );

  const {
    isLoading: favIsLoading,
    isError: favIsError,
    data: favData,
    error: favError,
  } = useQuery(["favorites"], getFavorites);

  const products = !isLoading && !isError && data;
  const favList = !favIsLoading && !favIsError && favData;

  const favProductsData =
    products && favList && getFavoriteProducts(products, favList);

  if (isLoading || favIsLoading) {
    return (
      <FavoritesMainContainer>
        <H1>{isLoading}</H1>
      </FavoritesMainContainer>
    );
  }

  if (isError || favIsError) {
    return (
      <FavoritesMainContainer>
        <H1>Error: {error.message}</H1>;
      </FavoritesMainContainer>
    );
  }

  return (
    <>
      <FavoritesMainContainer>
        <FavoritesDashboardWrap>
          {favProductsData?.map((product) => (
            <ProductLink to={`/product/${product.id}`} key={product.id}>
              <ProductCard product={product} direction={"column"} />
            </ProductLink>
          ))}
        </FavoritesDashboardWrap>
        <Outlet />
      </FavoritesMainContainer>
    </>
  );
}

export default Favorites;
