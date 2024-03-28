import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

export const AdminNavbar = ({ currentUser }) => {
  const navigate = useNavigate();

  return (
    <ul className="navbar">
      <li className="navbar-item">
        <Link to="/profile">Profile</Link>
      </li>
      <li className="navbar-item">
        <Link to="/workout">My Workouts</Link>
      </li>
      <li className="navbar-item">
        <Link to="/allworkouts">All Workouts</Link>
      </li>
      {localStorage.getItem("bbboss_user") ? (
        <li className="navbar-item navbar-logout">
          <Link
            className="navbar-link"
            to=""
            onClick={() => {
              localStorage.removeItem("bbboss_user");
              navigate("/", { replace: true });
            }}
          >
            Logout
          </Link>
        </li>
      ) : (
        ""
      )}
    </ul>
  );
};
