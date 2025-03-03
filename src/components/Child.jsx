import React, { Component } from "react";
import Cube from "./Cube";
import Square from "./Cube2";
import Fetched from "./Fetched";

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
      sqrs: [],
    };
  }
  simpleFunc = (e) => {
    console.log("im simple func", this);
  };
  genSq = () => {
    const genNum = Math.floor(Math.random() * 11 + 10);
    this.setState((prevState) => ({
      sqArr: [...prevState.sqArr, genNum],
    }));
  };
  sortSq = () => {
    this.setState((prevState) => {
      const arrCopy = [...prevState.sqArr];
      const ambigCopy = [...prevState.sqrs];
      console.log(ambigCopy);
      return {
        sqArr: arrCopy.sort((a, b) => a - b),
        sqrs: ambigCopy.sort((a, b) => a.number - b.number),
      };
    });
  };
  ambiguousSquares = () => {
    const colors = ["red", "blue"];
    const create = colors.map((cl, i) => ({
      number: Math.floor(Math.random() * 11 + 10),
      color: cl,
    }));
    this.setState((prevState) => ({
      sqrs: [...prevState.sqrs, ...create],
    }));
  };
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
          <button onClick={this.genSq}>Generate Cube</button>
          <button onClick={this.sortSq}>Sort Cubes</button>
          <button onClick={this.ambiguousSquares}>
            Make 2 colored squares?
          </button>
          {console.log(this.state.sqArr)}
        </div>
        {this.state.sqArr.map((el, i) => (
          <Cube key={i} number={el} />
        ))}
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {this.state.sqrs.map((sqr, i) => (
            <Square key={i} sq={sqr} />
          ))}
        </div>
      </>
    );
  }
}
export default Child;
