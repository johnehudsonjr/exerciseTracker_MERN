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


// MongoDB uri is where DB is stored
const uri = process.env.ATLAS_URI;

mongoose.connect(uri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});
 
const connection = mongoose.connection;

connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})

// Require files to our server
const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');

    // When when someone goes to https://localhost:5000/exercises, it will use exercisesRouter file (exercises.js)/ usersRouter
    app.use('/exercises', exercisesRouter);
    app.use('/users', usersRouter);

// Starts server to help with listening
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});

// cd into backend and run nodemon server to start server