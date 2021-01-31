//functional component

import React from 'react'

const Todo = props =>{

    return (

        <div className="todo">
        <div>{props.todo.task}</div>
        </div>

    )

 


}

export default Todo
