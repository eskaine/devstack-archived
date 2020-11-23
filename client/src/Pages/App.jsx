import React, { Fragment, useState } from "react";
import Navbar from "./navigation/Navbar";
import MainRoutes from "./Routes/MainRoutes";
import Footer from "./Footer";
import  {BrowserRouter} from "react-router-dom";


function App() {
	const [auth, setAuth] = useState(null);
	return (
		<Fragment>
			<Navbar />
			<MainRoutes auth={auth }/>
			<Footer />
		</Fragment>
	);
}

export default App;