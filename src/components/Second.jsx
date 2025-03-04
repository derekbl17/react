import React from "react";
import Third from "./Third";

export default function Second({ give }) {
  return (
    <div>
      <Third give={give} />
    </div>
  );
}
