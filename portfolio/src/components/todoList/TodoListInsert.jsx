import React, { useCallback, useState } from "react";

import './TodoListInsert.scss';

const TodoListInsert = ({onInsert, todosType, selectType}) => {
  const _type = selectType === '' ? todosType[0] : selectType; // 빈 값이면 처음 값(할 일을 넣고 아니면 있는 값 그대로)
  const [user, setUser] = useState('');
  const [value, setValue] = useState('');
  
  const onChangeUser = useCallback((e) => {
    setUser(e.target.value);
  },[])
  const onChangeValue = useCallback((e) => {
    setValue(e.target.value);
  }, [])
  const onSubmit = useCallback((e)=>{
    if(user === '' || value === ''){
      alert("입력을 확인해 주세요")
    }else{
      onInsert(user, _type, value); // 이름, 할 일 or 사고 싶은 것, 텍스트
      setUser('');
      setValue('');
    }
    e.preventDefault();
  },[onInsert, user, _type, value])

  return (
    <form className="TodoForm" onSubmit={onSubmit}>
      <input 
        className="TodoInput"
        name="user"
        placeholder="이름"
        value={user}
        onChange={onChangeUser}
      />
      <input 
        className="TodoInput"
        name="text"
        placeholder={`${_type}을 입력하세요`}
        value={value}
        onChange={onChangeValue}
      />
      <button
        type="submit"
        className="TodoSubmit"
      >
        ADD
      </button>
    </form>
  )
}
export default TodoListInsert;