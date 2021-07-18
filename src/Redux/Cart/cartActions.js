import {
  ADD_SHIPPING_ADDRESS,
  ADD_TO_CART,
  DECREASE_COUNT,
  DELETE_CART_ITEM,
  INCREASE_COUNT,
} from "./cartTypesConstants";

export const addCartItem = (product, quantity) => (dispatch, getState) => {
  const state = getState();

  const isProductExist = state.cart.cart.find(
    (item) => item._id == product._id
  );

  if (isProductExist) {
    isProductExist.quantity += quantity;
    isProductExist.qty += quantity;

    const index = state.cart.cart.findIndex(
      (item) => item._id == isProductExist._id
    );

    state.cart.cart[index] = isProductExist;

    dispatch({
      type: INCREASE_COUNT,
      payload: state.cart.cart,
    });
  } else {
    product.quantity = quantity;
    product.qty = quantity;
    product.product = product._id;

    dispatch({
      type: ADD_TO_CART,
      payload: product,
    });
  }

  localStorage.setItem("cart", JSON.stringify(getState().cart.cart));
};

export const decreaseCartItemQty =
  (product, quantity) => (dispatch, getState) => {
    const state = getState();

    const isProductExist = state.cart.cart.find(
      (item) => item._id == product._id
    );

    if (isProductExist) {
      isProductExist.quantity -= quantity;
      isProductExist.qty -= quantity;

      const index = state.cart.cart.findIndex(
        (item) => item._id == isProductExist._id
      );

      state.cart.cart[index] = isProductExist;

      dispatch({
        type: DECREASE_COUNT,
        payload: state.cart.cart,
      });
    }

    localStorage.setItem("cart", JSON.stringify(getState().cart.cart));
  };

export const deleteCartItem = (id) => (dispatch, getState) => {
  dispatch({
    type: DELETE_CART_ITEM,
    payload: id,
  });

  localStorage.setItem("cart", JSON.stringify(getState().cart.cart));
};

export const addShippingAddress = (values) => {
  localStorage.setItem("shipping", JSON.stringify(values));

  return {
    type: ADD_SHIPPING_ADDRESS,
    payload: values,
  };
};
