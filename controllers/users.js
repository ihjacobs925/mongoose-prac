const express = require('express');
const router = express.Router();
const User = require('../models/user');

// //Method 1
// let topDog = new User({
//     name: 'Anna Zocher',
//     email: 'anna.zocher@ga.co'
// });
// topDog.save(err => {
//     if (err) return console.error(`YIKES bud \n${err}`);
//     console.log(`${topDog.name} was successfully created!`);
// });

// // Method 2
// User.create({
//     name: 'Gavin Callander',
//     email: 'tosspot@Ga.co'
// }, (err, user) => {
//     if (err) return console.error(`YIKES Trouble in Create:\n${err}`);
//     console.log(`${user.name} hath been created`);
// })

// Index - GET /users
router.get('/', (req, res) => {
    User.find({}, (err, users) => {
        if (err) {
            console.error(`ERROR in USERS INDEX ROUTE:\n${err}`);
            res.status(500).json({ error: `ERROR in USERS index ROUTE`})
        }
        res.json({ users });
    });
});

// Detail - GET /users/:id
router.get('/:id', (req, res) => {
    User.findById(req.params.id, (err, user) => {
        if (err) {
            console.error(`ERROR in USERS DETAIL ROUTE:\n${err}`);
            res.status(500).json({ error: `ERROR in USERS DETAILS ROUTE`})
        }
        res.json({ user });
    });
});

// Create - POST
router.post('/', (req, res) => {
    console.log(req.body);
    User.create(req.body, (err, user) => {
        if (err) {
            console.error(`ERROR in USERS Create ROUTE:\n${err}`);
            res.status(500).json({ error: `ERROR in USERS Create ROUTE`})
        }
        res.json({ user });
    });
});

// Update - PUT /users/:id
router.put('/:id', (req, res) => {
    //User.update({}, {meta: { website: 'www.google.com' }}, (err, user) => {})
    // User.findOneAndUpdate()
    User.findByIdAndUpdate(req.params.id, req.body, { new: true}, (err, user) => {
        if (err) {
            console.error(`ERROR in USERS update ROUTE:\n${err}`);
            res.status(500).json({ error: `ERROR in USERS update ROUTE`})
        }
        res.json({ user });
    });
});

//Delete - DELETE /users/:id
router.delete('/:id', (req, res) => {
    User.findByIdAndDelete(req.params.id, (err, user) => {
        if (err) {
            console.error(`ERROR in USERS delete ROUTE:\n${err}`);
            res.status(500).json({ error: `ERROR in USERS delete ROUTE`})
        }
        res.json({ deleted: user })
    });
});

module.exports = router;
