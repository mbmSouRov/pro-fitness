import React, { useEffect, useState } from "react";
import Excercises from "../Excercise-List/Excercises";
import "./Activity.css";
const Activity = () => {
  const [excersies, setExcersies] = useState([]);

  useEffect(() => {
    fetch("excersise.json")
      .then((res) => res.json())
      .then((data) => setExcersies(data));
  }, []);

  return (
    <div className="col-9 p-4">
      <div className="mb-5">
        <h3 className="text-lg-start">Pro Fitness</h3>
        <h6 className="text-md-start pt-3 ">Select Today's excercise</h6>
      </div>
      <div className="excersiseList">
        {excersies.map((x) => (
          <Excercises data={x} key={x.id}></Excercises>
        ))}
      </div>
    </div>
  );
};

export default Activity;
