import React from 'react';
import { useReducer } from "react";
import { reducer, initalState } from "./reducers/TodoReducer";
import './App.css';

function App() {
  const [state, dispatch] = useReducer(reducer,initalState);
  return (
    <div className="App">

    </div>
  );
}

export default App;
