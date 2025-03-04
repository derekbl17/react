import React from "react";

export default function OutsideFile({ file }) {
  const { color, text } = file;
  return <p style={{ color: color }}>{text}</p>;
}
