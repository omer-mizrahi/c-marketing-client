import axios from "axios";
import {
  PRODUCT_DATA_FAIL,
  PRODUCT_DATA_REQUEST,
  PRODUCT_DATA_SUCCESS,
} from "../constants/productConstants";

export const saveProductData = (data) => (dispatch) => {
  dispatch({
    type: PRODUCT_DATA_REQUEST,
  });
  try {
    dispatch({
      type: PRODUCT_DATA_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_DATA_FAIL,
      payload: error.message,
    });
  }
};
