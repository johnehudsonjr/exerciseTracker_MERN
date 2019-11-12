const router = require('express').Router();
// Mongoose Model Schema
let User = require('../models/user.model');

// When user lands here /Users
router.route('/').get((req, res) => {
    // Mongoose Method .Find gets all users from atlas database.
    // .catch is a promise thagthis gets the users from the database
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err));
});

// users/add will Add new user to database
router.route('/add').post((req, res) => {
    const username = req.body.username;

    const newUser = new User({username});

    newUser.save()
        .then(() => res.json('User added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;