import Form from "./Form";

var userIsRegistered = false; //Try to change this value to 'true'

export default function App() {
  return (
    <div className="container">
      <Form isRegistered={userIsRegistered} />
    </div>
  );
}
