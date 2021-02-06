import React, { useState } from "react";
import { useSelector } from "react-redux";
import HeaderBar from "../HeaderBar/HeaderBar";
import EmptyCart from "./EmptyCart";
import CartDetails from "./CartDetails";
import CircularProgress from "@material-ui/core/CircularProgress";
import { AppContainer } from "../App.elements";
import {
  Loading,
  CartRow,
  CartSummary,
  ShipTime,
  CheckoutButton
} from "./Cart.elements";

const Cart = () => {
  const productsInCart = useSelector((state) => state.product.cartItems);
  const totalCartPrice =
    Math.round(
      productsInCart.reduce((a, c) => a + c.price * c.quantity, 0) * 100
    ) / 100;
  const numOfItemsInCart = useSelector((state) =>
    state.product.cartItems.reduce((a, c) => a + +c.quantity, 0)
  );
  const [isLoadingChanges, setIsLoadingChanges] = useState(false);

  return (
    <AppContainer>
      <HeaderBar />
      <h1>Shopping Cart</h1>
      <div>{numOfItemsInCart === 0 && <EmptyCart />}</div>
      <div>
        {isLoadingChanges && (
          <Loading>
            <CircularProgress />
          </Loading>
        )}
      </div>

      <CartRow>
        <CartDetails
          productsInCart={productsInCart}
          setIsLoadingChanges={setIsLoadingChanges}
        />
        <CartSummary>
          <h2>Order Summary</h2>
          <p>Subtotal: ${totalCartPrice}</p>
          <p>Shipping: TBD</p>
          <p>Estimated Tax: $0.00</p>
          <p>Total: ${totalCartPrice}</p>
          <ShipTime>Estimated Delivery: Feb 16-24</ShipTime>
          {/*date for demo only. Actual date to be calculated*/}
          <CheckoutButton>Checkout</CheckoutButton>
        </CartSummary>
      </CartRow>
    </AppContainer>
  );
};

export default Cart;
