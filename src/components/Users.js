import { useState } from "react";
import User from "./User";

import classes from "./Users.module.css";

const DUMMY_USERS = [
  { id: "u1", name: "Roxy" },
  { id: "u2", name: "Steven" },
  { id: "u3", name: "Coral" },
  { id: "u4", name: "Naiya" },
  { id: "u5", name: "Lolita" },
];

const Users = () => {
  const [showUsers, setShowUsers] = useState(true);

  const toggleUsersHandler = () => {
    setShowUsers((curState) => !curState);
  };

  const usersList = (
    <ul>
      {DUMMY_USERS.map((user) => (
        <User key={user.id} name={user.name} />
      ))}
    </ul>
  );

  return (
    <div className={classes.users}>
      <button onClick={toggleUsersHandler}>
        {showUsers ? "Hide" : "Show"} Users
      </button>
      {showUsers && usersList}
    </div>
  );
};

export default Users;
