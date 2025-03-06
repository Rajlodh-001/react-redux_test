import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface todoState {
  todos: Todo[];
}
const initialState: todoState = {
  todos: [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      const newTodo: Todo = {
        id: state.todos.length, // Index as ID
        text: action.payload,
        completed: false,
      };
      state.todos.push(newTodo);
    },

    deleteTodo: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },

    toggleTodo: (state, action: PayloadAction<number>) => {
      const index = action.payload;
      if (index<state.todos.length){
        state.todos[index].completed =!state.todos[index].completed
      }
    },
  },
});

export const { addTodo, deleteTodo,toggleTodo } = todoSlice.actions;

export default todoSlice.reducer;