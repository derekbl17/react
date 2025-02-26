import React, { Component } from "react";

export class Child extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name || "Svecias",
      lastName: props.lastName || "-1stName",
      textColor: props.textColor || "blue",
      bc: props.bc || "grey",
      color: "pink",
      sqArr: [],
    };
    this.basicFunc = this.basicFunc.bind(this);
  }
  simpleFunc = (e) => {
    console.log("im simple func", this);
  };
  genSq = () => {
    const sqArrCopy = [...this.state.sqArr];
    sqArrCopy.push(Math.floor(Math.random() * 11 + 10));
    this.setState({ sqArr: sqArrCopy });
    console.log(sqArrCopy);
  };
  basicFunc() {
    console.log(this);
    this.setState({ textColor: "black" });
    const square = (
      <div
        style={{
          width: "100px",
          height: "100px",
          background: "black",
          margin: "1px",
          color: "white",
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {Math.floor(Math.random() * 11 + 10)}
      </div>
    );

    this.state.sqArr.push(square);
  }
  render() {
    return (
      <>
        <div
          style={{
            color: this.state.textColor,
            backgroundColor: this.state.bc,
          }}
        >
          Hello, {this.state.name} {this.state.lastName}!
          <button onClick={this.basicFunc}>click</button>
          {console.log(this.state.sqArr)}
        </div>
        {this.state.sqArr.map((el, i) => (
          <div style={{ display: "inline-block" }} key={i}>
            {el}
          </div>
        ))}
      </>
    );
  }
}
export default Child;
