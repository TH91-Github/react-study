import React, { useCallback, useState } from 'react';
import './TodoInsert.css';

const TodoInsert = ({ onInsert }) => {
    const [value, setValue] = useState('');
    const [user, setUser] = useState('');

    const onChange = useCallback(e => {
        setValue(e.target.value);
        //console.log({ value });
    }, []);
    const onChangeUser = useCallback((e) => {
        setUser(e.target.value)
    }, []);

    const onSubmit = useCallback(e => {
        onInsert(user, value); 
        setValue(''); //value 초기화
        setUser('');
        e.preventDefault(); //새로고침 막기
    }, [onInsert, value, user]);

    return (
        <form className="TodoInsert" onSubmit={onSubmit}>
            <input placeholder='이름' value={user} onChange={onChangeUser} />
            <input placeholder="할 일을 추가하세요"
                value={value}
                onChange={onChange}
            />
            <button type="submit">
                +
            </button>
        </form>
    )
}
export default TodoInsert;