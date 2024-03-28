import "./Workout.css";
import { deleteWorkout } from "../../services/workoutService";
import { useNavigate } from "react-router-dom";

export const Workout = ({ workout, currentUser, getAndSetAllWorkouts }) => {
  // const [workoutTypes, setWorkoutTypes] = useState([]);

  const navigate = useNavigate();

  const handleDelete = () => {
    deleteWorkout(workout.id).then(() => {
      getAndSetAllWorkouts();
    });
  };

  return (
    <section className="workouts-container" key={workout.id}>
      <header>
        <b>
          <u>{workout.name}</u>
        </b>
        <div>Date: {workout.date}</div>
        <div>Type:{workout.typeId}</div>
      </header>
      <footer>
        <div>{workout.description}</div>
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
