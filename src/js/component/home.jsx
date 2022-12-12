import React from "react";

import Navbar from "./navbar.js";
import Jumbotron from "./jumbotron.js";
import Card from "./card.jsx";
import Footer from "./footer.js";

//create your first component
const Home = () => {
	return (
		
		<div className="text-center">
			<Navbar/>
			<Jumbotron/>
			<div className="container">
			<div className="row row cols-1 row-cols-md-2 row-cols-lg-4 g-4">
					<Card
						img="https://edgewoodreit.com/wp-content/uploads/2018/01/500x325.png"
						title="Card Title"
						content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sapien libero, tincidunt quis dolor a, rhoncus maximus urna. Aenean dictum orci in faucibus varius."
						button="Find Out More!"
						href=""
					/>
					<Card
						img="https://edgewoodreit.com/wp-content/uploads/2018/01/500x325.png"
						title="Card Title"
						content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sapien libero, tincidunt quis dolor a, rhoncus maximus urna. Aenean dictum orci in faucibus varius."
						button="Find Out More!"
						href=""
					/>
					<Card
						img="https://edgewoodreit.com/wp-content/uploads/2018/01/500x325.png"
						title="Card Title"
						content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sapien libero, tincidunt quis dolor a, rhoncus maximus urna. Aenean dictum orci in faucibus varius."
						button="Find Out More!"
						href=""
					/>
					<Card
						img="https://edgewoodreit.com/wp-content/uploads/2018/01/500x325.png"
						title="Card Title"
						content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sapien libero, tincidunt quis dolor a, rhoncus maximus urna. Aenean dictum orci in faucibus varius."
						button="Find Out More!"
						href=""
					/>
				</div>
			</div>
			<Footer/>
		</div>
	
	);
};

export default Home;

