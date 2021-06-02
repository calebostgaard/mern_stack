const mongoose = require("mongoose");
const Player = mongoose.model("Player");

module.exports = {
    create: (req, res) => {
        Player.create(req.body)
            .then(player => {
                console.log(player);
                res.json(player);
            })
            .catch(err => {
                res.status(400).json(err)
            })

    },
    findAll: (req, res) => {
        Player.find()
            .then(players => {
                console.log(players);
                res.json(players);
            })
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            })
    },
    findOne: (req, res) => {
        Player.findOne({_id: req.params.id})
            .then(player => {
                console.log(player);
                res.json(player);
            })
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            })
    },
    update: (req, res) => {
        Player.findOneAndUpdate({_id: req.params.id}, req.body, {new:true, runValidators: true})
            .then(updatedPlayer => {
                console.log(updatedPlayer);
                res.json(updatedPlayer);
            })
            .catch(err => {
                res.status(400).json(err)
            })
    },
    delete: (req, res) => {
        Player.deleteOne({ _id: req.params.id })
            .then(deleteConfirmation => {
                console.log(deleteConfirmation);
                res.json(deleteConfirmation);
            })
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            })
    },

}