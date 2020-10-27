import React from "react";

const UserTable = (props) => {
  const deleteUser = (user, index) => {
    console.log(user, index, "我在输出");
    //console.log(typeof props.HandledeleteUser);
    props.HandledeleteUser(user.id, index);
  };

  const handlerEdite = (user, index) => {
    props.editRow(user, index);
  };

  return (
    <table>
      <thead>
        <tr>
          <th> Name </th> <th> Username </th> <th> Actions </th>
        </tr>
      </thead>
      <tbody>
        {props.users.length > 0 ? (
          props.users.map((user, index) => (
            <tr key={user.id}>
              <td> {user.name} </td> <td> {user.username} </td>
              <td>
                <button
                  className="button muted-button"
                  onClick={() => {
                    handlerEdite(user, index);
                  }}
                >
                  Edit
                </button>
                <button
                  className="button muted-button"
                  onClick={() => {
                    deleteUser(user, index);
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td> NoUsers </td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default UserTable;
