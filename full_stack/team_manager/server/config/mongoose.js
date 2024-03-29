const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/authormanager", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
    .then(() => console.log("Established a connection to the database"))
    .catch(err => console.log("Something went wrong when connecting to the database", err));

require("../models/Player");
