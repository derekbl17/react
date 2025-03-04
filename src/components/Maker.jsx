import React from "react";

export default function Maker(props) {
  return (
    <div>
      {props.marks.marks.map((mark, inx) => (
        <p key={inx + Date.now()}>{mark}</p>
      ))}
    </div>
  );
}
