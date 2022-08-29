import { createUserWithEmailAndPassword } from "firebase/auth";
import { ACTION_TYPES } from "./registerAction";
import { toast } from "react-toastify";

const Initial_State = {
  userDetails: {},
};
export const registerReducer = (state = Initial_State, action) => {
  switch (action.type) {
    case ACTION_TYPES.REGISTER_USER:
      return {
        ...state, //here we are returning the direct state
        userDetails: addUser(state, action.payload),
      };
    default:
      return state;
  }
};

const addUser = async (userDetails, payload) => {
  try {
    await createUserWithEmailAndPassword(
      payload.auth,
      payload.email,
      payload.password
    );
    toast.success("Registration successfull");
    return payload;
  } catch (err) {
    toast.error("Registration failed");
  }
};
