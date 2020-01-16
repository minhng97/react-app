import React, {Component} from 'react';
import './TodoItem.css';
var classname = require('classname');
class TodoItem extends Component {
    render() {
        const {item} = this.props;
        let className = classname({
            'TodoItem': true,
            'TodoItem-complete': item.isComplete
        });

        return (
            <div className={className}>
                <p> { item.title } </p>
            </div>
        )
    }
}


export default TodoItem;