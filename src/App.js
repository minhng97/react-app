import React from 'react';
import './App.css';
import TodoItem from './components/TodoItem';
import tick from './img/tick.svg';

const ACTIVE = 'active';
const COMPLETED = 'completed';
const ENTER_KEY = 13;

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
    this.changeFilter = this.changeFilter.bind(this);
    this.checkAll = this.checkAll.bind(this);
  }

  onItemClicked(item) {
    return () => {
      const { isComplete } = item;
      const { todoItems } = this.state;
      const index = todoItems.indexOf(item);

      this.setState({
        currentFilter: 'all',
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
    if (event.keyCode === ENTER_KEY) {
      let text = event.target.value;

      text = text.trim();
      if (!text) { return };

      this.setState({
        todoItems: [
          { title: text, isComplete: false },
          ...this.state.todoItems]
      })

      event.target.value = '';
    }
  }

  changeFilter(filter) {
    this.setState({
      currentFilter: filter
    })
  }

  checkAll() {
    let { todoItems } = this.state;
    const COMPLETED = true;

    let check = todoItems.every(item => item.isComplete === COMPLETED);
    switch (check) {
      case (true):
        todoItems = todoItems.map(item => item = Object.assign({}, item, { isComplete: false }))
        break;
      default:
        todoItems = todoItems.map(item => item = Object.assign({}, item, { isComplete: true }));
    }

    this.setState({
      todoItems: [
        ...todoItems
      ]
    })
  }

  render() {
    let { todoItems, currentFilter } = this.state;

    switch (currentFilter) {
      case (ACTIVE):
        todoItems = todoItems.filter(item => item.isComplete === false);
        break;
      case (COMPLETED):
        todoItems = todoItems.filter(item => item.isComplete === true);
        break;
      default:
    }

    return (
      <div className="App">
        <div className="Header">

          <img src={tick} width="32" height="32"
            alt="create"
            onClick={this.checkAll}
          />

          <input type="text"
            placeholder="Add a new item"
            onKeyUp={this.onKeyUp}
          />

        </div>

        <input type="button"
          onClick={() => this.changeFilter('all')} value="all" />
        <input type="button"
          onClick={() => this.changeFilter('active')} value="active" />
        <input type="button"
          onClick={() => this.changeFilter('completed')} value="completed" />

        {todoItems.length > 0
          ? todoItems.map((item, index) =>
            <TodoItem key={index} item={item} onClick={this.onItemClicked(item)} />)
          : "There is nothing here"
        }

      </div>
    );
  }
}


export default App;
