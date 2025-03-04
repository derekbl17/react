import React from "react";
import Third from "./Third";

export default function Second({ give, give2 }) {
  return (
    <div>
      {give}
      <Third give={give2} />
    </div>
  );
}
