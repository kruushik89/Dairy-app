import {ADD_COMMENT, ADD_TODO, COMMENT, DELETE_TODO, SHOW_TODO, FLAG} from "../action-type";

const initialValue = {
    todo: [],
    commentsTodo: {},
    reducerFlag: false
}

export const todoReducer = (state = initialValue, action) => {
    switch (action.type) {
        case COMMENT:
            let findItem = state.todo.find(value => value.id === action.id);
            return {...state, commentsTodo: findItem}
        case SHOW_TODO:
            return {...state, todo: action.payload}
        case ADD_TODO:
            return {...state, todo: [...state.todo, action.payload]}
        case DELETE_TODO:
            const newVar = {todo: state.todo.filter(value => value.id !== action.id)};
            localStorage.setItem('arr', JSON.stringify(newVar.todo));
            return  newVar;
        case ADD_COMMENT:
            const find = state.todo.find(value => value.id === action.id);
            find.comments = [...find.comments, action.comment]
            localStorage.setItem('arr', JSON.stringify(state.todo));
            return state;
        case FLAG:
            return {...state, reducerFlag: !state.reducerFlag};
        default:
            return state;
    }
}