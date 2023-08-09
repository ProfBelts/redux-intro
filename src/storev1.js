import { applyMiddleware, combineReducers, createStore } from "redux";
import accountReducer from "./features/accounts/accountsSlice";
import customerReducer from "./features/customers/customersSlice";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;

// store.dispatch({ type: "account/deposit", payload: 500 });
// store.dispatch({ type: "account/withdraw", payload: 200 });
// console.log(store.getState());

// store.dispatch({
//   type: "account/requestLoan",
//   payload: {
//     amount: 1000,
//     purpose: "Buy a phone",
//   },
// });

// console.log(store.getState());

// store.dispatch({ type: "account/payLoan" });

// console.log(store.getState());
