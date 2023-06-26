import React, { useCallback, useState } from "react";
import TodoListItem from "./TodoListItem";
import "./TodoList.scss"
const TodoList = ({todos, todosType, userType, onToggle, onUpDate, onRemove}) => {
  const viewList = todos.filter((val)=>{ // 이름 일치 하거나 all 이거나
    return userType === val.user || userType === 'all'
  });
  const [editId, setEditId] = useState(null);
  // 수정 영역 관련
  const editCheck = useCallback((eId) => {
    setEditId(eId)
  },[]) 

  return (
    <div className="TodoList">
        {todosType.map((val, idx) => (
          <div
            className={`TodoList__section section${idx+1}`}
            key={val.id}>
              <p className="TodoList-title">{val.category}</p>
              <ul>
                {
                  viewList.map(todo =>(
                    <TodoListItem
                      todo={todo}
                      todosType={val.category}
                      onToggle={onToggle}
                      onUpDate={onUpDate}
                      onRemove={onRemove}
                      key={todo.id}
                      editId={editId}
                      editCheck={editCheck}
                    />
                  ))
                }
              </ul>
          </div>
        ))}
    </div>
  )
}
export default TodoList;