import React, { useState } from "react";
import UserTable from "./compontes/Hooks/UserTable";
import AddUser from "./compontes/Hooks/AddUser";
const App = () => {
  const usersData = [
    { id: 1, name: "Tania", username: "floppydiskette" },
    { id: 2, name: "Craig", username: "siliconeidolon" },
    { id: 3, name: "Ben", username: "benisphere" },
  ];

  const [users, setUsers] = useState(usersData);

  const addUser = (user) => {
    user.id = users.length + 1;
    setUsers([...users, user]);
  };

  const HandledeleteUser = (id, index) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  //const [edite]

  const editUser = (user, index) => {};

  return (
    <div className="container">
      <h1> CRUD App with Hooks </h1>
      <div className="flex-row">
        <div className="flex-large">
          <h2> Add user </h2>{" "}
          <AddUser addUser={addUser} editUser={editUser}>
            {" "}
          </AddUser>
        </div>
        <div className="flex-large">
          <h2> View users </h2>{" "}
          <UserTable users={users} editUser={editUser} HandledeleteUser={HandledeleteUser} />
        </div>
      </div>
    </div>
  );
};

export default App;
