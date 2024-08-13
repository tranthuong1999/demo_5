import { ADD_TODO, REMOVE_TODO, SET_TODOS, TodoActionTypes, Todo } from './actions';

export interface TodoState {
    todos: Todo[];
}

const initialState: TodoState = {
    todos: [],
};

const todoReducer = (state = initialState, action: TodoActionTypes): TodoState => {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, action.payload],
            };
        case REMOVE_TODO:
            return {
                ...state,
                todos: state.todos.filter((todo) => todo.id !== action.payload),
            };
        case SET_TODOS:
            return {
                ...state,
                todos: action.payload,
            };
        default:
            return state;
    }
};

export default todoReducer;
