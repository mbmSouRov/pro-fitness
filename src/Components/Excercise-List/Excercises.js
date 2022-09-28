import React from "react";
import img1 from "../../Images/full-shot-man-doing-lunges.jpg";
import "./Excercises.css";
const Excercises = ({ data }) => {
  const { timerequired, forAge, name } = data;
  return (
    <div className="excersises">
      <div class="card" style={{ width: "12rem" }}>
        <img src={img1} className="card-img-top" alt="" />
        <div class="card-body">
          <h6 class="card-title">{name}</h6>
          <p class="card-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam,
            qui?
          </p>
          <p>
            For Age: <span>{forAge}</span>
          </p>
          <p>
            Time requried: <span>{timerequired}s</span>
          </p>
          <a href="{#}" className="btn btn-primary">
            Add To List
          </a>
        </div>
      </div>
    </div>
  );
};

export default Excercises;
