import React, { useCallback, useEffect, useState } from "react"

import TodoListSelect from './TodoListSelect';
import TodoListInsert from './TodoListInsert';
import TodoList from './TodoList';
import { dataFetch, postFetch, toggleFetch, removeFetch }  from "../../api/useFetch";
import './TodoListTemplate.scss'

const TodoListTemplate = () => {
  const listLsitKey = "todolist";
  const listCategoryKey ="todoCategory"
  const SERVER_URL = `http://localhost:4000/${listLsitKey}`;

  const [todos, setTodos] = useState(null);
  const [todosType, setTodosType] = useState(null);
  const [userType, setUserType] = useState('all'); // 선택된 유저 선택
  const [selectType, setSelectType] = useState(''); // 할 일 사고 싶은 것 선택
  // 추후 이해 완료 후 hook 사용.
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // load
  const loadFetch = useCallback(async()=>{
    setLoading(true);
    try{ 
      // setTodos(ttt)
      const data = await dataFetch(SERVER_URL);
      const category = await dataFetch(`http://localhost:4000/${listCategoryKey}`);
      setTodos(data);
      setTodosType(category);
    }catch(error) {
      setError(error);
    }
    finally{ 
      setLoading(false)
    }
  },[SERVER_URL])

  useEffect(() => {
    console.log("loading")
    loadFetch();
  }, [loadFetch])

  // 목록 추가
  const onInsert = useCallback((user, listType, text) => {
    const todo = {
        id: `${user}_${Math.random() * 1000}`,
        user,
        text,
        listType,
        checked: false,
    };
    postFetch(SERVER_URL, todo)
    // .then(()=> loadFetch()) // useState todos로 하기에 불필요하다고 생각.. 바뀌면 전체 리렌더링 - 화면깜빡임
    setTodos(todos.concat(todo)); 
  },[todos, SERVER_URL]);
  
  // 선택된 유저 알림
  const userChange = useCallback((useValue) => {
    setUserType(useValue)
  },[])
  // 선택된 할 일 사고 싶은 것 선택 알림
  const selectChange = useCallback((selectValue) => {
    setSelectType(selectValue);
  },[])

  // 수정
  const onUpDate = useCallback((listInfo, editText) => {
    const editOption = {text : editText }
    toggleFetch(SERVER_URL, listInfo, editOption);
    setTodos(todos.map((todo)=>
      todo.id === listInfo.id ? {...todo, ...editOption} : todo
    ));
  },[todos, SERVER_URL])

  // 체크 
  const onToggle = useCallback((listInfo) => {
    const editOption = {checked : !listInfo.checked }
    toggleFetch(SERVER_URL, listInfo, editOption);
    setTodos(todos.map((todo) => 
      todo.id === listInfo.id ? {...todo, ...editOption } : todo
    ))
  },[todos])
  
  // 삭제 
  const onRemove = useCallback((listInfo)=>{
    removeFetch(SERVER_URL, listInfo);
    setTodos(todos.filter(remove => remove.id !== listInfo.id))
  },[todos, SERVER_URL])

  if (loading) return <>LOADING...</>
  if (error) <>{error}</>
  if(!todos) return null // ☆ 참고 부분 : 데이터가 없다면 다시 null <-- 확인
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
        todosType={todosType}
        onInsert={onInsert}
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