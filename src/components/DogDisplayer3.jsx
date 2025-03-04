import React from "react";
import { dogs } from "../assets/functions/dogArray";

export default function DogDisplayer() {
  return (
    <div className="box-container">
      {dogs.map((dog, el) => (
        <div key={el + Date.now()} className={el % 2 == 0 ? "box" : "triangle"}>
          <h2 style={{ display: "block" }}>{el + 1}</h2>
          <h3>{dog}</h3>
        </div>
      ))}
    </div>
  );
}
