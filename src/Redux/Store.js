import { createStore, combineReducers, applyMiddleware } from "redux";
import { userReducer } from "./User/userReducer";
import thunk from "redux-thunk";
import { guestReducers } from "./Guest/guestReducers";
import { cartReducer } from "./Cart/cartReducer";
import { ordersReducers } from "./Orders/ordersReducers";

const reducers = combineReducers({
  userDetails: userReducer,
  guestState: guestReducers,
  cart: cartReducer,
  orders: ordersReducers,
});

const userFromLocalStorage = JSON.parse(localStorage.getItem("user")) || {};
const shippingFromLocalStorage =
  JSON.parse(localStorage.getItem("shipping")) || {};
const cartFromLocalStorage = JSON.parse(localStorage.getItem("cart")) || [];

const initialState = {
  userDetails: {
    user: userFromLocalStorage,
  },
  cart: {
    cart: cartFromLocalStorage,
    shippingAddress: shippingFromLocalStorage,
  },
};

const middlewares = [thunk];

const store = createStore(
  reducers,
  initialState,
  applyMiddleware(...middlewares)
);

export default store;
