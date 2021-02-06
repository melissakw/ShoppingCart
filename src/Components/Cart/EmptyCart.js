import React from "react";
import {
  EmptyCartContainer,
  ShopLink,
  HighlightText,
  BodyText
} from "./EmptyCart.elements";

const EmptyCart = () => {
  return (
    <EmptyCartContainer>
      <HighlightText>Your cart is empty</HighlightText>
      <ShopLink to="/">
        <BodyText>Find something you love to fill it up</BodyText>
      </ShopLink>
    </EmptyCartContainer>
  );
};

export default EmptyCart;
