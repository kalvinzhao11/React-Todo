import React from 'react'

const Todo = (props) => {
    return (
        <div>
            <p>{props.todoItem.task}</p>
        </div>
    )
}

export default Todo