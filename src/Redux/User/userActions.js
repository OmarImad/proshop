import {
  ADD_REVIEW_FAILED,
  ADD_REVIEW_START,
  ADD_REVIEW_SUCCESS,
  USER_GET_PROFILE_FAILED,
  USER_GET_PROFILE_START,
  USER_GET_PROFILE_SUCCESS,
  USER_LOGIN_FAILED,
  USER_LOGIN_START,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT_SUCCESS,
  USER_REGISTER_FAILED,
  USER_REGISTER_START,
  USER_REGISTER_SUCCESS,
  USER_UPDATE_PROFILE_FAILED,
  USER_UPDATE_PROFILE_START,
  USER_UPDATE_PROFILE_SUCCESS,
} from "./userTypesConstants";
import axios from "axios";
import API_URL from "../../Api";

export const loginAction = (values, history, pathname) => {
  return async (dispatch) => {
    dispatch({
      type: USER_LOGIN_START,
    });

    try {
      const response = await axios.post(`${API_URL}/users/login`, values);

      // Set user to localStorage
      localStorage.setItem("user", JSON.stringify(response.data));

      dispatch({
        payload: response.data,
        type: USER_LOGIN_SUCCESS,
      });

      history.push(pathname ? pathname : "/");
    } catch (e) {
      dispatch({
        payload: e?.response?.data?.message,
        type: USER_LOGIN_FAILED,
      });
    }
  };
};

export const registerAction = (values, history) => {
  return async (dispatch) => {
    dispatch({
      type: USER_REGISTER_START,
    });

    try {
      const response = await axios.post(`${API_URL}/users`, values);

      // Set user to localStorage
      localStorage.setItem("user", JSON.stringify(response.data));

      dispatch({
        payload: response.data,
        type: USER_REGISTER_SUCCESS,
      });

      history.push("/");
    } catch (e) {
      dispatch({
        payload: e.response.data.message,
        type: USER_REGISTER_FAILED,
      });
    }
  };
};

export const getProfileAction = () => {
  return async (dispatch, getState) => {
    dispatch({
      type: USER_GET_PROFILE_START,
    });

    const state = getState();

    const {
      userDetails: {
        user: { token },
      },
    } = state;

    try {
      const response = await axios.get(`${API_URL}/users/profile`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      dispatch({
        payload: response.data,
        type: USER_GET_PROFILE_SUCCESS,
      });
    } catch (e) {
      dispatch({
        payload: e?.response?.data?.message,
        type: USER_GET_PROFILE_FAILED,
      });
    }
  };
};

export const updateProfileAction = (values, history) => {
  return async (dispatch, getState) => {
    dispatch({
      type: USER_UPDATE_PROFILE_START,
    });

    const state = getState();

    const {
      userDetails: {
        user: { token },
      },
    } = state;

    try {
      const response = await axios.put(`${API_URL}/users/profile`, values, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      // Set user to localStorage
      localStorage.setItem("user", JSON.stringify(response.data));

      dispatch({
        payload: response.data,
        type: USER_UPDATE_PROFILE_SUCCESS,
      });

      history.push("/profile");
    } catch (e) {
      dispatch({
        payload: e?.response?.data?.message,
        type: USER_UPDATE_PROFILE_FAILED,
      });
    }
  };
};

export const addReviewAction = (values, id) => {
  return async (dispatch, getState) => {
    dispatch({
      type: ADD_REVIEW_START,
    });

    const state = getState();

    const {
      userDetails: {
        user: { token },
      },
    } = state;

    try {
      const response = await axios.post(
        `${API_URL}/products/${id}/reviews`,
        values,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      dispatch({
        payload: response.data.message,
        type: ADD_REVIEW_SUCCESS,
      });
    } catch (e) {
      dispatch({
        payload: e?.response?.data?.message,
        type: ADD_REVIEW_FAILED,
      });
    }
  };
};

export const logoutAction = () => {
  return {
    payload: null,
    type: USER_LOGOUT_SUCCESS,
  };
};
