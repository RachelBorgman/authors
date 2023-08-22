const Author = require('../models/author.model');

module.exports.index = (request, response) => {  //We are exporting a key:val pair of index : function
    response.json({     // This is where we're setting the API's response to the requesting client
        message: "Hello World"
    });
}

module.exports.createNewAuthor = (req, res) => {
    Author.create(req.body) //This will use whatever the body of the client's request sends over
        .then(author => res.json(author))
        .catch((err) => {
            res.status(400).json({ err });
        })
}

module.exports.findAllAuthors = (req, res) => {
    Author.find({})
        .then((allAuthors) => {
            res.json(allAuthors)
        })
        .catch((err) => {
            res.status(400).json({ err });
        })
}

module.exports.findOneSingleAuthor = (req, res) => {
    Author.findOne({ _id: req.params.id })
        .then(oneSingleAuthor => {
            res.json(oneSingleAuthor)
        })
        .catch((err) => {
            res.status(400).json({ err });
        })
}

module.exports.updateExistingAuthor = (req, res) => {
    Author.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedAuthor => {
            console.log("THIS IS UPDATED AUTHOR BEFORE RES.JSON: ", updatedAuthor)
            res.json(updatedAuthor)
            console.log("THIS IS UPDATED AUTHOR AFTER RES.JSON: ", updatedAuthor)
        })
        .catch((err) => {
            res.status(400).json({ err });
        })
}

module.exports.deleteAnExistingAuthor = (req, res) => {
    Author.deleteOne({ _id: req.params.id })
        .then(result => {
            res.json(result)
        })
        .catch((err) => {
            res.status(400).json({ err });
        })
}