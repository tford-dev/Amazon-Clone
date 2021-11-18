import React from 'react'
import './App.css';
import {BrowserRouter as Router, Route, Routes as Switch} from "react-router-dom";
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Checkout from './Components/Checkout/Checkout';

function App() {
	return (
		//BEM
		<div className="App">
			<Router>
			<Header />
				<Switch>
					<Route path="/checkout" element={<Checkout />} />
					<Route exact path="/" element={<Home />} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
