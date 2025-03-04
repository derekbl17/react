import React from "react";

export default function FirstFuncional({ dogs, name, color }) {
  return (
    <div>
      <p style={{ color: color }}>{name}</p>
    </div>
  );
}

// export default function FirstFuncional(props) {
//     const{dogs,name}=props//destructorig
//     return <div>{console.log(dogs, name)}</div>;
//   }
