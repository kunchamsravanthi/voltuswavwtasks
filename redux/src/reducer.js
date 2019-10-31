export default (state, action) => ({
    count: countReducer(state.count, action),
    things: thingsReducer(state.things, action),
  });
  
  function countReducer(state, action) {
    switch (action.type) {
      case 'INCREMENT':
        return state + 1;
      case 'DECREMENT':
        return state - 1;
      default:
        return state;
    }
  }
  
  function thingsReducer(state, action) {
    switch (action.type) {
      case 'ADD_THING':
        return [...state, action.payload];
      default:
        return state;
    }
  }