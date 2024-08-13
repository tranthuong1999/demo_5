import React from 'react';
import { Todo } from '../redux/actions';

interface TodoItemProps {
    todo: Todo;
    onRemove: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, onRemove }) => (
    <li>
        {todo.text}
        <button onClick={() => onRemove(todo.id)}>Remove</button>
    </li>
);

export default TodoItem;
