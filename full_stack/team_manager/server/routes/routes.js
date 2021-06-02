const players = require('../controllers/players');

module.exports = (app) => {
    app.get('/players', players.findAll);
    app.post('/players/create', players.create);
    app.get('/player/:id', players.findOne);
    app.put('/player/:id', players.update);
    app.delete('/player/:id', players.delete);
}
