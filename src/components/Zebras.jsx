import React from "react";

export default function Zebras({ num }) {
  const text = "Zebrai ir Bebrai";
  if (num === "1") return <h1 style={{ color: "blue" }}>{text}</h1>;
  if (num === "2") return <h1 style={{ color: "red" }}>{text}</h1>;
}
