const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const { request, response } = require("express");
const stripe = require("stripe")(
  "sk_test_51HvHMvJEz9lcLdHSzJRS2fBmtBs1fCE6xRRkkQc2tyewqdqofvg7xAyLKqcmsDg0y3B8yHLUWINGGPYr2kBsa1C500vg6xpfKl"
);

//API

// - App config

const app = express();

// - Middleware
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get("/", (request, response) => response.status(200).send("hello world"));
app.post("/payments/create", async (request, response) => {
  const total = request.query.total;
  console.log("payment request received", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subuits of the currecny
    currency: "usd",
  });

  //ok - created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

//- listen command
exports.api = functions.https.onRequest(app);
//example endpoint
//http://localhost:5001/clone-105cd/us-central1/api
