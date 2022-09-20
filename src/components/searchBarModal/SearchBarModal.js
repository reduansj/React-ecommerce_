import React, { useState, useEffect, useMemo } from "react";
import {
  SearchBar,
  ProductPreviewImg,
  ProductPreviewContainer,
} from "./SearchBarModal.styled";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../../Api/products";
import { getProductsBySearch } from "../../utils";
import { ProductLink } from "../../pages/shop/Shop.styled";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  useDisclosure,
  Input,
  Flex,
} from "@chakra-ui/react";

function SearchBarModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [scrollBehavior, setScrollBehavior] = React.useState("inside");

  const [value, setValue] = useState("");

  const { isLoading, isError, data, error } = useQuery(
    ["products"],
    getProducts
  );

  const handleChange = (e) => {
    const value = e.target.value;
    setValue(value);
  };

  const products = useMemo(
    () =>
      value.length > 3 && !isLoading ? getProductsBySearch(data, value) : [],
    [value, isLoading, data]
  );

  return (
    <>
      <SearchBar type="text" placeholder="Search" onClick={onOpen} />

      <Modal
        isCentered
        onCloseComplete={() => setValue("")}
        onClose={onClose}
        isOpen={isOpen}
        motionPreset="slideInBottom"
        scrollBehavior={scrollBehavior}
        size={"xl"}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalBody>
            <Input
              value={value}
              name="searchInput"
              variant="unstyled"
              width="auto"
              placeholder="Search"
              onChange={handleChange}
            />
            <Flex direction="column" align="center" gap="2">
              {products.map((product) => (
                <ProductLink to={`/product/${product.id}`} key={product.id}>
                  <ProductPreviewContainer>
                    <ProductPreviewImg src={product.url} alt={product.title} />
                    {product.title}
                  </ProductPreviewContainer>
                </ProductLink>
              ))}
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export default SearchBarModal;
