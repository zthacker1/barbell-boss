import { useNavigate } from "react-router-dom";
import { getUsers } from "../../services/userService";
import { User } from "./User";
import { useEffect, useState } from "react";

export const UserList = ({ currentUser }) => {
  const [users, setUsers] = useState([]);

  const getAndSetAllUsers = () => {
    getUsers().then((usersArray) => {
      setUsers(usersArray);
    });
  };

  useEffect(() => {
    getAndSetAllUsers();
  }, []);

  return (
    <div className="user-container">
      <h2>All Users</h2>
      <article className="user">
        {users.map((user) => {
          return (
            <User
              user={user}
              key={user.id}
              currentUser={currentUser}
              getAndSetAllUsers={getAndSetAllUsers}
            />
          );
        })}
      </article>
    </div>
  );
};
