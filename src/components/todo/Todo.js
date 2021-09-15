import React from 'react';
import './Todo.css';
import TodoItem from "../todoItem/TodoItem";
import TodoComments from "../todo-comments/TodoComments";
import {Route, Switch} from "react-router-dom";

const Todo = () => {
    return (
        <div className={'todo '}>
            <TodoItem/>
            <Switch>
                <Route exact path={'/:id'} component={TodoComments}/>
            </Switch>
        </div>
    )
}

export default Todo;