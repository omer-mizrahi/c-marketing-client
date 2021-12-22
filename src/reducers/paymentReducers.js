import {
  CREATE_PAYMENT_FAIL,
  CREATE_PAYMENT_REQUEST,
  CREATE_PAYMENT_SUCCESS,
} from "../constants/paymentConstants";
import {
  PRODUCT_DATA_FAIL,
  PRODUCT_DATA_REQUEST,
  PRODUCT_DATA_SUCCESS,
} from "../constants/productConstants";

export const paymentReducer = (state = { currentPayment: {} }, action) => {
  switch (action.type) {
    case CREATE_PAYMENT_REQUEST:
      return { loading: true, currentPayment: {} };
    case CREATE_PAYMENT_SUCCESS:
      return { loading: false, currentPayment: action.payload };
    case CREATE_PAYMENT_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
