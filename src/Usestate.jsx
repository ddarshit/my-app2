import React from "react";
import { useState } from "react";

const Usestate = () => {
  const [car, setCar] = useState({
    brand: "Lemborghini",
    color: "Yellow",
    year: "1963",
    model: "Urus",
  });

  const updateColor = () => {
    setCar((previousState) => {
      return { ...previousState, model: "Aventador" };
    });
  };

  return (
    <>
      <div className="text-center">
        <h1>My {car.brand}</h1>
        <p>
          It is a {car.color} {car.model} from {car.year}.
        </p>
        <button type="button" onClick={updateColor}>
          model
        </button>
      </div>
    </>
  );
};

export default Usestate;
