import "./User.css";

export const User = ({ user }) => {
  return (
    <section className="user" key={user.id}>
      <header>{user.name}</header>
    </section>
  );
};
