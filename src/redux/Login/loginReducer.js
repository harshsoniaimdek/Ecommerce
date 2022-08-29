import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { ACTION_TYPES } from "./loginAction";
import { toast } from "react-toastify";

const Initial_State = {
  userDetails: {},
};
export const loginReducer = (state = Initial_State, action) => {
  console.log("actionLogin:", action);
  switch (action.type) {
    case ACTION_TYPES.LOGIN_USER:
      return {
        ...state, //here we are returning the direct state
        userDetails: loginUser(state, action.payload),
      };
    default:
      return state;
  }
};

const loginUser = async (userDetails, payload) => {
  try {
    const auth = getAuth();
    const result = await signInWithEmailAndPassword(
      auth,
      payload.email,
      payload.password
    );
    localStorage.setItem("currentUser", JSON.stringify(result));
    toast.success("Login successfull");
    window.location.href = "/";
    return payload;
  } catch (err) {
    toast.error("Login failed");
  }
};
