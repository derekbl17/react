import React from "react";
import Drill3 from "./Drill3";

export default function Drill2({ msgs }) {
  return (
    <div>
      {msgs.msg2} <Drill3 messages={msgs} />
    </div>
  );
}
