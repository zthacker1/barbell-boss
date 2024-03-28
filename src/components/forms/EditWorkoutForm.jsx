import { useEffect, useState } from "react";
import {
  editWorkout,
  getWorkoutById,
  getWorkoutTypes,
} from "../../services/workoutService";
import { useNavigate, useParams } from "react-router-dom";
import Select from "react-select";
import "./Form.css";

export const EditWorkoutForm = ({ workouts, currentUser }) => {
  const [workout, setWorkout] = useState({});
  const [workoutTypes, setWorkoutTypes] = useState([]);
  const navigate = useNavigate();
  const { workoutId } = useParams();

  //   useEffect(() => {
  //     getWorkoutById(workoutId).then((data) => {
  //       const workoutObj = data[0];
  //       setWorkout(workoutObj);
  //     });
  //   }, [workoutId]);

  useEffect(() => {
    getWorkoutById(workoutId).then(({ workoutObj }) => {
      setWorkout(workoutObj);
    });
  }, []);

  const handleSave = (event) => {
    event.preventDefault();

    const str = workoutId;

    const newWorkout = {
      id: str,
      //   userId: currentUser.id,
      name: workout.name,
      typeId: workout.typeId,
      date: workout.date,
      description: workout.description,
    };
    editWorkout(newWorkout).then(() => {
      navigate("/workout");
    });
  };

  const getAndSetWorkoutTypes = () => {
    getWorkoutTypes().then((workoutTypesArray) => {
      setWorkoutTypes(workoutTypesArray);
    });
  };

  useEffect(() => {
    getAndSetWorkoutTypes();
  }, []);

  return (
    <form>
      <h2>Edit Workout</h2>
      <fieldset>
        <div className="form-group">
          <label>Edit Workout Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="workout"
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
          <label>Edit Date</label>
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
          <label>Edit Type</label>
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
          <label>Edit Description</label>
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
          <button className="form-btn btn-info" onClick={handleSave}>
            Submit
          </button>
        </div>
      </fieldset>
    </form>
  );
};
