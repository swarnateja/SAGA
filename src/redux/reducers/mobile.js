const initialState = {
  numOfMobiles: 10,
  users: []
};

export const mobileReducer = (state = initialState, action) => {
  switch (action.type) {
    case "BUY_MOBILE_SUCCESS":
      return { ...state, numOfMobiles: state.numOfMobiles + 1 };
    case "SELL_MOBILE_SUCCESS":
      return { ...state, numOfMobiles: state.numOfMobiles - 1 };
    case "GET_ALL_USERS_SUCCESS":
      return { ...state, users: action.data };
    case "GET_ALL_USERS_FAILED":
      return { ...state };
    default:
      return state;
  }
};
