import React from 'react'; 
import './hexagons.css'

export class Hexagons extends React.Component {
	render() {
		return(
			<div className="hexagon_container">
				<div className="hexagon hexagon1">
				  <div className="hexTop"></div>
				  <div className="hexBottom"></div>
				</div>
				<div className="hexagon hexagon2">
				  <div className="hexTop"></div>
				  <div className="hexBottom"></div>
				</div>
				<div className="hexagon hexagon3">
				  <div className="hexTop"></div>
				  <div className="hexBottom"></div>
				</div>
				<div className="hexagon hexagon4">
				  <div className="hexTop"></div>
				  <div className="hexBottom"></div>
				</div>
				<div className="hexagon hexagon5">
				  <div className="hexTop"></div>
				  <div className="hexBottom"></div>
				</div>
			</div>
			);
	}
}