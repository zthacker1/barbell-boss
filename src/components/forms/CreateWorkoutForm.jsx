import { useEffect, useState } from "react";
import {
  createWorkout,
  getAllWorkouts,
  getWorkoutTypes,
  getWorkoutTypesById,
} from "../../services/workoutService";
import { useNavigate } from "react-router-dom";
import Select from "react-select";
import "./Form.css";

export const CreateWorkoutForm = ({ currentUser }) => {
  const [workout, setWorkout] = useState({
    // userId: 0,
    date: "",
    name: "",
    description: "",
  });
  const [workoutTypes, setWorkoutTypes] = useState([]);

  const getAndSetWorkouts = () => {
    getAllWorkouts().then((workoutsArray) => {
      setWorkout(workoutsArray);
    });
  };

  useEffect(() => {
    getAndSetWorkouts();
  }, []);

  const getAndSetWorkoutTypes = () => {
    getWorkoutTypes().then((workoutTypesArray) => {
      setWorkoutTypes(workoutTypesArray);
    });
  };

  useEffect(() => {
    getAndSetWorkoutTypes();
  }, []);

  const navigate = useNavigate();

  const handleSave = (event) => {
    event.preventDefault();

    const newErrors = {};

    if (!workout.name) newErrors.name = "Name is required";
    if (!workout.date) newErrors.date = "date is required";
    if (!workout.typeId) newErrors.typeId = "typeId is required";
    if (!workout.description) newErrors.description = "description is required";

    if (Object.keys(newErrors).length > 0) {
      alert("fill out form");
    } else {
      console.log("Form submitted successfully:");

      const newWorkout = {
        userId: parseInt(currentUser.id),
        name: workout.name,
        date: workout.date,
        typeId: parseInt(workout.typeId),
        description: workout.description,
      };
      createWorkout(newWorkout).then(() => {
        navigate("/workout");
      });
    }
  };

  return (
    <form>
      <h2>New Workout</h2>
      <fieldset>
        <div className="form-group">
          <label>New Workout Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Workout Name"
            onChange={(event) => {
              const workoutCopy = { ...workout };
              workoutCopy.name = event.target.value;
              setWorkout(workoutCopy);
            }}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label>Date</label>
          <input
            type="text"
            className="form-control"
            placeholder="DD/MM/YY"
            onChange={(event) => {
              const workoutCopy = { ...workout };
              workoutCopy.date = event.target.value;
              setWorkout(workoutCopy);
            }}
          />
        </div>
      </fieldset>

      <fieldset>
        <div className="form-group">
          <label>Type</label>
          <Select
            options={workoutTypes}
            placeholder="Select a workout type..."
            onChange={(selectedOption) => {
              const workoutCopy = { ...workout };
              workoutCopy.typeId = selectedOption.id;
              setWorkout(workoutCopy);
            }}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label>Description</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter description of workout"
            onChange={(event) => {
              const workoutCopy = { ...workout };
              workoutCopy.description = event.target.value;
              setWorkout(workoutCopy);
            }}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <button
            className="form-btn btn-info"
            onClick={handleSave}
            workout={workout}
          >
            Submit
          </button>
        </div>
      </fieldset>
    </form>
  );
};
