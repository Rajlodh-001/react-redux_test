import "./App.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router";
// Store
// interface CounterState{
//   value:number;
// }

// interface UserState{
//   isSignedIn:boolean;
//   name:string;
//   age:number;
// }

// Actions
// const increment = {type :"increment" ,payload :1};
// const decrementByAmount = {type:"decrement ",payload :10};

// Reducer mutilibility
// cannot update state directly need to make a copy of the state
// update the copy  => then update the store



function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
