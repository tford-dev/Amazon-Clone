/* eslint-disable */ 
import React, {useEffect} from 'react'
import './App.css';
import {BrowserRouter as Router, Route, Routes as Switch} from "react-router-dom";
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Checkout from './Components/Checkout/Checkout';
import Login from './Components/Login/Login';
import Orders from './Components/Order/Orders';
import Payment from './Components/Payment/Payment';
import { useStateValue } from "./StateProvider";
import { auth } from './firebase';
import {loadStripe} from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js';

//Stripe auth token for testing
const promise = loadStripe('pk_test_51Jz2AaJB4ICtgxxcX846DpbJAOSxlICI7qquEssStztGUWl80uQPlYb0cPSYvWKgZYo4V47k3VMq6IaKrchvu1ZQ00Mjf3bEiV');

function App() {
	const [{}, dispatch] = useStateValue();

	useEffect(()=> {
		//useEffect will only run once the app loads, this hook is here to set the authenticated user

		//Logs the authenticated user to the console if authState is changed
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
		<div className="App">
			<Router>
			<Header />
				<Switch>
					<Route path="/orders" element={<Orders />} />
					<Route path="/login" element={<Login />} />
					<Route path="/checkout" element={<Checkout />} />
					<Route path='/payment' element={
						<Elements stripe={promise}>
							<Payment />
						</Elements>
					} />
					<Route exact path="/" element={<Home />} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
