import React, {useState} from 'react';
import './Login.css';
import {Link, useNavigate} from 'react-router-dom';
import {auth} from '../../firebase'

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    //Function to sign in user
    const signIn = (e) => {
        e.preventDefault();

        auth
            //firebase method to sign in user
            .signInWithEmailAndPassword(email, password)
            //logic below only executes if there is an authenticated user
            .then(auth => {
                navigate('/');
                console.log(auth);
            })
            .catch(error => alert(error.message));
    }

    const register = e => {
        e.preventDefault();

        auth
            //firebase method to log in user
            .createUserWithEmailAndPassword(email, password)
            .then((auth)=> {
                //if successful, it will create a new user with email and password
                if(auth){
                    navigate('/');
                    console.log(auth);
                }
            })
            .catch(error => alert(error.message))
    }

    return (
        <div className="login">
            <Link to="/">
                <img 
                    className="login__logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"

                    alt="login logo"
                />
            </Link>
            
            <div className="login__container">
                <h1>Sign-In</h1>

                <form>
                    <h5>E-mail</h5>
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} />

                    <button type="submit" onClick={signIn} className="login__signInButton">Sign In</button>
                </form>

                <p>
                    By signing-in you agree to the AMAZON-tforddev Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>

                <button onClick={register} className="login__registerButton">Create your Amazon Account</button>
            </div>
        </div>
    )
}

export default Login
