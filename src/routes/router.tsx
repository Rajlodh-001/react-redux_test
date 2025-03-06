import { createBrowserRouter } from "react-router-dom";
import Counter from "../pages/Counter";
import TodoList from "../pages/Todolist";
import Home from "../components/Home";

export const router = createBrowserRouter([
  {
    path: "/redux-react-router/",
    element: <Home />,
  },
  {
    path: "/redux-react-router/counter",
    element: <Counter />,
  },
  {
    path: "/redux-react-router/todolist",
    element: <TodoList />,
  },
]);
