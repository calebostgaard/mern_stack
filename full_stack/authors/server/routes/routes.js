const authors = require('../controllers/authors');

module.exports = (app) => {
    app.get('/authors', authors.findAll);
    app.post('/authors/create', authors.create);
    app.get('/author/:id', authors.findOne);
    app.put('/author/:id', authors.update);
    app.delete('/author/:id', authors.delete);
}
