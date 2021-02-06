import React from "react";
import { useDispatch } from "react-redux";
import { removeItem, editItem } from "../../Redux/ActionCreators";
import {
  Table,
  CartProductImage,
  RemoveButton
} from "./Cart.elements";

const CartDetails = ({ productsInCart, setIsLoadingChanges }) => {
  const dispatch = useDispatch();

  return (
    <Table>
      <thead>
        <tr>
          <th></th>
          <th>Item</th>
          <th>Item Price</th>
          <th>Item Quantity</th>
        </tr>
      </thead>
      <tbody>
        {productsInCart.map((productInCart) => {
          const stockQty = Array(productInCart.stock)
            .fill()
            .map((_, i) => i + 1);

          return (
            <tr key={productInCart.id}>
              <td>
                <CartProductImage
                  src={productInCart.image}
                  alt={productInCart.title}
                />
              </td>
              <td>
                <p>{productInCart.title}</p>
              </td>
              <td>
                <p>${productInCart.price}</p>
              </td>
              <td>
                <div>
                  <select
                    name="quantity"
                    id="quantity"
                    defaultValue={productInCart.quantity}
                    onChange={(e) => {
                      setIsLoadingChanges(true);
                      dispatch(editItem(productInCart, e.target.value));
                      setTimeout(() => setIsLoadingChanges(false), 1800);
                    }}
                    style={{ marginTop: "58px" }}
                  >
                    {stockQty.map((num) => {
                      return <option key={num} value={num}>{num}</option>;
                    })}
                  </select>
                </div>
                <div>
                  <RemoveButton
                    onClick={() => {
                      setIsLoadingChanges(true);
                      dispatch(removeItem(productInCart.id));
                      setTimeout(() => setIsLoadingChanges(false), 1800);
                    }}
                  >
                    remove
                  </RemoveButton>
                </div>
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default CartDetails;
