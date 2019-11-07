import React from "react";
import { Todo } from "./Todo";

export const TodoList = ({ dispatch, todos }) => {
  const markCompleted = id => {
    dispatch({
      type: "MARK_COMPLETED",
      payload: id
    });
  };

  return (
    <div className="todo-list">
      <button
        onClick={() => {
          dispatch({
            type: "CLEAR_COMPLETED"
          });
        }}
      >
        Clear Completed
      </button>
      {todos.map(todo => {
        return <Todo key={todo.id} markCompleted={markCompleted} {...todo} />;
      })}
    </div>
  );
};
