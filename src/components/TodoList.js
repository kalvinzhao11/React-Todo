// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React, {Component} from 'react'
import Todo from './Todo'

class TodoList extends Component {

    constructor() {
        super()
        this.state = {
          searchFilter: ''
        }
      }
    changeSearchFilter = (event) => {
        this.setState({searchFilter: event.target.value})
    }


    render(){
        const filter = this.props.todo.filter( results => {
            return results.task.indexOf(this.state.searchFilter) !== -1
        })
        return (
            <div>
                <label>Search Todo List: </label>
                <input
                    type='text'
                    name='searchFilter'
                    placeholder='Filter'
                    value={this.state.searchFilter}
                    onChange={this.changeSearchFilter}>    
                    </input>
                {filter.map(item => (
                    <Todo key={item.id} todoItem={item} toggleCompleted={this.props.toggleCompleted}/>
                ))}
            </div>
        )
    }
}
// const TodoList = (props) => {
//     const {todo} = props
//     return (
//         <div>
//             {todo.map(item => (
//                 <Todo key={item.id} todoItem={item}/>
//             ))}
//         </div>
//     )
// }

export default TodoList