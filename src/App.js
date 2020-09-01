import React, {Component} from 'react';
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'

const todoInitial = [];

class App extends Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super()
    this.state = {
      todo: todoInitial,
    }
  }

  componentDidMount() {
    const data = localStorage.getItem('todo-list')
    if (data) {
      this.setState({todo: JSON.parse(data)})
    }
  }

  componentDidUpdate() {
    localStorage.setItem('todo-list',JSON.stringify(this.state.todo))
  }

  // submit button
  addTask = (item) => {
    const toBeAdded = {
      task: item,
      id: Date.now(),
      completed: false
    }
    this.setState({
      todo: [...this.state.todo, toBeAdded]
    })
  }

  // clear button
  clearCompletedTask = () => {
    this.setState({
      todo: this.state.todo.filter(item => {
         return item.completed === false
      })
    })
  }

  // toggle completed
  toggleCompleted = (clickedID) => {
    this.setState({
      todo: this.state.todo.map(item=>{
        if (item.id === clickedID) {
          return {...item, completed: !item.completed}
        } else {
          return item
        }
      })
    })
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList todo={this.state.todo} toggleCompleted={this.toggleCompleted}/>
        <TodoForm addTask={this.addTask} clearCompletedTask={this.clearCompletedTask}/>
      </div>
    );
  }
}

export default App;
