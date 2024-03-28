import { useParams } from "react-router-dom";

export const getAllWorkouts = () => {
  return fetch(`http://localhost:8088/workout`).then((res) => res.json());
};

export const getWorkoutById = (workoutId) => {
  return fetch(`http://localhost:8088/workout/${workoutId}`).then((res) =>
    res.json()
  );
};

export const createWorkout = (workout) => {
  return fetch("http://localhost:8088/workout", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(workout),
  }).then((res) => res.json());
};

export const deleteWorkout = (workoutId) => {
  return fetch(`http://localhost:8088/workout/${workoutId}`, {
    method: "DELETE",
  });
};

export const editWorkout = (workout) => {
  return fetch(`http://localhost:8088/workout/${workout.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(workout),
  });
};

export const getWorkoutTypes = () => {
  return fetch("http://localhost:8088/workoutType").then((res) => res.json());
};

export const getWorkoutTypesById = (workoutTypeId) => {
  return fetch(`http://localhost:8088/workoutType/${workoutTypeId}`).then(
    (res) => res.json()
  );
};

export const workoutTypes = [
  { id: 1, name: "Power", label: "Power" },
  { id: 2, name: "Volume", label: "Volume" },
  { id: 3, name: "Cardio", label: "Cardio" },
];
