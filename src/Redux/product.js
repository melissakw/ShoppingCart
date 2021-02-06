import * as ActionTypes from "./ActionTypes";

export const product = (
  state = {
    isLoading: true,
    errMess: null,
    cartItems: []
  },
  action
) => {
  switch (action.type) {
    case ActionTypes.ADD_ITEM:
      let duplicateItem = false;
      let copyItems = state.cartItems.map((item) => {
        if (item.id === action.payload.id) {
          item.quantity = Math.min(item.quantity + 1, item.stock);
          duplicateItem = true;
        }
        return item;
      });

      if (duplicateItem) {
        return { ...state, cartItems: copyItems };
      } else {
        return {
          ...state,
          cartItems: [action.payload].concat(state.cartItems)
        };
      }

    case ActionTypes.REMOVE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== action.payload)
      };
    case ActionTypes.EDIT_ITEM_QTY:
      let updatedProductWithNewQty = state.cartItems.map((item) => {
        if (item.id === action.product.id) {
          item.quantity = action.quantity;
        }
        return item;
      });
      return { ...state, cartItems: updatedProductWithNewQty };

    default:
      return state;
  }
};
