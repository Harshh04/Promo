import React from "react";
import "../styles/ContactUs.css";

function ContactUs() {
	return (
		<div className="contact-body">
			<h1 className="contact-us"> Contact Us </h1>
			<div className="contact-info">
				<div className="contact-address">
					<h6>Corporate Office</h6>
					<h6>S306 │Vipul Trade Center, </h6>
					<h6>Sector 48│Sohna Road, </h6>
					<h6>Gurugram-122018 | INDIA </h6>
				</div>

				<div className="contact-address">
					<h6>Regional/Project Office: </h6>
					<h6>VB23 │ Block No. E, </h6>
					<h6>Primanti Garden Estate Sector 72 |</h6>
					<h6>Gurugram-122001 | INDIA</h6>
				</div>

				<div className="contact-address">
					<h6>Registered Office</h6>
					<h6>SAgra Metro DDC 1st Floor,</h6>
					<h6> Shalimar Logix, Rana Pratap Marg,</h6> 
					<h6> Hazratganj Lucknow-226001</h6>
					<h6>ST 12345</h6>
				</div>

				<div className="contact-no">
					<h6>Tel : 123-456-7890</h6>
					<h6>Email : hello@reallygreatsite.com</h6>
					<h6>Social : @reallygreatsite</h6>
				</div>
			</div>
		</div>
	);
}

export default ContactUs;
