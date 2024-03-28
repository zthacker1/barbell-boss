import { Outlet, Route, Routes } from "react-router-dom";
import { CreateWorkoutForm } from "../components/forms/CreateWorkoutForm";
import { AdminNavbar } from "../components/navbar/AdminNavbar";
import { Welcome } from "../components/welcome/Welcome";
import { WorkoutList } from "../components/workout/WorkoutList";
import { Profile } from "../components/user/Profile";
import { EditWorkoutForm } from "../components/forms/EditWorkoutForm";

export const AdminView = ({ workouts, currentUser }) => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <AdminNavbar currentUse={currentUser} />
            <Outlet />
          </>
        }
      >
        <Route index element={<Welcome />} />;
        <Route path="workout">
          <Route index element={<WorkoutList currentUse={currentUser} />} />
          <Route
            path=":workoutId"
            element={
              <EditWorkoutForm currentUser={currentUser} workouts={workouts} />
            }
          />
          <Route
            path="create"
            element={
              <CreateWorkoutForm
                currentUser={currentUser}
                workouts={workouts}
              />
            }
          />
        </Route>
        <Route path="profile">
          <Route
            index
            element={<Profile currentUser={currentUser} workouts={workouts} />}
          />
        </Route>
        {/* <Route path="users">
          <Route
            index
            element={<UserList currentUser={currentUser} workouts={workouts} />}
          />
        </Route> */}
      </Route>
    </Routes>
  );
};
