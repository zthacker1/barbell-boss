import "./User.css";

export const Profile = ({ workouts, currentUser }) => {
  // const userWorkouts = workouts.filter(
  //   (workout) => currentUser.id === workouts.userId
  // );

  return (
    <section className="user">
      <header className=".user-container">
        <div>
          <b>
            <u>{currentUser.name}</u>
          </b>
        </div>
        <div>Gender: {currentUser.gender}</div>
        <div>Weight: {currentUser.weight}</div>
        <div>Squat: {currentUser.squat}</div>
        <div>Bench: {currentUser.bench}</div>
        <div>Dead: {currentUser.deadlift}</div>
      </header>
      <footer className=".user"></footer>
    </section>
  );
};
