import React, { Component } from "react";
import Cube from "./Cube";

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
      sqrs: []
    };
  }
  simpleFunc = (e) => {
    console.log("im simple func", this);
  };
  genSq = () => {
    const genNum=Math.floor(Math.random() * 11 + 10);
    this.setState((prevState)=>({
      sqArr: [...prevState.sqArr,genNum]
    }))
  };
  sortSq=()=>{
    this.setState((prevState)=>{
      const arrCopy=[...prevState.sqArr]
      return {sqArr: arrCopy.sort((a,b)=>a-b)}
    })
  }
  ambiguousSquares=()=>{
    const colors=["red","blue"]
    const create=colors.map((cl,i)=>({
      number: Math.floor(Math.random() * 11 + 10),
      color: cl
  }))
    this.setState((prevState)=>({
      sqrs:[...prevState.sqrs, ...create]
    }))
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
          <button onClick={this.genSq}>Generate Cube</button>
          <button onClick={this.sortSq}>Sort Cubes</button>
          <button onClick={this.ambiguousSquares}>Make 2 colored squares?</button>
          {console.log(this.state.sqArr)}
        </div>
        {this.state.sqArr.map((el, i) => (
          <Cube key={i} number={el}/>
        ))}
        <div style={{ display: "flex", flexWrap:"wrap"}}>{this.state.sqrs.map((sqr,i)=>(
          <Cube
          key={i}
          numbe={sqr.number}
          color={sqr.color}/>
        ))}</div>
      </>
    );
  }
}
export default Child;
