const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema({
    firstName: { 
        type: String , 
        required: [true, "First Name Required"],
        minlength: [3, "Must be at least 3 characters long"]
    },
    lastName: { 
        type: String,
        required: [true, "Last Name Required"],
        minlength: [3, "Must be at least 3 characters long"]
    },
}, { timestamps: true });


const Author = mongoose.model('Author', AuthorSchema);

module.exports = Author;