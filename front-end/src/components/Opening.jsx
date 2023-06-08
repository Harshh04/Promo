import React from "react";
import background from "../images/metro-background.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBolt } from "@fortawesome/free-solid-svg-icons";
import "../styles/Opening.css";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS

const ImageOverText = () => {
	return (
		<div className="container">
			<img src={background} alt="Background" className="backgroundImage" />
			<div className="content">
				<FontAwesomeIcon
					className="brandIcon"
					icon={faBolt}
					rotation={90}
					style={{ color: "#10ea47", fontSize: "100px", marginBottom: 0 }}
				/>
				<em>
					<p className="textContent">lipl</p>
				</em>
				<p className="brand-subHeading"> Leap Infraasys Pvt. LTD.</p>
				<p className="brand-opening">
					Quality is not an accident . rather Quality is a choice
				</p>
			</div>
		</div>
	);
};

export default ImageOverText;
