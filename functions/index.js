const functions = require("firebase-functions");
const express = require('express');
const cors = require('cors');
const stripe = require('stripe')('sk_test_51Jz2AaJB4ICtgxxco9RL1DHeVzFJjRkL0P0TF9DyybS74MkJJ4vSGEUZ1GMslg5ZjRbUmowjp3mO5zRl3aLKgJoy00Pw4jHiyj')

//API


//App config
const app = express();

// Middlewares
app.use(cors({origin: true}));
app.use(express.json());

//API routes
app.get('/', (req, res) => res.status(200).send("hello world"));

app.post('/payments/create', async (request, response) => {
    const total = request.query.total;
    console.log('Payment request recieved for this amount >>> ', total);
    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "usd",
    });

    //Created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
        
    })
});

// Listen command
exports.api = functions.https.onRequest(app);

//example endpoint
//http://localhost:5001/clone-18b36/us-central1/api