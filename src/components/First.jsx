import React from "react";
import Fourth from "./Fourth";

export default function First({ give, give2 }) {
  return (
    <div>
      {give}
      <Fourth give={give2} />
    </div>
  );
}
