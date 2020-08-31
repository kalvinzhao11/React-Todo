// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React, {Component} from 'react'
import Todo from './Todo'
// class TodoList extends Component {
    
//     constructor() {
//         super()
        
//     }
//     render(){
//         return {

//         }
//     }
// }
const TodoList = (props) => {
    const {todo} = props
    return (
        <div>
            <p>hi</p>
            {todo.map(item => (
                <Todo key={item.id} todoItem={item}/>
            ))}
        </div>
    )
}

export default TodoList