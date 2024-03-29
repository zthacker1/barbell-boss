import { Outlet, Route, Routes } from "react-router-dom";
import { CreateWorkoutForm } from "../components/forms/CreateWorkoutForm";
import { AdminNavbar } from "../components/navbar/AdminNavbar";
import { Welcome } from "../components/welcome/Welcome";
import { WorkoutList } from "../components/workout/WorkoutList";
import { Profile } from "../components/user/Profile";
import { EditWorkoutForm } from "../components/forms/EditWorkoutForm";
import { UserList } from "../components/user/UserList";
import { AllWorkouts } from "../components/workout/AllWorkouts";

export const AdminView = ({ workouts, currentUser }) => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <AdminNavbar currentUser={currentUser} />
            <Outlet />
          </>
        }
      >
        <Route index element={<Welcome />} />;
        <Route path="workout">
          <Route index element={<WorkoutList currentUser={currentUser} />} />
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
        <Route path="user">
          <Route
            index
            element={<UserList currentUser={currentUser} workouts={workouts} />}
          />
        </Route>
        <Route path="workouts">
          <Route
            index
            element={
              <AllWorkouts currentUser={currentUser} workouts={workouts} />
            }
          />
        </Route>
      </Route>
    </Routes>
  );
};
