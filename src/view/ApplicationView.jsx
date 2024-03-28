import React, { useEffect, useState } from "react";
import { AdminView } from "./AdminView";
import { UserView } from "./UserView";
import { getAllWorkouts } from "../services/workoutService";

export const ApplicationView = () => {
  const [currentUser, setCurrentUser] = useState({});
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    const localBbbossUser = localStorage.getItem("bbboss_user");
    const bbbossUserObject = JSON.parse(localBbbossUser);

    setCurrentUser(bbbossUserObject);
  }, []);

  const getAndSetAllWorkouts = () => {
    getAllWorkouts().then((workoutsArray) => {
      setWorkouts(workoutsArray);
    });
  };

  useEffect(() => {
    getAndSetAllWorkouts();
  }, []);

  return currentUser.isAdmin === "true" ? (
    <AdminView currentUser={currentUser} workouts={workouts} />
  ) : (
    <UserView currentUser={currentUser} workouts={workouts} />
  );
};
