import React from "react";

// TodoListBox props -> todos
const TodoListItem = ({
  todo,
  onRemove,
  onToggle,
  onChangeSelectedTodo,
  onInsertToggle,
  style
}) => {
  const { id, text, checked } = todo;
  return (
    <li className="todolist__box-item" style={style}>
      <div 
        className={'checkbox '+(checked ? 'checked' : null)} 
        onClick={() => onToggle(id)}
      >
        {/* checked=true일 때 checked라는 class 추가*/}
        {checked ? <span className="checked-on">on</span>: <span className="checked-off">off</span>}
        {/* checked=true면 체크된 박스 아이콘이 false면 빈 박스 아이콘이 나타남 */}
        <div className="text">{text}</div>
      </div>
      <div
          className="edit"
          onClick={() => {
            onChangeSelectedTodo(todo);
            onInsertToggle();
          }}
      >
      edit  
      </div>
      <div className="remove" onClick={() => onRemove(id)}>
        Remove 
      </div>
    </li>
  )
}
export default TodoListItem;