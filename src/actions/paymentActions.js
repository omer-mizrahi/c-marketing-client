import axios from "axios";
import {
  CREATE_PAYMENT_FAIL,
  CREATE_PAYMENT_REQUEST,
  CREATE_PAYMENT_SUCCESS,
} from "../constants/paymentConstants";
import { api_base_url } from "../config";

// export const processPayment = () => async (dispatch) => {
//   const { data } = await axios.post(`api/createPayment`);
//   console.log(data);
// };

export const processPayment = async () => {
  const data = await axios.post(`api/createPayment`);

  console.log("data", data);
  return data;
};

// export const processPayment = () => async (dispatch) => {
//   dispatch({
//     type: CREATE_PAYMENT_REQUEST,
//   });
//   try {
//     // const { data } = await axios.post(`/api/orders`, newOrder);

//     dispatch({
//       type: CREATE_PAYMENT_SUCCESS,
//     });
//   } catch (error) {
//     dispatch({
//       type: CREATE_PAYMENT_FAIL,
//       payload: error.message,
//     });
//   }
// };
