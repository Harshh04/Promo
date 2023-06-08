import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBolt } from "@fortawesome/free-solid-svg-icons";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "../styles/Navbar.css";

function CustomNavbar() {
	return (
		<div className="sticky-top">
			<Navbar bg="light" expand="lg" sticky="top">
				<Container>
					<Navbar.Brand href="#home">
						<em className="navbar-brand-name">
							<FontAwesomeIcon
								icon={faBolt}
								rotation={90}
								style={{ color: "#10ea47", marginRight: "10px" }}
							/>
							lipl
						</em>
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse
						id="basic-navbar-nav"
						className="justify-content-end"
					>
						<Nav className="nav-content">
							<Nav.Link href="#home">Home</Nav.Link>
							<Nav.Link href="#link">Projects</Nav.Link>
							<Nav.Link href="#link">Our Clients</Nav.Link>
							<Nav.Link href="#link">About</Nav.Link>
							<NavDropdown title="Working Process" id="basic-nav-dropdown">
								<NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
								<NavDropdown.Item href="#action/3.2">
									Our Strength
								</NavDropdown.Item>
								<NavDropdown.Item href="#action/3.3">
									Our Service Area
								</NavDropdown.Item>
								<NavDropdown.Item href="#action/3.4">
									Our Expertise
								</NavDropdown.Item>
								<NavDropdown.Divider />
								<NavDropdown.Item href="#action/3.4">
									Project Advisory Work
								</NavDropdown.Item>
							</NavDropdown>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</div>
	);
}

export default CustomNavbar;
