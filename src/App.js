import React from 'react';
import Styleall from './Styleall';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';

//Pages
import Home from './Pages/Home';
import SignUp from './Pages/SignupPage';
import Pricing from './Pages/PricingPage';
import Footer from './Components/Footer/Footer';



function App() {
	return (
		<Router>
			<Styleall />
			 <Navbar /> 
			<Routes>
				<Route path="/" exact element={<Home />} />
				<Route path="/signup"  element ={<SignUp /> } />
				<Route path="/pricing"   element={<Pricing />} /> 
			</Routes>
			<Footer />
		</Router>
	);
}

export default App;
