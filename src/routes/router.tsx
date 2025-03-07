import { createBrowserRouter } from "react-router-dom";
import Counter from "../pages/Counter";
import TodoList from "../pages/Todolist";
import Home from "../components/Home";

export const router = createBrowserRouter([
  {
    path: "/react-redux_test/",
    element: <Home />,
  },
  {
    path: "/react-redux_test/counter",
    element: <Counter />,
  },
  {
    path: "/react-redux_test/todolist",
    element: <TodoList />,
  },
]);
