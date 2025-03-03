import React, { Component } from "react";

export default class Square extends Component {
  constructor() {
    super();
    this.state = { numToShow: 0 };
  }
  componentDidMount() {
    console.log(this.props.sq.number);
    console.log(this.props.sq.color);
    console.log(this.props.sq);
    this.setState(this.props.sq);
  }
  render() {
    return (
      <div style={{ "background-color": this.props.sq.color }}>
        {this.props.sq.number}
      </div>
    );
  }
}
