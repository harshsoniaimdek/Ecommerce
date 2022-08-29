//THis rootreducer is made to manage all child reducers for example cartReducer and authReducer

import { combineReducers } from "redux";
import { cartReducer } from "./cartReducer";
import { registerReducer } from "./Register/registerReducer";
import { loginReducer } from "./Login/loginReducer";
const rootReducer = combineReducers({
  //Define a top level named "cartReducer", handeled by cartReducer& here cartReducer is the key and cartReducer is the value
  cartReducer: cartReducer,
  registerReducer: registerReducer,
  loginReducer: loginReducer,
});

export default rootReducer;
