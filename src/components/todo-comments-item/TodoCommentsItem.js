import React from 'react';
import './TodoCommentsItem.css';

const TodoCommentsItem = ({comment}) => {
    return (
        <div className={'todo-comment'}>
                <div className="comment-item_icon"></div>
                <p className="comment-item_text">{comment}</p>
        </div>
    )
}

export default TodoCommentsItem;