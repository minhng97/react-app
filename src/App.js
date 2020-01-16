import React from 'react';
import './App.css';
import TodoItem from './components/TodoItem';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.todoItems = [
      {title: 'Go shopping', isComplete: false}, 
      {title: 'Eat dinner', isComplete: true},
      {title: 'Go to sleep', isComplete: true}
    ];
  }
  render() {
    return (
      <div className="App">
        { this.todoItems.length > 0
          ? this.todoItems.map((item, index) => <TodoItem key={index} item={item} />)
          : "There is nothing here"
        }
          {/* {
            this.todoItems.length > 0 && this.todoItems.map((item, index) => (
              <TodoItem key={index} item={item} />
    ))
          }

          {
            this.todoItems.length === 0 && <div className="App">Nothing Here</div>
          } */}
      </div>
    );
  }
}
// function App() {
 
// }

export default App;
