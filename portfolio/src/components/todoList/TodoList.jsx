import React from "react";

import TodoListItem from "./TodoListItem";
import "./TodoList.scss"
const TodoList = ({todos, todosType, userType, onToggle, onUpDate, onRemove}) => {
  const viewList = todos.filter((val)=>{ // 이름 일치 하거나 all 이거나 
    return userType === val.user || userType === 'all'
  });
  return (
    <div className="TodoList">
        {todosType.map((val, idx) => (
          <div
            className={`TodoList__section section${idx+1}`}
            key={val}>
              <p className="TodoList-title">{val}</p>
              <ul>
                {
                  viewList.map(todo =>(
                    <TodoListItem
                      todo={todo}
                      todosType={val}
                      onToggle={onToggle}
                      onUpDate={onUpDate}
                      onRemove={onRemove}
                      key={todo.id}
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