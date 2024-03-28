import { Outlet, Route, Routes } from "react-router-dom";
import { CreateWorkoutForm } from "../components/forms/CreateWorkoutForm";
import { Navbar } from "../components/navbar/Navbar";
import { Welcome } from "../components/welcome/Welcome";
import { WorkoutList } from "../components/workout/WorkoutList";
import { Profile } from "../components/user/Profile";
import { useEffect, useState } from "react";
import { EditWorkoutForm } from "../components/forms/EditWorkoutForm";

export const UserView = ({ workouts, currentUser }) => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Navbar currentUse={currentUser} />
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
      </Route>
    </Routes>
  );
};
