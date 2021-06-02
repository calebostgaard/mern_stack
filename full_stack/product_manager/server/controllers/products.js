const mongoose = require("mongoose");
const Product = mongoose.model("Product");

module.exports = {
    create: (req, res) => {
        Product.create(req.body)
            .then(product => {
                console.log(product);
                res.json(product);
            })
            .catch(err => {
                console.log(err);
                res.json(err);
            })
    },
    findAll: (req, res) => {
        Product.find()
            .then(products => {
                console.log(products);
                res.json(products);
            })
            .catch(err => {
                console.log(err);
                res.json(err);
            })
    },
    findOne: (req, res) => {
        Product.findOne({_id: req.params.id})
            .then(product => {
                console.log(product);
                res.json(product);
            })
            .catch(err => {
                console.log(err);
                res.json(err);
            })
    },
    update: (req, res) => {
        Product.findOneAndUpdate({_id: req.params.id}, req.body, {new:true})
            .then(updatedProduct => {
                console.log(updatedProduct);
                res.json(updatedProduct);
            })
            .catch(err => {
                console.log(err);
                res.json(err);
            })
    },
    delete: (req, res) => {
        Product.deleteOne({ _id: req.params.id })
            .then(deleteConfirmation => {
                console.log(deleteConfirmation);
                res.json(deleteConfirmation);
            })
            .catch(err => {
                console.log(err);
                res.json(err);
            })
    },

}