import React from "react";
import AddTodo from "./AddTodo";
// import TodoList from "./TodoList";




export default function Todo(props) {
  // console.log(props)
    return (
        <div>
          <h1>Todo List</h1>
          <AddTodo dispatch={props.dispatch} />
          {/* <TodoList /> */}
        </div>
    )
}