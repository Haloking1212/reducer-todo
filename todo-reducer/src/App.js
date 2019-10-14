import React from 'react';
import { useReducer } from "react";
import { reducer, initalState } from "./reducers/TodoReducer";
import Todo from "./component/Todo";
import './App.css';

function App() {
  const [state, dispatch] = useReducer(reducer,initalState);
  return (
    <div className="App">
      <Todo dispatch={dispatch} state={state}/>
    </div>
  );
}

export default App;
