const express = require("express");
const bodyParser = require("body-parser");
const webPush = require("web-push");
const path = require("path");
require("dotenv").config();

const pool = require("./db");

const app = express();

// Set static path
app.use(express.static(path.join(__dirname, "client")));

app.use(bodyParser.json());

// Store these in env variables. This is a test app
// so it's stored here
const publicKey =
  "BIR5FJf6oSqUmsc1tdHdZXWAUo3QISaJjc7dAFLRA9af4dqbe4fER9VFa0u1x8lFY8sh0NXT5Li2Su03NyQ0vmc";
const privateKey = "7b3xTpNMctchifRoLjq8l0n8rwebNxRuakh7WTXJ9a8";

webPush.setVapidDetails("mailto:test@test.com", publicKey, privateKey);

// Subscribe Route
app.post("/subscribe", async (req, res) => {
  // Get pushSubscriptionObject
  const subscription = req.body;

  // Send 201 - resource created
  res.status(201).json({});

  // Get data from database and show the latest entry
  try {
    const data = await pool.query("SELECT * FROM notif ORDER BY id DESC");
    console.log(data.rows);

    // Create a payload
    const payLoad = JSON.stringify({
      title: "Push Test",
      body: data.rows[0].body,
    });

    // Pass object to sendNotification()
    webPush
      .sendNotification(subscription, payLoad)
      .catch((err) => console.error(err));
  } catch (error) {
    console.error(error.message);
  }
});

// Insert new entries into database
app.post("/data", async (req, res) => {
  try {
    const { bodyData } = req.body;
    console.log(bodyData);
    const data = await pool.query(
      "INSERT INTO notif (body) VALUES($1) RETURNING *",
      [bodyData]
    );
    res.json(data.rows[0]);
  } catch (error) {
    console.error(error.message);
  }
});

const port = 5000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
