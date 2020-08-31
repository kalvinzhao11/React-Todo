import React, {Component} from 'react';
import TodoList from './components/TodoList'

const todoInitial = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];

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
  // submit button
  addItem = (item) => {
    const toBeAdded = {
      task: item,
      id: new Date(),
      completed: false
    }
    this.setState({...this.state.todo, toBeAdded})
  }

  // clear button
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList todo={this.state.todo}/>
      </div>
    );
  }
}

export default App;
