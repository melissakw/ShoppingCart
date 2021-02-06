import * as ActionTypes from "./ActionTypes";

export const postToCart = (product) => (dispatch) => {
  const productWithQty = {
    id: product.id,
    title: product.title,
    price: product.price,
    image: product.image,
    quantity: 1, //defualt quantity to 1 when adding item to cart
    stock: 10
  };
  dispatch(addToCart(productWithQty));
};

export const addToCart = (product) => ({
  type: ActionTypes.ADD_ITEM,
  payload: product
});

export const removeItem = (id) => ({
  type: ActionTypes.REMOVE_ITEM,
  payload: id
});

export const editItem = (product, editedQuantity) => ({
  type: ActionTypes.EDIT_ITEM_QTY,
  product: product,
  quantity: editedQuantity
});

export const addToCartLoading = () => ({
  type: ActionTypes.ADD_TO_CART_LOADING
});

export const addToCartFailed = (errmess) => ({
  type: ActionTypes.ADD_TO_CART_FAILED,
  payload: errmess
});
