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

// Route
app.get('/', (req, res) => {
    res.json({message: 'Home'});
});

app.listen(3000 || process.env.PORT, () => console.log(`You are listening to the smooth sounds of port ${3000 || process.env.PORT}`));