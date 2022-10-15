import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import { languages } from "../../helper/data";

const Cards = () => {
	const [showFront, setShowFront] = useState(languages.map((x) => true));
	const handleFlip = (index) => {
		let newShowFront = [...showFront];
		newShowFront[index] = !showFront[index];
		setShowFront(newShowFront);
	};
	const renderCards = (props, index) => {
		return (
			<div className="flippable-card-container m-auto" key={index}>
				<CSSTransition in={showFront[index]} timeout={300} classNames="flip">
					<div className="card" onClick={() => handleFlip(index)}>
						<div className="card-back">
							<div>
								<p>{props.options[0]}</p>
								<p>{props.options[1]}</p>
								<p>{props.options[2]}</p>
							</div>
						</div>
						<div className="card-front">
							<img src={props.img} alt={props.name} />
							<div>
								<h3>{props.name}</h3>
							</div>
						</div>
					</div>
				</CSSTransition>
			</div>
		);
	};
	return (
		<div className="languages-container">
			<h1>Languages</h1>
			<div className="cards-container d-flex flex-wrap">
				{languages.map(renderCards)}
			</div>
		</div>
	);
};

export default Cards;
