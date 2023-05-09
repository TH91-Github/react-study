import React, {useState} from 'react';

const Input = () => {
  const [txtValue, setTextValue] = useState("");
  const onChange = (e) => {
    setTextValue(e.target.value);
  }
  return (
    <div>
      <h1>useState 사용하여 값 변경하기 </h1>
      <input type="text" value={txtValue} onChange={onChange}/>
      <br />
      <p> {txtValue}</p>
    </div>
  )
}
export default Input;