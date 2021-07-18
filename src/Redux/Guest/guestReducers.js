import {
  GET_FEATURED_PRODUCTS_FAILED,
  GET_FEATURED_PRODUCTS_START,
  GET_FEATURED_PRODUCTS_SUCCESS,
  GET_PRODUCT_BY_ID_FAILED,
  GET_PRODUCT_BY_ID_START,
  GET_PRODUCT_BY_ID_SUCCESS,
  GET_SEARCH_RESULTS_FAILED,
  GET_SEARCH_RESULTS_START,
  GET_SEARCH_RESULTS_SUCCESS,
  GET_SLIDER_IMAGES_FAILED,
  GET_SLIDER_IMAGES_START,
  GET_SLIDER_IMAGES_SUCCESS,
} from "./guestTypes";
import { ADD_REVIEW_TO_PRODUCT } from "../User/userTypesConstants";

export const guestReducers = (
  initialState = {
    sliderImages: [],
    products: [],
    isLoading: false,
    product: {
      product: {},
      isLoading: false,
    },
    searchResults: {
      products: [],
      page: 0,
      pages: 0,
      isLoading: false,
    },
  },
  action
) => {
  switch (action.type) {
    /** Slider Cases*/
    case GET_SLIDER_IMAGES_START:
      return {
        ...initialState,
        isLoading: true,
      };
    case GET_SLIDER_IMAGES_SUCCESS:
      return {
        ...initialState,
        isLoading: false,
        sliderImages: action.payload,
      };
    case GET_SLIDER_IMAGES_FAILED:
      return {
        ...initialState,
        isLoading: false,
        error: action.payload,
      };

    /** Products Cases*/
    case GET_FEATURED_PRODUCTS_START:
      return {
        ...initialState,
        isLoading: true,
      };
    case GET_FEATURED_PRODUCTS_SUCCESS:
      return {
        ...initialState,
        isLoading: false,
        products: action.payload,
      };
    case GET_FEATURED_PRODUCTS_FAILED:
      return {
        ...initialState,
        isLoading: false,
        error: action.payload,
      };

    /** Products Cases*/
    case GET_SEARCH_RESULTS_START:
      return {
        ...initialState,
        searchResults: {
          ...initialState.searchResults,
          isLoading: true,
        },
      };
    case GET_SEARCH_RESULTS_SUCCESS:
      return {
        ...initialState,
        searchResults: {
          isLoading: false,
          ...action.payload,
          /*
            products: action.payload.products,
            page: action.payload.page,
            pages: action.payload.pages
          */
        },
      };
    case GET_SEARCH_RESULTS_FAILED:
      return {
        ...initialState,
        searchResults: {
          isLoading: false,
          error: action.payload,
        },
      };

    /** Product by id Cases*/
    case GET_PRODUCT_BY_ID_START:
      return {
        ...initialState,
        product: {
          isLoading: true,
        },
      };
    case GET_PRODUCT_BY_ID_SUCCESS:
      return {
        ...initialState,
        product: {
          product: action.payload,
          isLoading: false,
        },
      };
    case ADD_REVIEW_TO_PRODUCT:
      return {
        ...initialState,
        product: {
          product: {
            ...initialState.product.product,
            reviews: [action.payload, ...initialState.product.product.reviews],
          },
          isLoading: false,
        },
      };
    case GET_PRODUCT_BY_ID_FAILED:
      return {
        ...initialState,
        product: {
          isLoading: false,
          error: action.payload,
        },
      };
    default:
      return initialState;
  }
};
