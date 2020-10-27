import React, { useState } from "react";
import UserTable from "./compontes/Hooks/UserTable";
import AddUser from "./compontes/Hooks/AddUser";
import { CopyToClipboard } from "react-copy-to-clipboard";
import ContentLoader from "react-content-loader";

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
  const [copied, setCopied] = useState(false);
  const addUser = (user) => {
    user.id = users.length + 1;
    setUsers([...users, user]);
  };

  const HandledeleteUser = (id, index) => {
    setEditing(false);
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

  const copyUser = () => {
    console.log("copyUser");
  };

  return (
    <div className="container">
      <h1> CRUD App with Hooks </h1>
      <div className="flex-row">
        <div className="flex-large">
          <h2> {editing ? "edit User" : "Add user"} </h2>
          <CopyToClipboard
            text={"我在测试copyclip"}
            onCopy={() => {
              console.log("我在点击copy");
              setCopied(true);
            }}
          >
            <span>Copy to clipboard with span</span>
          </CopyToClipboard>
          <AddUser
            addUser={addUser}
            updatedUser={updatedUser}
            currentUser={currentUser}
            editing={editing}
          ></AddUser>
        </div>
        <div className="flex-large">
          <h2> View users </h2>
          <UserTable users={users} editRow={getCurrentUser} HandledeleteUser={HandledeleteUser} />
        </div>
      </div>
    </div>
  );
};

export default App;
