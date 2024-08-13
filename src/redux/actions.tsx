export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const FETCH_TODOS = 'FETCH_TODOS';
export const SET_TODOS = 'SET_TODOS';

export interface Todo {
    id: number;
    text: string;
}

export interface AddTodoAction {
    type: typeof ADD_TODO;
    payload: Todo;
}

export interface RemoveTodoAction {
    type: typeof REMOVE_TODO;
    payload: number;
}

export interface FetchTodosAction {
    type: typeof FETCH_TODOS;
}

export interface SetTodosAction {
    type: typeof SET_TODOS;
    payload: Todo[];
}

export type TodoActionTypes = AddTodoAction | RemoveTodoAction | FetchTodosAction | SetTodosAction;

export const addTodo = (todo: Todo): AddTodoAction => ({
    type: ADD_TODO,
    payload: todo,
});

export const removeTodo = (id: number): RemoveTodoAction => ({
    type: REMOVE_TODO,
    payload: id,
});

export const fetchTodos = (): FetchTodosAction => ({
    type: FETCH_TODOS,
});

export const setTodos = (todos: Todo[]): SetTodosAction => ({
    type: SET_TODOS,
    payload: todos,
});
