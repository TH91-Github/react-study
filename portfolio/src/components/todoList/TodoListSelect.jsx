import React from "react";
import "./TodoListSelect.scss"

const TodoListSelect = ({todos, todosType, userChange, selectChange}) => {
  const defaultOption = "all";
  const userSelect = todos.reduce((item, {user}, idx) => {
    return item.indexOf(user) === -1 
    ? idx === 0 
      ? [defaultOption, user]  // 0 처음에 all 입력
      : [...item, user]   // all, 추가 user
    : item // 찾는 값이 있다면 그대로 배열 유지
  },[])

  const onChangeUser = (e) => {
    userChange(e.target.value)
  }
  const onChangeType = (e) =>{ 
    selectChange(e.target.value)
  }
  return (
    <div className="todolist-select">
      <select name="" id="" className="select" onChange={onChangeUser}>
        {todos.length > 0 
        ? userSelect.map((useList) => (<option value={useList} key={useList}>{useList}</option>))
        : <option>{defaultOption}</option>
        }
      </select>
      <select name="" id="" className="select" onChange={onChangeType}>
        {todosType.map((val) => (
          <option value={val.category} key={val.id}>{val.category}</option>
        ))}
      </select>
    </div>
  )
}
export default TodoListSelect;