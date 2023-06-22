import React, { useCallback, useState } from "react";

import './TodoListItem.scss'
const TodoListItem = ({todo, todosType, onToggle, onUpDate, onRemove}) => {
  const {user, text, listType, checked } = todo;
  const [editOnOff, setEditOnOff] = useState(false);
  const [editUser, setEditUser] = useState('');
  const [editText, setEditText] = useState('');

  const onEditUser = useCallback((e) => {
    setEditUser(e.target.value);
  },[]) 
  const onEditText = useCallback((e) => {
    setEditText(e.target.value);
  },[])
  const checkEdit = useCallback(() => {
    if(editOnOff && editUser !== '' && editText !== ''){
      alert("수정 완료");
      setEditUser('');
      setEditText('');
      onUpDate(todo,editUser,editText);
    }
    setEditOnOff(!editOnOff)
  },[editOnOff, todo, editUser, editText, onUpDate])
  
  return (
    <>
    {
      listType === todosType &&
      <li
        className="TodoListItem"
      >
        <button
          type="button"
          className={'checkbox ' + (checked ? 'checked' : '')}
          onClick={()=> onToggle(todo)}>
            <span
              className="user">
              {user}
            </span>
            <span className="text">
              {text}
            </span>
        </button>
        <button
          type="button"
          className="update"
          onClick={() => checkEdit(todo)}>
          {(editOnOff ? <span>🙆‍♂️</span> : <span>✏️</span>)} 
        </button>
        <button
          type="button"
          className="remove"
          onClick={() => onRemove(todo)}>
          삭제
        </button>
        { editOnOff &&
          <div className="TodoListItem__edit">
            <input 
              className="TodoInput"
              name="user"
              title="수정할 이름을 입력하세요"
              placeholder="이름"
              value={editUser}
              onChange={onEditUser}
            />
            <input 
              className="TodoInput"
              name="text" 
              title={`수정할 ${todosType}을 입력하세요`}
              placeholder={`${todosType}을 입력하세요`}
              value={editText}
              onChange={onEditText}
            />
          </div>
        }
      </li>
    }
    </>
  )
}

export default TodoListItem;