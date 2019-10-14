import React, { useState } from "react";

export default function AddTodo (props) {
    // console.log("inside addtodo.js",props)
    const [addTodo, setAddTodo] = useState("")
    
    return (
        <div>
            <input />
            <button>Add Todo</button>
        </div>
    )
}