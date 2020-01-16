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
        
          {
            this.todoItems.map((item, index) => (
              <TodoItem key={index} item={item} />
    ))
          }

      </div>
    );
  }
}
// function App() {
 
// }

export default App;
