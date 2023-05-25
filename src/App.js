import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddTodoAction, RemoveTodoAction } from "./redux/actions/TodoActions";
import { NextAction, PrevAction } from "./redux/actions/PageNumberActions";
export default function App() {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");

  const state = useSelector((state) => state); //{Todo: {…}, Page_Number: {…}}
  const handleClick = (e) => {
    e.preventDefault();
    dispatch(AddTodoAction(value)); //setTodo([value, ...todo]);
    setValue("");
  };
  const handleDelete = (id) => {
    dispatch(RemoveTodoAction(id));
    // setTodo(todo.filter((item, index)=>{
    //   return idx !== index
    // }))
  };
  const handleNextPage = () => {
    dispatch(NextAction());
  };
  const handlePrevPage = () => {
    dispatch(PrevAction());
  };
  return (
    <div className="App">
      todolist app in Redux
      <form onSubmit={handleClick}>
        <input
          onChange={(e) => {
            setValue(e.target.value);
          }}
          value={value}
          placeholder="enter a todo"
        />
        <button type="submit">Go</button>
      </form>
      <div>
        <ul>
          {state.Todo.todo_array.map((item) => {
            return (
              <li key={item.id} style={{ display: "flex", gap: "5px" }}>
                <button onClick={() => handleDelete(item.id)}>Delete</button>
                <p>{item.todo}</p>
              </li>
            );
          })}
        </ul>
        <div className="pager">
          <button onClick={handleNextPage}>next</button>
          <p>{state.Page_Number.page_number}</p>
          <button onClick={handlePrevPage}>prev</button>
        </div>
      </div>
    </div>
  );
}
