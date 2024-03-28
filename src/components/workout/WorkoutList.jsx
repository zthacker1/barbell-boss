import { Workout } from "./Workout";
import "./Workout.css";
import { useEffect, useState } from "react";
import { getAllWorkouts } from "../../services/workoutService";
import { useNavigate } from "react-router-dom";

export const WorkoutList = ({ currentUser }) => {
  const [workouts, setWorkouts] = useState([]);

  const navigate = useNavigate();

  const getAndSetAllWorkouts = () => {
    getAllWorkouts().then((workoutsArray) => {
      setWorkouts(workoutsArray);
    });
  };

  useEffect(() => {
    getAndSetAllWorkouts();
  }, []);

  return (
    <div className="workouts-container">
      <h2>Workouts</h2>
      <button
        className="btn btn-secondary"
        onClick={() => {
          navigate("/workout/create");
        }}
      >
        Create New Workout
      </button>
      <article className="workout">
        {workouts.map((workout) => {
          return (
            <Workout
              workout={workout}
              key={workout.id}
              currentUser={currentUser}
              getAndSetAllWorkouts={getAndSetAllWorkouts}
            />
          );
        })}
      </article>
    </div>
  );
};
