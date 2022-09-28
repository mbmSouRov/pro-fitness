import React from "react";
import "./Excercises.css";
const Excercises = ({ data, addToList }) => {
  const { timerequired, forAge, name, details, picture } = data;
  return (
    <div className="excersises">
      <div class="card" style={{ width: "12rem", height: "24rem" }}>
        <img src={picture} className="card-img-top" alt="" />
        <div class="card-body d-flex flex-column justify-content-between">
          <div>
            <h6 class="card-title">{name}</h6>
            <p class="card-text">{details}</p>
            <p>
              For Age: <span>{forAge}</span>
            </p>
            <p>
              Time requried: <span>{timerequired}s</span>
            </p>
          </div>
          <button
            onClick={() => {
              addToList(data);
            }}
            href="{#}"
            className="btn btn-primary"
          >
            Add To List
          </button>
        </div>
      </div>
    </div>
  );
};

export default Excercises;
