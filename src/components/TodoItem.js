import React, {Component} from 'react';
import './TodoItem.css';
import checkImg from '../img/check.svg';
import checkCompleteImg from '../img/check-complete.svg';
var classname = require('classname');


class TodoItem extends Component {
    render() {
        const { item, onClick } = this.props;
        let url = checkImg;
        if (item.isComplete) { url = checkCompleteImg };
        let className = classname({
            'TodoItem': true,
            'TodoItem-complete': item.isComplete
        });

        return (
            <div className={className}>
                <img onClick={onClick} src={url} alt="checkimg" width="32" height="32" />
                <p> { item.title } </p>
            </div>
        )
    }
}


export default TodoItem;