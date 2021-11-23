/* eslint-disable */ 
import React, {useEffect} from 'react'
import './App.css';
import {BrowserRouter as Router, Route, Routes as Switch} from "react-router-dom";
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Checkout from './Components/Checkout/Checkout';
import Login from './Components/Login/Login';
import Order from './Components/Order/Orders';
import { useStateValue } from "./StateProvider";
import { auth } from './firebase';

function App() {
	const [{}, dispatch] = useStateValue();

	useEffect(()=> {
		//use effect will only run once the app loads
		auth.onAuthStateChanged((authUser)=> {
			console.log("THE USER IS >>>", authUser);

			if(authUser){
				//the user just logged in / the user was logged in 
				dispatch({
					type: "SET_USER",
					user: authUser,
				})
			} else {
				//the user is logged out
				dispatch({
					type: "SET_USER",
					user: null,
				})
			}
		})
	}, []);
	
	return (
		//BEM
		<div className="App">
			<Router>
			<Header />
				<Switch>
					<Route path="/orders" element={<Orders />} />
					<Route path="/login" element={<Login />} />
					<Route path="/checkout" element={<Checkout />} />
					<Route exact path="/" element={<Home />} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
