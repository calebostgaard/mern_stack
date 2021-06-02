const products = require('../controllers/products');

module.exports = (app) => {
    app.get('/products', products.findAll);
    app.post('/products/create', products.create);
    app.get('/product/:id', products.findOne);
    app.put('/product/:id', products.update);
    app.delete('/product/:id', products.delete);
}
