export const addMessage = (text, id) => {
  return (dispatch) => {
    dispatch({
      type: "message/add",
      payload: {
        text: text,
        id: id,
      },
    });

    setTimeout(() => {
      dispatch(removeMessage(id));
    }, 5000);
  };
};

export const removeMessage = (id) => {
  return {
    type: "message/remove",
    payload: id,
  };
};

export const syncMessages = (messages) => {
  return (dispatch) => {
    dispatch({
      type: "message/sync",
      payload: messages,
    });
  };
};
