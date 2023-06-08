import React from "react";
import "../styles/Doctors.css";
import roads from "../images/roads.jpg";
import architecture from "../images/architecture.jpg";
import railway from "../images/railway-transport.jpg";
import power from "../images/power.jpg";

function Doctors() {
	return (
		<div className="doctors-body">
			<h1 className="doctor-title">Our areas of business</h1>
			<h2 className="doctor-subtitle">
				Experts in studies, projects and construction management
			</h2>
			<div className="card-row">
				<div className="card">
					<img src={roads} className="card-img-top" alt="Skyscrapers" />
					<div className="card-body">
						<h4 className="card-title"></h4>
						<h4 className="card-title">Roads and Highways</h4>
						<p className="card-text">
							We have significantly increased activities drafting projects for
							roads, highways, freeways and Bus Rapid Transit (BRT) platforms ,
							both within the national territory and in other countries, mainly
							in Europe and Latin America.
						</p>
					</div>
				</div>

				<div className="card">
					<img
						src={railway}
						className="card-img-top"
						alt="Los Angeles Skyscrapers"
					/>
					<div className="card-body">
						<h4 className="card-title">Railways and Urban Transport</h4>
						<p className="card-text">
							High-Speed lines, conventional passenger and freight lines, metros
							and trams represent an important part of the services offered by
							Ardanuy Ingeniería. Ardanuy is highly competitive in this field
							and specializes in the design of compatible solutions with a
							sustainable development.
						</p>
					</div>
				</div>

				<div className="card">
					<img src={architecture} className="card-img-top" alt="Skyscrapers" />
					<div className="card-body">
						<h4 className="card-title">Architecture</h4>
						<p className="card-text">
							The Architecture, Building and Urban Planning Department at
							Ardanuy Ingeniería, SA offers a wide range of specialized
							services: feasibility studies, technical studies, designs (based
							on BIM technology) and projects, management and administration of
							works (on behalf of the owner), technical assistance and
							consultation, integrated project management ("" project management
							""), pathology studies, safety and health studies, positioning of
							sites, etc.
						</p>
					</div>
				</div>

				<div className="card">
					<img src={power} className="card-img-top" alt="Palm Springs Road" />
					<div className="card-body">
						<h4 className="card-title">Power</h4>
						<p className="card-text">
							We have vast experience in the field of power generation,
							distribution, and transmission having carried out numerous
							electrical engineering projects: Substations, High Voltage Lines,
							Distribution Centres and Transformation Centres for voltages of
							3kV up to 400kV. Among other things, Ardanuy is a Qualified
							provider for Gas Natural Fenosa, REE (Spain’s Electrical Network),
							E-ON, ENDESA and ITER for HV works.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Doctors;
