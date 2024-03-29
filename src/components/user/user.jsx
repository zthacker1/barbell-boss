import "./User.css";
import { deleteWorkout, getWorkoutTypes } from "../../services/workoutService";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export const User = ({ user }) => {
  return (
    <section className="user">
      <header className=".user-container">
        <div>
          <b>
            <u>{user.name}</u>
          </b>
        </div>
        <div>Gender: {user.gender}</div>
        <div>Weight: {user.weight}</div>
        <div>Squat: {user.squat}</div>
        <div>Bench: {user.bench}</div>
        <div>Dead: {user.deadlift}</div>
      </header>
      <footer className=".user"></footer>
    </section>
  );
};
