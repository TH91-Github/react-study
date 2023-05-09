import React, {useState} from 'react';

const Input2 = () => {
  // 여러 개의 데이터(input)를 처리할 때
  // useState object 형식으로
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    tel: ""
  });

  const onChange = (e) => {
    const value = e.target.value;
    const id = e.target.id;
    setInputs({
      ...inputs, // 복사 후 
      [id] : value // 변경
    })
  }
  //object 분해 기법 es6 추가
  const {name, email, tel} = inputs;

  return (
    <div>
      <h1>useState 여러 값 변경하기 </h1>
      <div>
        <label>이름</label>
        <input type="text" id="name"value={name} onChange={onChange} />
      </div>
      <div>
        <label>이메일</label>
        <input type="email" id="email" value={email} onChange={onChange} />
      </div>
      <div>
        <label>전화번호</label>
        <input type="tel" id="tel" value={tel} onChange={onChange} />
      </div>
      <p>{name}</p>
      <p>{email}</p>
      <p>{tel}</p>
    </div>
  )
}
export default Input2;