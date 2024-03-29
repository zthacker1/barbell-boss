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
  const [workoutToEdit, setWorkoutToEdit] = useState({
    userId: parseInt(currentUser.id),
    name: "",
    date: "",
    typeId: 0,
    description: "",
  });
  const [currentWorkout, setCurrentWorkout] = useState({
    userId: parseInt(currentUser.id),
    name: "",
    date: "",
    typeId: 0,
    description: "",
  });
  const [workoutTypes, setWorkoutTypes] = useState([]);
  const navigate = useNavigate();
  const { workoutId } = useParams();
  const str = workoutId;

  const getAndSetWorkoutById = () => {
    getWorkoutById(str).then((workoutTypesArray) => {
      setWorkoutToEdit(workoutTypesArray);
    });
  };

  useEffect(() => {
    getAndSetWorkoutById();
  }, []);

  const handleSave = (event) => {
    event.preventDefault();

    const newErrors = {};

    if (!currentWorkout.name) newErrors.name = "Name is required";
    if (!currentWorkout.date) newErrors.date = "date is required";
    if (!currentWorkout.typeId) newErrors.typeId = "typeId is required";
    if (!currentWorkout.description)
      newErrors.description = "description is required";

    if (Object.keys(newErrors).length > 0) {
      alert("fill out form");
    } else {
      console.log("Form submitted successfully:");

      const newWorkout = {
        id: str,
        userId: parseInt(currentUser.id),
        name: currentWorkout.name,
        typeId: currentWorkout.typeId,
        date: currentWorkout.date,
        description: currentWorkout.description,
      };

      editWorkout(newWorkout).then(() => {
        navigate("/workout");
      });
    }
  };

  const getAndSetWorkoutTypes = () => {
    getWorkoutTypes().then((workoutTypesArray) => {
      setWorkoutTypes(workoutTypesArray);
    });
  };

  useEffect(() => {
    getAndSetWorkoutTypes();
  }, []);

  const matchingWorkoutType = workoutTypes.find(
    (workoutType) => parseInt(workoutType.id) === parseInt(workoutToEdit.typeId)
  );

  const workoutTypeName = () =>
    matchingWorkoutType ? matchingWorkoutType.name : "Unknown Type";

  return (
    <form id="myForm">
      <h2>Edit Workout</h2>
      <fieldset>
        <div className="form-group">
          <label>Edit Workout Name</label>
          <input
            type="text"
            className="form-control"
            placeholder={workoutToEdit.name}
            onChange={(event) => {
              const workoutCopy = { ...currentWorkout };
              workoutCopy.name = event.target.value;
              setCurrentWorkout(workoutCopy);
            }}
            required
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label>Edit Date</label>
          <input
            type="text"
            className="form-control"
            placeholder={workoutToEdit.date}
            onChange={(event) => {
              const workoutCopy = { ...currentWorkout };
              workoutCopy.date = event.target.value;
              setCurrentWorkout(workoutCopy);
            }}
            required
          />
        </div>
      </fieldset>

      <fieldset>
        <div className="form-group">
          <label>Edit Type</label>
          <Select
            options={workoutTypes}
            placeholder={workoutTypeName()}
            onChange={(selectedOption) => {
              const workoutCopy = { ...currentWorkout };
              workoutCopy.typeId = selectedOption.id;
              setCurrentWorkout(workoutCopy);
            }}
            required
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label>Edit Description</label>
          <input
            type="text"
            className="form-control"
            placeholder={workoutToEdit.description}
            onChange={(event) => {
              const workoutCopy = { ...currentWorkout };
              workoutCopy.description = event.target.value;
              setCurrentWorkout(workoutCopy);
            }}
            required
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <button type="submit" onClick={handleSave}>
            Submit
          </button>
        </div>
      </fieldset>
    </form>
  );
};
