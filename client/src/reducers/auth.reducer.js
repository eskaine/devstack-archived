const authReducer = (state = { token: false }, action) => {
  switch (action.type) {
    case "IS_AUTH":
      return action.payload;
    case "IS_NOT_AUTH":
      return { token: false };
    default:
      return state;
  }
};

export default authReducer;
