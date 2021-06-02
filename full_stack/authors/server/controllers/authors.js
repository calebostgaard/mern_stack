const mongoose = require("mongoose");
const Author = mongoose.model("Author");

module.exports = {
    create: (req, res) => {
        Author.create(req.body)
            .then(author => {
                console.log(author);
                res.json(author);
            })
            .catch(err => {
                res.status(400).json(err)
            })

    },
    findAll: (req, res) => {
        Author.find()
            .then(authors => {
                console.log(authors);
                res.json(authors);
            })
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            })
    },
    findOne: (req, res) => {
        Author.findOne({_id: req.params.id})
            .then(author => {
                console.log(author);
                res.json(author);
            })
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            })
    },
    update: (req, res) => {
        Author.findOneAndUpdate({_id: req.params.id}, req.body, {new:true, runValidators: true})
            .then(updatedAuthor => {
                console.log(updatedAuthor);
                res.json(updatedAuthor);
            })
            .catch(err => {
                res.status(400).json(err)
            })
    },
    delete: (req, res) => {
        Author.deleteOne({ _id: req.params.id })
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