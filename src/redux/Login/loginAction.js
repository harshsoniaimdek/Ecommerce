export const ACTION_TYPES = {
  LOGIN_USER: "LOGIN_USER",
};

export const loginUser = (data) => {
  return {
    type: ACTION_TYPES.LOGIN_USER,
    payload: data,
  };
};
