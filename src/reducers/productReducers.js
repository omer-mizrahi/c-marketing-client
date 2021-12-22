import {
  PRODUCT_DATA_FAIL,
  PRODUCT_DATA_REQUEST,
  PRODUCT_DATA_SUCCESS,
} from "../constants/productConstants";

export const productReducer = (state = { product: {} }, action) => {
  switch (action.type) {
    case PRODUCT_DATA_REQUEST:
      return { loading: true, product: {} };
    case PRODUCT_DATA_SUCCESS:
      return { loading: false, product: action.payload };
    case PRODUCT_DATA_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
