const routeReducer = (state = null, action) => {
    switch (action.type) {
      case "ADD_ROUTE":
        return action.payload;
      case "REMOVE_ROUTE":
        return null;
      default:
        return state;
    }
  };
  
  export default routeReducer;
  