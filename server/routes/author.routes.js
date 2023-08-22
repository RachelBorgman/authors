const AuthorController = require('../controllers/author.controller');  //Import the code from Code Block 1

module.exports = (app) => {
    // app.get('/api', AuthorController.index);
    app.get('/api/authors', AuthorController.findAllAuthors);
    app.get('/api/authors/:id', AuthorController.findOneSingleAuthor);
    app.put('/api/authors/:id', AuthorController.updateExistingAuthor);
    app.post('/api/authors', AuthorController.createNewAuthor);
    app.delete('/api/authors/:id', AuthorController.deleteAnExistingAuthor);
}