import { useState, useCallback, useEffect } from 'react';
import TodoTemplate from './TodoTemplate';
import TodoList from './TodoList';
import TodoInsert from './TodoInsert';

const data = [
    {
        id: 1,
        user: '',
        text: '리액트 TodoList 만들기',
        checked: true,
    },
    {
        id: 2,
        user: '',
        text: '리액트 스터디 참여하기',
        checked: false,
    },
    {
        id: 3,
        user: '',
        text: '눈누난나 퇴근',
        checked: false,
    },
    {
        id: 4,
        user: 'aa',
        text: '눈누난나 퇴근',
        checked: false,
    },
]

const App = () => {
    const [todos, setTodos] = useState(data);
    const [users, setUsers] = useState(['all']);
    const [user, setUser] = useState('all');

    // *배열에 새 항목 추가*
    // 배열의 고유값 변수로 사용될 addId
    // useRef() 파라미터로 다음 id 값 넣어줌

    const onInsert = useCallback((user, text) => {
        const todo = {
            user,
            id: `${text}_${Math.random() * 1000}`,
            text,
            checked: false,
        };
        setUsers(users => user !== '' &&  users.indexOf(user) === -1 ? users.concat(user) : users);
        setTodos(todos => todos.concat(todo));
    },
        [],
    );

    const onChangeUser = useCallback((user) => {
        setUser(user);
    }, [])
    const onRemove = useCallback(
        id => {
            setTodos(todos =>
                todos.filter(todo => todo.id !== id)
            ); //삭제 대상의 id와 일치하지 않는 todo들은 todos 배열에 남기는 배열 재생성
        },
        []
    );

    const onToggle = useCallback(
        id => {
            setTodos(todos =>
                todos.map(todo =>
                    todo.id === id ? { ...todo, checked: !todo.checked } : todo,
                    //todo.id === id 일때 true라면, 해당 id를 가진 todo의 checked 상태가 반대로 된(토글된) 새로운 배열을 만듦, 아니라면 그대로 이용
                ),
            )
        },
        []
    );

    // 완료 항목 일괄 삭제
    const clearComplete = useCallback(() => {
        todos.length !== 0 && setTodos(todos.filter(todo => todo.checked !== true));
    }, [todos]);

    useEffect(() => {
        const _users = todos.reduce((acc, todo) => {
            if (todo.user === '' && acc.indexOf('all') === -1) {
                acc.push('all')
            } else if (todo.user !== '' && !acc[todo.user]) {
                acc.push(todo.user)
            }
            return acc;
        }, [])
        setUsers(_users);
    },[]);

    useEffect(() => {
        const _checked = todos.reduce((acc, todo) => {
            return acc += !todo.checked
        }, 0)
        _checked === 0 && alert('할 일 끝');
    }, [todos]);

    return (
        <TodoTemplate todoLength={todos.length} clearComplete={clearComplete}>
            <TodoInsert onInsert={onInsert} />
            <TodoList todos={todos} onChangeUser={onChangeUser} user={user} users={users} onRemove={onRemove} onToggle={onToggle} />
        </TodoTemplate>
    );
};


export default App;
