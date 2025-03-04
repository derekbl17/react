import React from "react";
import { dogs } from "../assets/functions/dogArray";

export default function DogNumDisplayer() {
  return (
    <div>
      {dogs.map((dog, el) => (
        <div key={el + Date.now()}>
          <h3 style={{ color: dog.length > 6 ? "green" : "red" }}>
            {dog.length}
          </h3>
        </div>
      ))}
    </div>
  );
}
