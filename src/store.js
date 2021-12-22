import { applyMiddleware, combineReducers } from "redux";
import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { paymentReducer } from "./reducers/paymentReducers";
import { productReducer } from "./reducers/productReducers";

const reducer = combineReducers({
  productState: productReducer,
  paymentState: paymentReducer,
});

const middleware = [thunk];

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
