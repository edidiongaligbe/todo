import React, { Component } from 'react';
import Todos from './Todos';
import AddTodo from './AddTodo';



class App extends Component {
  state = {
    todos: [
      { id: 1, content: "buy milk" },
      { id: 2, content: "build app" },
      { id: 3, content: "exercise" },
    ],
  };
  deleteTodo = (id) => {
    //filter thru the todos object and return the ones that the id dont match
    //the selected id
    const remainingTodos = this.state.todos.filter((todo) => {
      return todo.id !== id;
    });
    this.setState({ todos: remainingTodos });
  };

  addTodo = (newTodoItem) => {
    //newTodoItem already has 'content' item, create 'id' item
    newTodoItem.id = Math.random();
    let newtodos = [...this.state.todos, newTodoItem];
    this.setState({ todos: newtodos });
    console.log(newtodos);
  };

  render() {
    return (
      <div className="App container">
        <h1 className="center blue-text"> Todo's</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
        <AddTodo addTodo={this.addTodo}/>
      </div>
    );
  }
}

export default App;
