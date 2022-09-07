import {
  ShopDashboardWrap,
  ShopMainContainer,
  ProductLink,
} from "./Shop.styled";
import ProductCard from "./productCard";
import { Outlet, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../../Api";
import { getProductsByCategory } from "../../utils";

function Shop() {
  const { category } = useParams();

  const { isLoading, isError, data, error } = useQuery(
    ["products"],
    getProducts
  );

  const products = !isLoading
    ? category === "products"
      ? data
      : getProductsByCategory(data, category)
    : [];

  if (isLoading) {
    return (
      <ShopMainContainer>
        <h1>{isLoading}</h1>
      </ShopMainContainer>
    );
  }

  if (isError) {
    return (
      <ShopMainContainer>
        <span>Error: {error.message}</span>;
      </ShopMainContainer>
    );
  }
  return (
    <>
      <ShopMainContainer>
        <ShopDashboardWrap>
          {products.map((product) => (
            <ProductLink to={`/product/${product.id}`} key={product.id}>
              <ProductCard product={product} direction={"column"} />
            </ProductLink>
          ))}
        </ShopDashboardWrap>
        <Outlet />
      </ShopMainContainer>
    </>
  );
}

export default Shop;
