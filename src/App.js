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

  onItemClicked(item) {
    return () => {
      const isComplete = item.isComplete;
      const {todoItems} = this.state;
      const index = todoItems.indexOf(item);
      
      this.setState(state => {
        console.log(item)
        return {
          todoItems: [
            ...todoItems.slice(0, index),
            {
              ...item, isComplete: !isComplete
            },
            ...todoItems.slice(index + 1)
          ]
        }
    });
  
    }
  // console.log(this.state.todoItems)
  }
  render() {
    return (
      <div className="App">
        { this.state.todoItems.length > 0
          ? this.state.todoItems.map((item, index) => <TodoItem key={index} item={item} onClick={this.onItemClicked(item)} />)
          : "There is nothing here"
        }

      </div>
    );
  }
}


export default App;
