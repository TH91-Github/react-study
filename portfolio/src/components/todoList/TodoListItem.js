import React from 'react';
import './TodoListItem.css';

// react-icons 라이브러리 사용하여 아이콘을 컴포넌트 형태로 사용 <MdCheckBox />...
const TodoListItem = ({ todo, onRemove, onToggle }) => {
    const { id, text, checked, user } = todo;

    return (
        <li className="TodoListItem">
            <div className="checkbox" onClick={() => onToggle(id)}>
                {checked ? <span>on</span> : <span>off</span>}
                <div className="text">{text}<span>{user}</span></div>
            </div>
            <div className="remove" onClick={() => onRemove(id)}>
                삭제
            </div>
        </li>
    )
}

export default TodoListItem;
