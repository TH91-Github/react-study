import React, { useCallback, useState } from "react";
import './TodoListInsert.scss';
import { regExpChk } from "../../api/regExpChk";

const TodoListInsert = ({todosType, onInsert,  selectType}) => {
  const _type = selectType === '' ? todosType[0].category : selectType; // 빈 값이면 처음 값(할 일을 넣고 아니면 있는 값 그대로)
  const [user, setUser] = useState('');
  const [value, setValue] = useState('');
  const onChangeUser = useCallback((e) => {
    setUser(regExpChk(e.target.value));
  },[])
  const onChangeValue = useCallback((e) => {
    setValue(regExpChk(e.target.value));
  }, [])
  const onSubmit = useCallback((e)=>{ // 입력에서 특수문자 막기 
    e.preventDefault();
    const userGap = user.replace(/\s+/g, '');
    const valueGap = value.replace(/\s+/g, '');
    // 빈 값만 있을 경우, 중간 체크 띄어쓰기 : kim t h 이름 가능.
    if(userGap.length === 0){
      setUser(userGap)
      alert("이름을 확인해 주세요");
    }else if(valueGap.length === 0 ){
      setValue(valueGap)
      alert("입력을 확인해 주세요");
    }else {
      // 앞 뒤 공백 제거
      setUser(user.trim());
      setValue(user.trim());
      onInsert(user, _type, value); // 이름, 할 일 or 사고 싶은 것, 텍스트
      setUser('');
      setValue('');
    }
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