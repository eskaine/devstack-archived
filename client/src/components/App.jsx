import React, { Fragment } from "react";
import Navbar from "./navigation/Navbar";
import MainContainer from "./MainContainer";
import Footer from "./Footer";


function App() {
	return (
		<Fragment>
			<Navbar />
			<MainContainer />
			<Footer />
		</Fragment>
	);
}

export default App;
