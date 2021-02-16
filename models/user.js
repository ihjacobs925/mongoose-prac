// Get Mongoose in this js app
const mongoose = require('mongoose');

// Create a schema
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    meta: {
        age: Number,
        website: String,
    },
}, {
    timestamps: true
});

userSchema.methods.sayHello = function() {
    return `Hello! My name is ${this.name}!`
}

// Name the model
const User = mongoose.model('User', userSchema)

// export said model
module.exports = User;

// could also see module.exports = mongoose.model('User', userSchema);