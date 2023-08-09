import accountReducer from "./features/accounts/accountsSlice";
import customerReducer from "./features/customers/customersSlice";

import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    account: accountReducer,
    customer: customerReducer,
  },
});

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
