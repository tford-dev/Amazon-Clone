/* eslint-disable */ 
import React, {useState, useEffect} from 'react';
import './Payment.css';
import {useStateValue} from '../../StateProvider';
import CheckoutProduct from '../Checkout/CheckoutProduct';
import {Link, useNavigate} from 'react-router-dom';
import {CardElement, useStripe, useElements} from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import {getBasketTotal} from '../../reducer';
import {db} from "../../firebase";
import axios from '../../axios';

const Payment = () => {
    const [{basket, user}, dispatch] = useStateValue();
    const navigate = useNavigate();
    
    //Declares features from Stripe API
    const stripe = useStripe();
    const elements = useElements();

    //state for payment processing in Stripe
    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("");
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState(true);
    
    useEffect(()=> {
        //generate the distinct stripe secret which allows app to charge a customer
        const getClientSecret = async () => {
            const response = await axios({
                method: 'post',
                //Stripe expects the total in a currencies submits
                url: `/payments/create?total=${getBasketTotal(basket) * 100}`
            });
            setClientSecret(response.data.clientSecret)
        }

        getClientSecret();
    }, [basket])

    console.log(clientSecret);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setProcessing(true);

        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({paymentIntent}) => {
            //Promise to add order information to firebase database
            //paymentIntent = payment confirmation
            db
                .collection('users')
                .doc(user?.uid)
                .collection('orders')
                .doc(paymentIntent.id)
                .set({
                    basket: basket,
                    amount: paymentIntent.amount,
                    created: paymentIntent.created
                })
            
            setSucceeded(true);
            setError(null);
            setProcessing(false);
             
            //Empty basket after the purchase is made
            dispatch({
                type: 'EMPTY_BASKET'
            })

            //Redirects user to '/orders' route to see the summary of their purchase
            navigate("/orders", { replace: true });
        })
    }

    const handleChange = (e) => {
        //Listen for changes in the CardElement
        // + display any errors as the customer types their card details
        setDisabled(e.empty);
        setError(e.error ? e.error.message: "");
    }

    return (
        <div className='payment'>
            <div className='payment__container'>
                <h1>
                    Checkout (
                        <Link to='/checkout'>{basket?.length} items</Link>
                    )
                </h1>

                {/*Payment section - delivery address*/}
                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Delivery Address</h3>
                    </div>
                    <div className='payment__address'>
                        {/*If a user is signed in, their email is displayed*/}
                        <p>{user?.email}</p>
                        <p>123 React Lane</p>
                        <p>Los Angeles, CA</p>
                    </div>
                </div>

                {/*Payment section - Review Items*/}
                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Review items and delivery</h3>                       
                    </div>
                    <div className='payment__items'>
                        {/*Maps through basket to show items*/}
                        {basket.map(item => (
                            <CheckoutProduct 
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))}
                    </div>
                </div>

                {/*Payment section - Payment method*/}
                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Payment Method</h3>
                    </div>
                    <div className='payment__details'>
                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange}/>

                            <div className='payment__printContainer'>
                                <CurrencyFormat
                                renderText={(value)=> (
                                    <h3>Order Total: {value}</h3>
                                )}
                                decimalScale={2}
                                value={getBasketTotal(basket)}
                                displayType={"text"}
                                thousandSeparator={true}
                                prefix={"$"}
                                />

                                <button disabled={processing || disabled || succeeded}>
                                    {/*Ternary operator in span to show whether they can 
                                    purchase an order or if it processing*/}
                                    <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                                </button>
                            </div>
                            {/* Errors */}
                            {error && <div>{error}</div>}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Payment;