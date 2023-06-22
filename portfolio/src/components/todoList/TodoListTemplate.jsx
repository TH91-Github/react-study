import React, { useCallback, useState } from "react"

import TodoListSelect from './TodoListSelect';
import TodoListInsert from './TodoListInsert';
import TodoList from './TodoList';

import './TodoListTemplate.scss'
const data = [
  {
    id: 1,
    user: '이름11',
    listType: '할 일',
    text: '할 일 1번 입니다',
    checked: false,
  },
  {
    id: 2,
    user: '이름22',
    listType: '할 일',
    text: '할 일 2번 입니다',
    checked: false,
  },
  {
    id: 3,
    user: '이름33',
    listType: '사고 싶은 것',
    text: '사고 싶은 것1111111',
    checked: false,
  },
  {
    id: 4,
    user: '이름44',
    listType: '사고 싶은 것',
    text: '사고 싶은 것222222',
    checked: false,
  },
]
const TodoListTemplate = () => {
  const [todos, setTodos] = useState(data);
  const [userType, setUserType] = useState('all'); // 선택된 유저 선택
  const [selectType, setSelectType] = useState(''); // 할 일 사고 싶은 것 선택
  const todosType = data.reduce((result, { listType }) => {
    return !result.includes(listType)
      ? [...result, listType]
      : result
  }, [])
  // 목록 추가
  const onInsert = useCallback((user, listType, text) => {
    const todo = {
      id: `${user}_${Math.random() * 1000}`,
      user,
      text,
      listType,
      checked: false,
    };
    setTodos(todos.concat(todo));
  },[todos]);
  
  // 선택된 유저 알림
  const userChange = useCallback((useValue) => {
    setUserType(useValue)
  },[])
  // 선택 된 할 일 사고 싶은 것 선택 알림
  const selectChange = useCallback((selectValue) => {
    setSelectType(selectValue);
  },[])

  // 수정
  const onUpDate = useCallback((listInfo, editUser, editText) => {
    setTodos(todos.map((todo)=>
      todo.id === listInfo.id ? {...todo, user : editUser, text : editText} : todo
    ))
  },[todos])

  // 체크 
  const onToggle = useCallback((listInfo) => {
    setTodos(todos.map((todo) => 
      todo.id === listInfo.id ? {...todo, checked : !todo.checked } : todo
    ))
  },[todos])

  // 삭제 
  const onRemove = useCallback((listInfo)=>{
    setTodos(todos.filter(remove => remove.id !== listInfo.id))
  },[todos])

  // ★ 항상 생각으로 state는 변경이 일어나면 state가 포함된 html을 자동으로 재렌더링 되는 점.
  return (
    <div className="todolist">
      <TodoListSelect
        todos={todos}
        todosType={todosType}
        userChange={userChange}
        selectChange={selectChange}
      />
      <TodoListInsert 
        todos={todos}
        onInsert={onInsert}
        todosType={todosType}
        selectType={selectType}
      />
      <TodoList 
        todos={todos}
        todosType={todosType}
        userType={userType}
        onToggle={onToggle}
        onUpDate={onUpDate}
        onRemove={onRemove}
      />
    </div>
  )
}


export default TodoListTemplate;