import React, { Fragment } from "react";
import Navbar from "./navigation/Navbar";
import MainRoutes from "./Routes/MainRoutes";
import Footer from "./Footer";
import  {BrowserRouter} from "react-router-dom";


function App() {
	return (
		<BrowserRouter>

			<Navbar />
			<MainRoutes />
			<Footer />
		</BrowserRouter>
	);
}

export default App;
