import React from "react";
import { useState } from "react";

export const TodoForm = ({ dispatch }) => {

    const [input, setInput] = useState("");

    const submitHandler = event => {
        event.preventDefault();
        dispatch({
            type: "ADD_TODO",
            payload: {
                task: input,
                completed: false,
                id: Date.now()
            }
        })
    }

    return (
        <div className="todo-form">
            <form onSubmit={submitHandler}>
                <input 
                    type="text"
                    name="task"
                    placeholder="Add Task"
                    onChange={({target}) => {
                        setInput(target.value)
                    }}/>

                <button type="submit">Submit Todo</button>
            </form>
        </div>
    );
}