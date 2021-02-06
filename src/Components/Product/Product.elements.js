import styled from "styled-components";

export const ProductsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const ProductCardContainer = styled.div`
  padding: 10px;
  width: 220px;
  height: 330px;
  margin: 10px;
  text-align: center;
  font-size: 16px;
`;

export const ProductText = styled.p`
  margin-top: "auto";
`;

export const ProductImage = styled.img`
  width: 150px;
  height: 200px;
`;

export const ProductDetails = styled.div`
  line-height: 30%;
`;

export const AddToCartButton = styled.button`
  background-color: black;
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  opacity: 0.6;
  transition: 0.4s;

  &:hover {
    opacity: 1;
  }
`;
