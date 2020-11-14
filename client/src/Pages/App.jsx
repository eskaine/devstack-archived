import React, { Fragment } from "react";
import Navbar from "./navigation/Navbar";
import MainContainer from "./Routes/MainRoutes";
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
