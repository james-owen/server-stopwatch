import React , { Component } from 'react';
import * as d3 from 'd3';

class Explorer extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.drawChart();
  }

  drawChart() {
      const data = [12, 5, 6, 6, 9, 10];
      const svg = d3.select("h1").append("svg").attr("width", 700).attr("height", 300);
      svg.selectAll("rect")
        .data(data)
        .enter()
        .append("rect")
        .attr("x", (d, i) => i * 70)
        .attr("y", 0)
        .attr("width", 25)
        .attr("height", (d, i) => d * 10)
        .attr("fill", "green");  
  }

  render() {
    return(
      <div>
        <h1>Hello James</h1>
        <svg>chart</svg>
      </div>
    );
  }
}

export default Explorer; 