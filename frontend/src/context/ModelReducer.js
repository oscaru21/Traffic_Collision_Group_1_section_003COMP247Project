const modelReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_VALUE":
      return { ...state, [action.payload.property]: action.payload.value };
    default:
      return state;
  }
};

export default modelReducer;
