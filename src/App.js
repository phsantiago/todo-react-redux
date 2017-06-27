import React, { Component } from 'react';
import NewTodo from './todo/NewTodo'
import ViewTodos from './containers/ViewTodos'

class App extends Component {
  render() {
    return (
        <div>
            <NewTodo></NewTodo>
            <ViewTodos></ViewTodos>
        </div>
    );
  }
}

export default App;
