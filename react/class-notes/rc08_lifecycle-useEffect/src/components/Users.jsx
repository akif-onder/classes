import { useState } from "react";



const Users = () => {

    const [users, setUsers] = useState();
    // fetch('https://jsonplaceholder.typicode.com/users')
    //   .then((res) => res.json())
    //   .then((data) => setUsers(data));

      console.log(users);
  return (

    <div>
      <h1>USER LIST</h1>
      <div className="row">
        <div className="col">
          <img src="" alt="" />
          <h6>Name</h6>
        </div>
      </div>
    </div>
  );
};

export default Users;
