import { createBrowserRouter } from "react-router-dom";
import Counter from "../pages/Counter";
import TodoList from "../pages/Todolist";
import Home from "../components/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/counter",
    element: <Counter />,
  },
  {
    path: "/todolist",
    element: <TodoList />,
  },
],
{ basename: "/react-redux_test" }
);
