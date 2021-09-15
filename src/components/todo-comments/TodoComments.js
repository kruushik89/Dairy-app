import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";

import TodoCommentsItem from "../todo-comments-item/TodoCommentsItem";
import {ADD_COMMENT, COMMENT, FLAG} from "../../redux/action-type";
import HTag from "../HTag/HTag";

import './TodoComments.css';

const TodoComments = (props) => {
    const id = +props.match.params.id
    const {commentsTodo, reducerFlag} = useSelector(state => state);
    const dispatch = useDispatch();
    const [area, setArea] = useState('');
    const onChangeArea = ({target: {value}}) => setArea(value);
    const [flag, setFlag] = useState(false);
    const onSubmit = () => {
        dispatch({type: ADD_COMMENT, id, comment: area})
        dispatch({type: FLAG})
        setFlag(!flag);
        setArea('');
    }

    useEffect(() =>{
        dispatch({type: COMMENT, id})
    }, [id])

    const onEnterPress = (e) => {
        if(e.keyCode == 13 && e.shiftKey == false) {
            e.preventDefault();
            onSubmit();
        }
    }

    return (
        <div className={'todo-comments'}>
            <HTag tag={'h2'}>Comments #{props.match.params.id}</HTag>
            <div className="todo-comment-grid">
                {commentsTodo.comments && commentsTodo.comments.map((value, i) => <TodoCommentsItem key={i} comment={value}/>)}
            </div>
            <form onKeyDown={onEnterPress}>
                <textarea value={area} onChange={onChangeArea} cols="30" rows="10"/>
            </form>
        </div>
    )
}

export default TodoComments;