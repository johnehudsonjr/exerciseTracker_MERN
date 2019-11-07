const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose')

require('dotenv').config();

// Port server will run on
const app = express();
const port = process.env.PORT || 5000;

// Middleware that helps us parse json
app.use(cors());
app.use(express.json());

// Starts server to help with listening
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});  