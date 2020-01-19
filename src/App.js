import React from 'react';
import './App.css';
import TodoItem from './components/TodoItem';
import tick from './img/tick.svg';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoItems: [
        { title: 'Go shopping', isComplete: false },
        { title: 'Eat dinner', isComplete: true },
        { title: 'Go to sleep', isComplete: true }
      ]
    }

    this.onKeyUp = this.onKeyUp.bind(this);
  }

  onItemClicked(item) {
    return () => {
      const isComplete = item.isComplete;
      const { todoItems } = this.state;
      const index = todoItems.indexOf(item);

      this.setState({
        todoItems: [
          ...todoItems.slice(0, index),
          {
            ...item, isComplete: !isComplete
          },
          ...todoItems.slice(index + 1)
        ]
      });
    }


  }
  onKeyUp(event) {
    if (event.keyCode === 13) { // ENTER key
      let text = event.target.value;

      if (!text) { return };

      text = text.trim();
      if (!text) { return };

      this.setState({
        todoItems: [
          { title: text, isComplete: false },
          ...this.state.todoItems ]
      })

      event.target.value ='';
    }
  }

  render() {
    return (
      <div className="App">
        <div className="Header">
          <img src={tick} width="32" height="32" alt="create" onClick={() => this.onKeyUp} />
          <input type="text" placeholder="Add a new item" onKeyUp={this.onKeyUp} />
        </div>
        {this.state.todoItems.length > 0
          ? this.state.todoItems.map((item, index) =>
            <TodoItem key={index} item={item} onClick={this.onItemClicked(item)} />)
          : "There is nothing here"
        }

      </div>
    );
  }
}


export default App;
