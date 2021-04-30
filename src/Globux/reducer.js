export default (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "INCREMENT":
      return Object.assign({}, state, {
        count: state.count + payload,
      });
    case "DECREMENT":
      return Object.assign({}, state, {
        count: state.count - 1,
      });
    default:
      return state;
  }
};
