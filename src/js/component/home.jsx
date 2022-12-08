import React from "react";

import Navbar from "./navbar.js";
import Jumbotron from "./jumbotron.js";

//create your first component
const Home = () => {
	return (
		
		<div className="text-center">
			<Navbar/>
			<Jumbotron/>
		</div>
	
	);
};

export default Home;
