import React, { useState, useEffect } from "react";

const AddUser = (props) => {
  const initialFormState = { id: null, name: "", username: "" };
  const [user, setUser] = useState(initialFormState);

  const handlerSubmit = (event) => {
    event.preventDefault();
    if (!user.name || !user.username) console.log("请输入完整的表单");
    console.log(user, "查看是不是更新上了");
    props.addUser(user);
    setUser(initialFormState);
  };

  useEffect(() => {
    console.log("有数据更新useEffect");
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setUser({ ...user, [name]: value });
  };

  return (
    <form onSubmit={handlerSubmit}>
      <label> Name </label>
      <input type="text" name="name" value={user.name} onChange={handleInputChange} />
      <label> Username </label>
      <input type="text" name="username" value={user.username} onChange={handleInputChange} />
      <button> Add new user </button>
    </form>
  );
};

export default AddUser;
