import React from "react";
import "./Calculation.css";
const Calculation = () => {
  return (
    <div className="calculation col-lg-3">
      <div className="personal-details d-flex justify-content-evenly align-items-start mt-5">
        <img
          src="https://scontent.fdac27-2.fna.fbcdn.net/v/t39.30808-6/306545363_3232975053624669_2038473705134601153_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=21aoHj-SIV8AX8JZcQg&tn=LoSgtuaeKoPbqshM&_nc_ht=scontent.fdac27-2.fna&oh=00_AT8Cn8cSJx_Res4O7OHjUOI9qqSjKPflUqfdzbjMoPD6Pw&oe=63395500"
          alt=""
        />
        <div className="personal-info">
          <h5>MBM Sourov</h5>
          <p>Dhaka, Bangladesh</p>
        </div>
      </div>

      <div>
        <ul className="d-flex justify-content-between align-items-center">
          <li>
            <p className="text-center text-lg-start m-0">55 kg</p>
            <p className="text-center m-0">Weight</p>
          </li>
          <li>
            <p className="text-center text-lg-start m-0">5'6"</p>
            <p className="text-center m-0">Height</p>
          </li>
          <li>
            <p className="text-center text-lg-start m-0">25 yrs</p>
            <p className="text-center m-0">Age</p>
          </li>
        </ul>
      </div>

      <h6 className="text-center">Add a break</h6>

      <div>
        <ul className="d-flex justify-content-between list-unstyled">
          <button className="rounded-5 p-1 bg-white border-0 ">10s</button>
          <button className="rounded-5 p-1 bg-white border-0 ">20s</button>
          <button className="rounded-5 p-1 bg-white border-0 ">30s</button>
          <button className="rounded-5 p-1 bg-white border-0 ">40s</button>
          <button className="rounded-5 p-1 bg-white border-0 ">50s</button>
        </ul>
      </div>

      <h6 className="p-2">Excercise Details</h6>
      <div className="excTime d-flex justify-content-between p-2 rounded-2 m-2 ">
        <p className="m-0 text-white">Excercise Time</p>
        <p className="m-0 text-white">0 seconds</p>
      </div>

      <div className="d-flex justify-content-between p-2  rounded-2 m-2 brkTime">
        <p className="m-0 text-white">Break Time</p>
        <p className="m-0 text-white">0 seconds</p>
      </div>

      <button className="activity-btn w-75 border-0 mx-4 mt-4 rounded text-white bg-primary">
        Activity Completed
      </button>
    </div>
  );
};

export default Calculation;
