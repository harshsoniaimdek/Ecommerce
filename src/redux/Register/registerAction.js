export const ACTION_TYPES = {
  REGISTER_USER: "REGISTER_USER",
};

export const registerUser = (data) => {
  return {
    type: ACTION_TYPES.REGISTER_USER,
    payload: data,
  };
};
