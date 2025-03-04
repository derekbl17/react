import React from "react";
import Drill2 from "./Drill2";

export default function Drill1(props) {
  return (
    <div>
      {props.msg1}
      <Drill2 msgs={props} />
    </div>
  );
}
