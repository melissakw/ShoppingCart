import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import {
  Header,
  HomeLink,
  CartIcon,
  NumberOfItemsInCart
} from "../App.elements";

const HeaderBar = () => {
  const numOfItemsInCart = useSelector((state) =>
    state.product.cartItems.reduce((a, c) => a + +c.quantity, 0)
  );

  return (
    <Header>
      <HomeLink to="/">
        <h3>THE SHOP</h3>
      </HomeLink>
      <CartIcon>
        <Link to="/cart">
          <ShoppingCartIcon data-testid="shopping-icon" style={{ color: "black" }} />
        </Link>
        <NumberOfItemsInCart className="badge badge-dark">
          {numOfItemsInCart}
        </NumberOfItemsInCart>
      </CartIcon>
    </Header>
  );
};

export default HeaderBar;
