import axios from "axios";
import {
  CREATE_PAYMENT_FAIL,
  CREATE_PAYMENT_REQUEST,
  CREATE_PAYMENT_SUCCESS,
  PAYMENT_URL_FAIL,
  PAYMENT_URL_REQUEST,
  PAYMENT_URL_SUCCESS,
} from "../constants/paymentConstants";
import { api_base_url } from "../config";

// export const processPayment = () => async (dispatch) => {
//   const { data } = await axios.post(`api/createPayment`);
//   console.log(data);
// };

// export const processPayment = async () => {
//   const data = await axios.post(`api/createPayment`);

//   console.log("data", data);
//   return data;
// };

export const processPayment = (bodyData) => async (dispatch) => {
  dispatch({
    type: CREATE_PAYMENT_REQUEST,
  });

  try {
    // const { data } = await axios.post(`/api/orders`, newOrder);
    const { data } = await axios.post(`/api/createPayment`, bodyData);

    dispatch({
      type: CREATE_PAYMENT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: CREATE_PAYMENT_FAIL,
      payload: error.message,
    });
  }
};

// export const saveUrlPayment = async (url) => (dispatch) => {
//   dispatch({
//     type: PAYMENT_URL_REQUEST,
//   });
//   try {
//     dispatch({
//       type: PAYMENT_URL_SUCCESS,
//       payload: url,
//     });
//   } catch (error) {
//     dispatch({
//       type: PAYMENT_URL_FAIL,
//       payload: error.message,
//     });
//   }
// };
