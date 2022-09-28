import React, { useEffect, useState } from "react";
import Activity from "../Section-Activity/Activity";
import Calculation from "../Section-Calculation/Calculation";
import "./Homepage.css";

const Homepage = () => {
  const [excercises, setExcercises] = useState([]);
  const [list, setList] = useState([]);
  useEffect(() => {
    fetch("excersise.json")
      .then((res) => res.json())
      .then((data) => setExcercises(data));
  }, []);

  const addToList = (listedExcercise) => {
    const newList = [...list, listedExcercise];
    setList(newList);
  };

  return (
    <div className="mx-1 d-flex justify-content-between homepage">
      <Activity data={excercises} addToList={addToList}></Activity>
      <Calculation listedExc={list}></Calculation>
    </div>
  );
};

export default Homepage;
