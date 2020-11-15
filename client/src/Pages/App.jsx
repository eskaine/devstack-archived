import React, { Fragment } from "react";
import Navbar from "./navigation/Navbar";
import MainRoutes from "./Routes/MainRoutes";
import Footer from "./Footer";


function App() {
	return (
		<Fragment>
			<Navbar />
			<MainRoutes />
			<Footer />
		</Fragment>
	);
}

export default App;
