export default function Form(props) {
  return (
    <form className="form">
      <input type="text" placeholder="Username" required />
      <input type="password" placeholder="Password" required />
      {!props.isRegistered && (
        <input type="password" placeholder="Confirm Password" required />
      )}

      <button type="submit">{props.isRegistered ? "Login" : "Register"}</button>
    </form>
  );
}
