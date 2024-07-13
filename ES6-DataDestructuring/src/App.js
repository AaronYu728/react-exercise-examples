import "./styles.css";
import cars from "./data";
import Table from "react-bootstrap/Table";

export default function App() {
  const [Honda, Tesla, BMW] = cars;

  const {
    coloursByPopularity: hTopColors,
    speedStats: { topSpeed: Hspeed },
  } = Honda;

  const {
    model: tmodel,
    coloursByPopularity: TTopColors,
    speedStats: { topSpeed: Tspeed },
  } = Tesla;

  const {
    model: bmodel,
    coloursByPopularity: bTopColors,
    speedStats: { topSpeed: bspeed },
  } = BMW;

  return (
    // <div className="App">
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Brand</th>
          <th>TopSpeed</th>
          <th>TopColor</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{Honda.model}</td>
          <td>{Hspeed}</td>
          <td>{hTopColors}</td>
        </tr>
        <tr>
          <td>{tmodel}</td>
          <td>{TTopColors}</td>
          <td>{Tspeed}</td>
        </tr>
        <tr>
          <td>{bmodel}</td>
          <td>{bTopColors}</td>
          <td>{bspeed}</td>
        </tr>
      </tbody>
    </Table>
    // </div>
  );
}
