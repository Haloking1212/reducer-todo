import React from "react";
import "./Todo.css";

export const Todo = props => {
    return (
        <div className={`${props.completed ? "completed" : ""}`}
        onClick={() => {
            props.markCompleted(props.id)
             console.log(props.completed,"testing line")
        }}>
            <p>{props.task}</p>
        </div>
    )
}