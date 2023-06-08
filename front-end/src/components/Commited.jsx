import React from "react";
import "../styles/Commited.css";
import { Button } from "react-bootstrap";
import construction from "../images/construction.jpg";

function Commited() {
	return (
		<div className="portfolio-body">
			<img src={construction} className="portfolio-img" />
			<div>
				<h1 className="heading text">
					We know the importance of finishing on time and on budget.
				</h1>
				<h2 className="desc text">
					We believes that quality and customer focused approach is the
					sustainable way of doing business.
				</h2>

				<Button className="portfolio-button" variant="contained">
					Check portfolio
				</Button>
			</div>
		</div>
	);
}

export default Commited;
