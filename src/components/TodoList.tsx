import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, removeTodo, fetchTodos, Todo } from '../redux/actions';
import { TodoState } from '../redux/reducer';
import TodoItem from './TodoItem';

const TodoList: React.FC = () => {
    const todos = useSelector((state: TodoState) => state.todos);
    const dispatch = useDispatch();

    useEffect(() => {
        // @ts-ignore
        dispatch(fetchTodos());
    }, [dispatch]);

    const handleAddTodo = () => {
        const newTodo: Todo = { id: Date.now(), text: `New Todo ${Date.now()}` };
        // @ts-ignore
        dispatch(addTodo(newTodo));
    };

    return (
        <div>
            <h1>Todo List</h1>
            <button onClick={handleAddTodo}>Add Todo</button>
            <ul>
                {todos.map((todo) => (
                    // @ts-ignore
                    <TodoItem key={todo.id} todo={todo} onRemove={(id) => dispatch(removeTodo(id))} />
                ))}
            </ul>
        </div>
    );
};

export default TodoList;
