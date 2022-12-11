import React from "react";

import Navbar from "./navbar.js";
import Jumbotron from "./jumbotron.js";
import Card from "./card.js";



//create your first component
const Home = () => {
	return (
		
		<div className="text-center">
			<Navbar/>
			<Jumbotron/>
			<div className="container"></div>
			<div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4"></div>
			<Card/>
			<Card/>
			<Card/>
			<Card/>
		</div>
	
	);
};

export default Home;
