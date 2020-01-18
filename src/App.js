import React from 'react';
import './App.css';
import TodoItem from './components/TodoItem';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoItems: [
        {title: 'Go shopping', isComplete: false}, 
        {title: 'Eat dinner', isComplete: true},
        {title: 'Go to sleep', isComplete: true}
      ]
    }

  }

  onItemClicked(index) {
    this.setState(state => {
      const todoItems = state.todoItems;
      let itemToChange = todoItems[index]
      itemToChange.isComplete = !itemToChange.isComplete
      todoItems[index] = itemToChange
      
      console.log(this.state.todoItems[index])
      return {
        todoItems
      }
  });
  
  }
  render() {
    return (
      <div className="App">
        { this.state.todoItems.length > 0
          ? this.state.todoItems.map((item, index) => <TodoItem key={index} item={item} onClick={this.onItemClicked.bind(this, index)} />)
          : "There is nothing here"
        }

      </div>
    );
  }
}


export default App;
