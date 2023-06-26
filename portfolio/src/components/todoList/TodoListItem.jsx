import React, { useCallback, useState } from "react";

import './TodoListItem.scss';
import { regExpChk } from "../../api/regExpChk";
const TodoListItem = ({todo, todosType, onToggle, onUpDate, onRemove, editId, editCheck}) => {
  const {user, text, listType, checked } = todo;
  // const [editOnOff, setEditOnOff] = useState(false);
  const [editText, setEditText] = useState('');
  const onEditText = useCallback((e) => {
    setEditText(regExpChk(e.target.value));
  },[])
  const checkEdit = useCallback((e) => {
    (editText === '' )
    ?  editId === e.id 
      ? editCheck(null)
      : editCheck(e.id)
    : editComplete();

    function editComplete(){
      // alert("수정 완료"); // [Violation] 'click' handler took 1033ms 발생
      setEditText('');
      onUpDate(todo,editText)
      editCheck(null)
    }
    
  },[editCheck, todo, editText, onUpDate, editId])
 
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
          {(editId === todo.id ? <span>🙆‍♂️</span> : <span>✏️</span>)} 
        </button>
        <button
          type="button"
          className="remove"
          onClick={() => onRemove(todo)}>
          삭제
        </button>
        { editId === todo.id &&
          <div className="TodoListItem__edit">
            <span className="TodoListItem__edit-user">
              {todo.user}
            </span>
            <input 
              className="TodoListItem__edit-input"
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