const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")('sk_test_51J6SuASDUcydOdrhTrffHRlrfanCa5HHOOyaMiY92W2e6y2HbZBeV2obM12UB31Z0mUz9qTcrxcmUiYISFYO1zJ6006P7QXgi3')

// API

// App Config
    const app = express();

// Middlewares
    app.use(cors({ origin: true }));
    app.use(express.json());

// API routes
    app.get('/', (request, response) => response.status(200).send('Hello World'))
    app.post('/payments/create', async (request, response) => {
        const total = request.query.total;

        console.log('Payment Request Recieved!!! for this amount >>> ', total)

        const paymentIntent = await stripe.paymentIntents.create({
            amount: total, //subunits of the currency
            currency: "usd",
        });

        // Created
        response.status(201).send({
            clientSecret: paymentIntent.client_secret,
        })
    })
// Listen command
    exports.api = functions.https.onRequest(app)