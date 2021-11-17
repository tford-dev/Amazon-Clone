import React from 'react'
import './App.css';
import {BrowserRouter as Router, Route, Routes as Switch} from "react-router-dom";
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';

function App() {
	return (
		//BEM
		<div className="App">
			<Header />
			<Router>
				<Switch>
					<Route exact path="/" element={<Home />} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
