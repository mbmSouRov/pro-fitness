import React from "react";
import Activity from "../Section-Activity/Activity";
import Calculation from "../Section-Calculation/Calculation";
import "./Homepage.css";

const Homepage = () => {
  return (
    <div className="mx-1 mb-5 d-flex justify-content-between homepage">
      <Activity></Activity>
      <Calculation></Calculation>
    </div>
  );
};

export default Homepage;
