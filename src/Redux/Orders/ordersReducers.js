import {
  GET_ORDER_FAILED,
  GET_ORDER_START,
  GET_ORDER_SUCCESS,
  GET_ORDERS_FAILED,
  GET_ORDERS_START,
  GET_ORDERS_SUCCESS,
  PAY_ORDER_FAILED,
  PAY_ORDER_START,
  PAY_ORDER_SUCCESS,
  PLACE_ORDER_FAILED,
  PLACE_ORDER_START,
  PLACE_ORDER_SUCCESS,
} from "./ordersTypesConstants";

export const ordersReducers = (
  initialState = {
    placeOrder: {
      success: "",
      isLoading: false,
      error: "",
    },
    payOrder: {
      success: "",
      isLoading: false,
      error: "",
    },
    userOrders: {
      success: false,
      isLoading: false,
      error: "",
      orders: [],
    },
    userOrder: {
      success: false,
      isLoading: true,
      error: "",
      order: {},
    },
  },
  action
) => {
  switch (action.type) {
    case PLACE_ORDER_START:
      return {
        ...initialState,
        placeOrder: {
          isLoading: true,
          success: false,
        },
      };

    case PLACE_ORDER_SUCCESS:
      return {
        ...initialState,
        placeOrder: {
          isLoading: false,
          success: action.payload,
        },
      };

    case PLACE_ORDER_FAILED:
      return {
        ...initialState,
        placeOrder: {
          isLoading: false,
          error: action.payload,
        },
      };

    case GET_ORDERS_START:
      return {
        ...initialState,
        userOrders: {
          success: false,
          isLoading: true,
          error: "",
          orders: [],
        },
      };

    case GET_ORDERS_SUCCESS:
      return {
        ...initialState,
        userOrders: {
          success: true,
          isLoading: false,
          error: false,
          orders: action.payload,
        },
      };

    case GET_ORDERS_FAILED:
      return {
        ...initialState,
        userOrders: {
          success: false,
          isLoading: false,
          error: action.payload,
          orders: [],
        },
      };

    /** Get order by id cases*/
    case GET_ORDER_START:
      return {
        ...initialState,
        userOrder: {
          success: false,
          isLoading: true,
          error: "",
          order: {},
        },
      };

    case GET_ORDER_SUCCESS:
      return {
        ...initialState,
        userOrder: {
          success: true,
          isLoading: false,
          error: false,
          order: action.payload,
        },
      };

    case GET_ORDER_FAILED:
      return {
        ...initialState,
        userOrder: {
          success: false,
          isLoading: false,
          error: action.payload,
          order: {},
        },
      };

    /** Get order by id cases*/
    case PAY_ORDER_START:
      return {
        ...initialState,
        payOrder: {
          success: false,
          isLoading: true,
          error: "",
        },
      };

    case PAY_ORDER_SUCCESS:
      return {
        ...initialState,
        payOrder: {
          success: true,
          isLoading: false,
          error: false,
        },
      };

    case PAY_ORDER_FAILED:
      return {
        ...initialState,
        payOrder: {
          success: false,
          isLoading: false,
          error: action.payload,
        },
      };

    default:
      return initialState;
  }
};
