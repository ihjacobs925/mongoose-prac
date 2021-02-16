const express = require('express');
const mongoose = require('mongoose');
const app = express();


// Middleware body parsing
app.use(express.urlencoded({ extended: false }));
// can now accept form data and json
app.use(express.json());

//Mongoose stuff
mongoose.connect(
    'mongodb://localhost/familyTree'),
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
const db = mongoose.connection;

//Connection methods
db.once('open', () => {
    console.log(`Connected to MongoDB at ${db.host}:${db.port}`);
});

db.on('error', err => {
    console.log(`Database Error:\n$${err}`);
});

//Testing Mongoose - TODO: Remove and fill with actual CRUD
const User = require('./models/user');

//Method 1
let topDog = new User({
    name: 'Anna Zocher',
    email: 'anna.zocher@ga.co'
});
topDog.save(err => {
    if (err) return console.error(`YIKES bud \n${err}`);
    console.log(`${topDog.name} was successfully created!`);
});

// Method 2
User.create({
    name: 'Gavin Callander',
    email: 'tosspot@GainNode.co'
}, (err, user) => {
    if (err) return console.error(`YIKES Trouble in Create:\n${err}`);
    console.log(`${user.name} hath been created`);
})

// Route
app.get('/', (req, res) => {
    res.json({message: 'Home'});
});

app.listen(3000 || process.env.PORT, () => console.log(`You are listening to the smooth sounds of port ${3000 || process.env.PORT}`));