
import React, { useRef, useEffect, useContext } from 'react';
import * as d3 from 'd3';
import { ToggleContext } from '../../../context/ToggleContext/ToggleContext';

const BarChart = ({ data, width = 300, height = 200 }) => {
  const { isToggled } = useContext(ToggleContext);
  const svgRef = useRef();

  useEffect(() => {
    const textColor = getComputedStyle(document.documentElement).getPropertyValue('--text-color');

    
    d3.select(svgRef.current).selectAll('*').remove();

    const xScale = d3.scaleBand()
      .domain(data.map(item => item.name))
      .range([30, width])
      .padding(0.5); 

    const yScale = d3.scaleLinear()
      .domain([0, 100*1.1]) 
      .range([height - 30, 0]); 

    const svg = d3.select(svgRef.current)
      .attr('width', width)
      .attr('height', height)
      .style('background-color', isToggled ? 'white' : 'white')
      .style('border', '1px solid black');

    const yAxis = d3.axisLeft(yScale)
      .ticks(5) 
      .tickFormat(d3.format('d')); 

    svg.append('g')
      .attr('class', 'y-axis')
      .attr('transform', `translate(30, 0)`) 
      .call(yAxis);

    const xAxis = d3.axisBottom(xScale);

    svg.append('g')
      .attr('class', 'x-axis')
      .attr('transform', `translate(0, ${height - 30})`)
      .style('font-size','11px')
      .style('letter-spacing','0.6px') 
      .call(xAxis);

    svg.selectAll('rect')
      .data(data)
      .enter()
      .append('rect')
      .attr('x', d => xScale(d.name))
      .attr('y', d => yScale(Math.min(d.value, 100))) 
      .attr('width', xScale.bandwidth()) 
      .attr('height', d => {
        const barHeight = height - 30 - yScale(Math.min(d.value, 100));
        return barHeight < 0 ? 0 : barHeight; 
      }) 
      .attr('fill', isToggled ? '#D3D3D3' : textColor.trim())
      .on('mouseover', function () {
        d3.select(this)
          .attr('stroke', '#1b1c1f') 
          .attr('stroke-width', 2); 
      })
      .on('mouseout', function () {
        d3.select(this)
          .attr('stroke', 'none'); 
      });

    svg.selectAll('text')
      .data(data)
      .enter()
      .append('text')
      .attr('x', d => xScale(d.name) + xScale.bandwidth() / 2) 
      .attr('y', d => yScale(Math.min(d.value, 100)) - 5) 
      .attr('text-anchor', 'middle')
      .text(d => d.name)
      .attr('fill', isToggled ? 'black' : 'black')
      .attr('font-size','20px')

  }, [data, width, height, isToggled]);

  return <svg ref={svgRef}></svg>;
};

export default BarChart;
