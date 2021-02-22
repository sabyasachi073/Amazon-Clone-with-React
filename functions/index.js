const functions = require("firebase-functions");
const express = require("express");
const cors  = require("cors");
const { request } = require("express");
const stripe = require("stripe")('sk_test_51INI3bBdzPuJ8T7uZQIiWPe3TOheKIvLTQwG0fN203fbqlxGPWLwjWnJTqfUG3nILz2NYmKrjQkWf16J0Q10AniJ00Xssc8HHM')

// API

// App config
const app = express();

// Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// API routes
app.get('/', (request, response) => response.status(200).send('Hello World'))

app.post('/payments/create', async (request, response) => {
    const total = request.query.total;

    console.log("Payment Request Received BOOM!!! for this amount >>>", total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, // subunits of the currency
        currency: "INR",
    });

    // OK - Created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret
    })
})

// Listen command
exports.api = functions.https.onRequest(app)

// http://localhost:5001/clone-9ef5b/us-central1/api