import React from "react";

const Cube = ({ number,color }) => {
  return (
    <div
      style={{
        width: "100px",
        height: "100px",
        backgroundColor: color || "black",
        margin: "10px",
        color: "white",
        display: "inline-flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "24px",
      }}
    >
      {number}
    </div>
  );
};

export default Cube;