import { useState } from "react";
import "./todolist.css";
import { useDispatch, useSelector } from "react-redux";

import { AppDispatch, RootState } from "../state/store";
import { addTodo, deleteTodo, toggleTodo } from "../state/todo/todoSlice";

const TodoList = () => {
  const [input, setInput] = useState("");

  // const todos = useSelector ((state: RootState)=>state.todo.todos);
  const todos = useSelector((state: RootState) => state.todo.todos);
  const dispatch = useDispatch<AppDispatch>();

  const addNewTodo = () => {
    if (input.trim()) {
      dispatch(addTodo(input));
      setInput("");
    }

  };

  return (
    <div className="todo-container">
      <h1>To-Do List / Redux</h1>
      <input
      value={input}
        onChange={(e) => (
          setInput(e.target.value)
        )}
        type="text"
        className="todo-input"
        placeholder="Add a task..."
      />
      <button className="add-btn" onClick={addNewTodo}>
        Add
      </button>

      <ul className="todo-list">
        {todos?.map((todo) => (
          <li key={todo.id} className="todo-item">
            <span>{todo.text}</span>
            <button
              className="toggle-btn"
              style={{
                backgroundColor: todo.completed ? "#56d5df" : "#34e492",
              }}
              onClick={() => dispatch(toggleTodo(todo.id))}
            >
              {todo.completed ? "Undo" : "Complete"}
            </button>
            <button
              className="delete-btn"
              onClick={() => dispatch(deleteTodo(todo.id))}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
