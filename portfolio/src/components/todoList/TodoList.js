import React from 'react';
import TodoListItem from './TodoListItem';
import './TodoList.css';

// App.js에서 props 받아오기
const TodoList = ({ todos, users, user, onRemove, onToggle, onChangeUser}) => {
    const _todos = user === 'all' ? todos : todos.filter(todo => todo.user === user)
    return (
        <div>
            <select onChange={(e) => onChangeUser(e.target.value)} defaultValue={user}>
                {users.map(user => (
                    <option value={user} key={user}>{user}</option>
                ))}
            </select>
            <ul className="TodoList">
                {_todos.map(todo => (
                    <TodoListItem 
                        todo={todo} key={todo.id} 
                        onRemove={onRemove} 
                        onToggle={onToggle} 
                    />
                ))}
            </ul>
        </div>
    )
}

export default TodoList;