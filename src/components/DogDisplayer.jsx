import React from "react";
import { dogs } from "../assets/functions/dogArray";

export default function DogDisplayer() {
  return (
    <div className="box-container">
      {dogs.map((dog, el) =>
        dog[0] === dog[0].toUpperCase() ? (
          console.log(dog, " Uppercase")
        ) : (
          <div key={el + Date.now()} className="round">
            <h2 style={{ display: "block" }}>{el + 1}</h2>
            <h3>{dog}</h3>
          </div>
        )
      )}
    </div>
  );
}
