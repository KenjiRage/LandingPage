import React from "react";

import Navbar from "./navbar.js";
import Jumbotron from "./jumbotron.js";
import Card from "./card.js";
import Footer from "./footer.js";



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
			<div className="text-center h-100">
				<Footer/>
			</div>
		</div>
	
	);
};

export default Home;
