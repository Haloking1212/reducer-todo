import React from 'react';
import { TodoForm } from "./components/TodoForm";
import { TodoList } from "./components/TodoList";
import { useReducer } from "react";
import { initialState, todoReducer } from "./reducers/TodoReducer"
import './App.css';

function App() {

  const [state, dispatch] = useReducer(todoReducer, initialState)

  return (
    <div className="App">
      <TodoForm dispatch={dispatch}/>
      <TodoList dispatch={dispatch} todos={state.todos}/>
    </div>
  );
}

export default App;