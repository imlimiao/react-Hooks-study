import React, { useState } from "react";
import UserTable from "./compontes/Hooks/UserTable";
import AddUser from "./compontes/Hooks/AddUser";
const App = () => {
  const usersData = [
    { id: 1, name: "Tania", username: "floppydiskette" },
    { id: 2, name: "Craig", username: "siliconeidolon" },
    { id: 3, name: "Ben", username: "benisphere" },
  ];
  const initialFormState = { id: null, name: "", username: "" };

  const [users, setUsers] = useState(usersData);
  const [editing, setEditing] = useState(false);
  const [currentUser, setCurrentUser] = useState(initialFormState);

  const addUser = (user) => {
    user.id = users.length + 1;
    setUsers([...users, user]);
  };

  const HandledeleteUser = (id, index) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  //const [edite]

  const getCurrentUser = (user, index) => {
    console.log("编辑editUser2", user);
    setEditing(true);
    setCurrentUser(user);
  };

  const updatedUser = (id, updatedUser) => {
    console.log("编辑editUser1");
    setEditing(false);
    setUsers(users.map((user) => (user.id === id ? updatedUser : user)));
  };

  return (
    <div className="container">
      <h1> CRUD App with Hooks </h1>
      <div className="flex-row">
        <div className="flex-large">
          <h2> {editing ? "edit User" : "Add user"} </h2>{" "}
          <AddUser
            addUser={addUser}
            updatedUser={updatedUser}
            currentUser={currentUser}
            editing={editing}
          ></AddUser>
        </div>
        <div className="flex-large">
          <h2> View users </h2>
          <UserTable users={users} editUser={getCurrentUser} HandledeleteUser={HandledeleteUser} />
        </div>
      </div>
    </div>
  );
};

export default App;
