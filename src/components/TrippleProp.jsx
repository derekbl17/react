import React from "react";

export default function TrippleProp({ txtH1, txtH2, color }) {
  return (
    <div style={{ color: color }}>
      <h1>{txtH1}</h1>
      <h2>{txtH2}</h2>
    </div>
  );
}
