import Excercises from "../Excercise-List/Excercises";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDumbbell } from "@fortawesome/free-solid-svg-icons";
import "./Activity.css";
const Activity = ({ data, addToList }) => {
  return (
    <div className="col-lg-9 p-lg-4 pt-5 col-6">
      <div className="mb-5">
        <h3 className="text-lg-start text-primary">
          <FontAwesomeIcon icon={faDumbbell}></FontAwesomeIcon>Pro Fitness
        </h3>
        <h6 className="text-md-start pt-3 text-primary ">
          Select Today's excercise
        </h6>
      </div>
      <div className="excersiseList">
        {data.map((x) => (
          <Excercises data={x} key={x.id} addToList={addToList}></Excercises>
        ))}
      </div>
    </div>
  );
};

export default Activity;
