import React from 'react';
import './App.css';
import TodoItem from './components/TodoItem';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.todoItems = [
      'Go shopping', 'Eat dinner', 'Go to sleep'
    ];
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
        
          {
            this.todoItems.map((item, index) => (
              <TodoItem key={index} title={item} />
    ))
          }

  </header>
      </div>
    );
  }
}
// function App() {
 
// }

export default App;
