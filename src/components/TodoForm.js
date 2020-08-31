import React, { Component } from 'react'

class ToDoForm extends Component  {
    constructor() {
        super()
        this.state = {
            task: ''
        }
    }
    addTask = (event) => {
        this.setState({task: event.target.value})
    }
    addTodo = (event) => {
        event.preventDefault()
        this.props.addTask(this.state.task)
        this.setState({task: ''})
    }

    clearComplete = () => {

    }

    render(){
        return (
            <div>
                <input 
                    type='text' 
                    name='task'
                    value={this.state.task}
                    onChange={this.addTask}>
                </input>
                <button onClick={this.addTodo}>Add Todo</button>
                <button onClick={this.clearComplete}>Clear Completed</button>
            </div>
        )
    }
}

export default ToDoForm