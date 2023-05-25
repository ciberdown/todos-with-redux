const initial_value = [{ todo: "somthing to do", id: 1123 }];

const TodoReducer = (state = { todo_array: initial_value }, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return { todo_array: action.payload };
    case "REMOVE_TODO":
      return { todo_array: action.payload };
    default:
      return state;
  }
};
export default TodoReducer;



