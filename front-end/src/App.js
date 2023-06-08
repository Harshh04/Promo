import React from "react";
import Opening from "./components/Opening";
import "./styles/App.css";
import Commited from "./components/Commited";
import "bootstrap/dist/css/bootstrap.min.css";
import Doctors from "./components/Doctors";
import Services from "./components/Services";
import ContactUs from "./components/ContactUs";
import Navbar from "./components/Navbar";

function App() {
	return (
		<div className="App">
				<header className="App-header">
				<Navbar />
				<Opening />
				<Commited />
				<Doctors />
				<Services />
				<ContactUs />
			</header>
		</div>
	);
}

export default App;
