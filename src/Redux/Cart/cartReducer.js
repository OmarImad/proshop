import {
  ADD_SHIPPING_ADDRESS,
  ADD_TO_CART,
  DECREASE_COUNT,
  DELETE_CART_ITEM,
  INCREASE_COUNT,
} from "./cartTypesConstants";

export const cartReducer = (
  initialState = {
    cart: [],
    shippingAddress: {},
  },
  action
) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...initialState,
        cart: [...initialState.cart, action.payload],
      };

    case INCREASE_COUNT:
      return {
        ...initialState,
        cart: action.payload,
      };

    case DECREASE_COUNT:
      return {
        ...initialState,
        cart: action.payload,
      };

    case DELETE_CART_ITEM:
      return {
        ...initialState,
        cart: initialState.cart.filter((item) => item._id != action.payload),
      };

    case ADD_SHIPPING_ADDRESS:
      return {
        ...initialState,
        shippingAddress: action.payload,
      };

    default:
      return initialState;
  }
};
