import {
  ProductCardContainer,
  ProductCardImg,
  ProductCardTitle,
  ProductCardPrice,
  ProductCardWrapper,
} from "./ProductCard.styled";

const ProductCard = ({ product }) => {
  return (
    <ProductCardContainer>
      <ProductCardImg src={product.url} alt={product.title} />
      <ProductCardTitle>{product.title}</ProductCardTitle>
      <ProductCardPrice>{product.price} $</ProductCardPrice>
    </ProductCardContainer>
  );
};

export default ProductCard;
