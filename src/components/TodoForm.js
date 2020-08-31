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

    clearComplete = (event) => {
        event.preventDefault()
        this.props.clearCompletedTask()
    }

    render(){
        return (
            <form onSubmit={this.addTodo}>
                <input 
                    type='text' 
                    name='task'
                    value={this.state.task}
                    onChange={this.addTask}>
                </input>
                <button >Add Todo</button>
                <button onClick={this.clearComplete}>Clear Completed</button>
            </form>
        )
    }
}

export default ToDoForm