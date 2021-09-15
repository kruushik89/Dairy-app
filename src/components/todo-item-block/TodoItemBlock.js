import React from 'react';
import './TodoItemBlock.css';
import Button from "../UI/button/Button";
import {NavLink} from "react-router-dom";

const TodoItemBlock = ({item, onDelete}) => {
    return (
        <div className={'todo-item__block'}>
            <NavLink to={{pathname: '/' +item.id, state: item}}>
                {item.title} <span>{item.comments.length}</span>
            </NavLink>
            <Button cls={'btn-delete'} click={() => onDelete(item.id)}>Delete</Button>
        </div>
    )
}

export default TodoItemBlock;