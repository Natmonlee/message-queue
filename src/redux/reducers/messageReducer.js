const messageReducer = (state = [], action) => {
  switch (action.type) {
    case "message/add":
      return [...state, action.payload];
    case "message/remove":
      return [...state].filter((message) => message.id !== action.payload);
    case "message/sync":
      return [...action.payload];
    default:
      return [...state];
  }
};

export default messageReducer;
