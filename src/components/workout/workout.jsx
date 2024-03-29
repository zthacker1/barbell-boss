import "./Workout.css";
import { deleteWorkout, getWorkoutTypes } from "../../services/workoutService";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export const Workout = ({ workout, currentUser, getAndSetAllWorkouts }) => {
  const [workoutTypes, setWorkoutTypes] = useState([]);

  const navigate = useNavigate();

  const handleDelete = () => {
    deleteWorkout(workout.id).then(() => {
      getAndSetAllWorkouts();
    });
  };

  const getAndSetAllWorkoutTypes = () => {
    getWorkoutTypes().then((workoutTypesArray) =>
      setWorkoutTypes(workoutTypesArray)
    );
  };

  useEffect(() => {
    getAndSetAllWorkoutTypes();
  }, []);

  const matchingWorkoutType = workoutTypes.find(
    (workoutType) => parseInt(workoutType.id) === parseInt(workout.typeId)
  );

  const workoutTypeName = () =>
    matchingWorkoutType ? matchingWorkoutType.name : "Unknown Type";

  return (
    <section className="workouts-container" key={workout.id}>
      <header>
        <b>
          <u>{workout.name}</u>
        </b>
        <div>Date: {workout.date}</div>
        <div>Type: {workoutTypeName()}</div>
      </header>
      <footer>
        <div>Description: {workout.description}</div>
        <button
          className="btn-container"
          onClick={() => {
            navigate(`${workout.id}`);
          }}
        >
          Edit
        </button>
        <button className="btn btn-warning" onClick={handleDelete}>
          Delete
        </button>
      </footer>
    </section>
  );
};
