import Excercises from "../Excercise-List/Excercises";
import "./Activity.css";
const Activity = ({ data, addToList }) => {
  return (
    <div className="col-9 p-4">
      <div className="mb-5">
        <h3 className="text-lg-start">Pro Fitness</h3>
        <h6 className="text-md-start pt-3 ">Select Today's excercise</h6>
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
