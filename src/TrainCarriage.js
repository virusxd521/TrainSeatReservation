import "./TrainCarriage.css";
import Row from "./row/Row";
import Space from "../src/space/Space"; 



const TrainCarriage = () => {
  return (
    <div className="train-carriage">
      <Row  />
      <Space />
      <Row />
    </div>
  );
}

export default TrainCarriage;
