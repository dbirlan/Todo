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
    ],
  };
  render() {
    return (
      <div className="App">
        <Todos todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
