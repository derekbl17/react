import React from "react";
import Drill4 from "./Drill4";

export default function Drill3({ messages }) {
  return (
    <div>
      {messages.msg3} <Drill4 messages={messages} />
    </div>
  );
}
