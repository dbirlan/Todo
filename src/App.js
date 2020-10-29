import { Component } from 'react';
import Todos from './components/Todos';

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Study File Structure',
        completed: false,
      },
      {
        id: 2,
        title: 'Create Component',
        completed: false,
      },
      {
        id: 3,
        title: 'Study State',
        completed: false,
      },
      {
        id: 4,
        title: 'Practice Code',
        completed: false,
      },
      {
        id: 5,
        title: 'Eat Dinner',
        completed: false,
      },
      {
        id: 6,
        title: 'Sleep',
        completed: false,
      },
    ],
  };

  // Toggle Complete
  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      }),
    });
  };

  //Delete Todo
  delTodo = (id) => {
    this.setState({
      todos: [...this.state.todos.filter((todo) => todo.id !== id)],
    });
  };
  render() {
    return (
      <div className="App">
        <Todos
          todos={this.state.todos}
          markComplete={this.markComplete}
          delTodo={this.delTodo}
        />
      </div>
    );
  }
}

export default App;
