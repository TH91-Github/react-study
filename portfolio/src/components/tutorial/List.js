import React from "react";

const User = ({userData}) => { // {프로퍼티}
  return (
    <tr>
      <td>{userData.name}</td>
      <td>{userData.email}</td>
    </tr>
  )
}
const UserList = () => {
  const users = [
    {email: 'user1@gmail.com', name: '유재석'},
    {email: 'user2@gmail.com', name: '김종국'},
    {email: 'user3@gmail.com', name: '하하'},
    {email: 'user4@gmail.com', name: '지석진'},
  ];
  return (
    <div>
      <h1>여러 데이터 뿌려주기</h1>
      <table>
        <thead>
          <tr>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => <User userData={user}/>)}
        </tbody>
      </table>
    </div>
  )
}
export default UserList;