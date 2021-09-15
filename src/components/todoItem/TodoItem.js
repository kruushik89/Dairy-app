import React, {useEffect, useState} from 'react';
import TodoItemBlock from "../todo-item-block/TodoItemBlock";

import HTag from "../HTag/HTag";
import Button from "../UI/button/Button";

import './TodoItem.css';
import {useDispatch, useSelector} from "react-redux";
import {ADD_TODO, DELETE_TODO, SHOW_TODO} from "../../redux/action-type";

const TodoItem = () => {
    const {todo} = useSelector(state => state);
    const dispatch = useDispatch();
    const [inputValue, setInputValue] = useState('');
    const onInputValue = ({target: {value}}) => setInputValue(value);

    const item = localStorage.getItem('arr');
    const arr = item && item.length ? JSON.parse(item) : [];

    useEffect(() => {
        dispatch({type: SHOW_TODO, payload: arr})
    }, [])

    const formSubmit = (e) => {
        e.preventDefault();
        const obj = {title: inputValue, id: Math.random(), comments: []};
        arr.push(obj);
        localStorage.setItem('arr', JSON.stringify(arr));
        dispatch({type: ADD_TODO, payload: obj});
    }

    const onDelete = id => dispatch({type: DELETE_TODO, id})

    return (
        <div className={'todo-item'}>
            <HTag tag={'h2'}>Items</HTag>

            <form className="add-item__form" onSubmit={formSubmit}>
                <input type="text" placeholder={'Type name here...'} value={inputValue} onChange={onInputValue}/>
                <Button cls={'btn-add'} click={formSubmit}>Add new</Button>
            </form>

            <div className="todo_block">
                {/*{todoArr.map(value => <TodoItemBlock key={value.id} item={value} onDelete={onDelete}/>)}*/}
                {todo.map(value => <TodoItemBlock key={value.id} item={value} onDelete={onDelete}/>)}
            </div>
        </div>
    )
}

export default TodoItem;