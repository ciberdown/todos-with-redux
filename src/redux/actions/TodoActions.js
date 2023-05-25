export const AddTodoAction = (todoString) => (dispatch, getState) => {
  //with Redux-thunk nested arrow functions
  const { Todo: thisState } = getState();

  const rnd = Math.floor(Math.random() * 10000);

  if (clear_space_str(todoString) !== "")
    dispatch({
      type: "ADD_TODO",
      payload: [{ id: rnd, todo: clear_space_str }, ...thisState.todo_array],
    });
};
export const RemoveTodoAction = (id) => (dispatch, getState) => {
  const { Todo: thisState } = getState();

  dispatch({
    type: "REMOVE_TODO",
    payload: thisState.todo_array.filter((item) => {
      return item.id !== id;
    }),
  });
};

const clear_space_str = (str) => {
  return str.replace(/\s/g, "");
};
