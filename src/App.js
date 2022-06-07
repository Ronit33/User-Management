import React, { useState } from 'react';
import AddUser from './components/User/AddUser';
import UsersList from './components/User/UsersList';


function App() {

  const [usersList, setUsersList] = useState([]);
  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      return [...prevUsersList, { id: Math.random().toString(), name: uName, age: uAge }]

    })
  }
  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      {usersList.length === 0 ? <p style={{
        width: "50%",
        margin: "auto",
        textAlign: "center",
        background: "white",
        borderRadius: "10px",
        fontSize: "2rem"
      }}>Add new user</p> : <UsersList users={usersList} />}
    </div>
  );
}

export default App;
