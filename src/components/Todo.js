import React, { Component } from 'react'
import './Todo.css'
// const Todo = (props) => {
//     console.log(props.todoItem)
//     return (
//         <div className={props.todoItem}>
//             <p>{props.todoItem.task}</p>
//         </div>
//     )
// }

class Todo extends Component{
    render(){
        return (
            <div className={this.props.todoItem.completed ? 'completed' : ''}>
                <p>{this.props.todoItem.task}</p>
            </div>
        )
    }
}

export default Todo